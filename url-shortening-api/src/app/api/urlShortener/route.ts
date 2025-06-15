interface ShortenRequest {
  url: string;
}

interface ShortenResponse {
  originalUrl: string;
  shortenedUrl: string;
}

interface ErrorResponse {
  error: string;
  details?: unknown;
}

interface CleanUriResponse {
  result_url: string;
  error?: string;
}

const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};

const API_TIMEOUT = 5000;
const CLEANURI_API_URL = "https://cleanuri.com/api/v1/shorten";

function createTimeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Request timed out after ${ms}ms`)), ms);
  });
}

function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}

function createJsonResponse<T>(data: T, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache, no-store, must-revalidate"
    }
  });
}

async function shortenUrlWithCleanUri(url: string): Promise<string> {
  try {
    const response = await Promise.race([
      fetch(CLEANURI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }),
      createTimeout(API_TIMEOUT)
    ]) as Response;

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      throw new Error(`API returned status ${response.status}: ${errorText}`);
    }

    const data = await response.json() as CleanUriResponse;

    if (data.error) {
      throw new Error(`API error: ${data.error}`);
    }

    if (!data.result_url) {
      throw new Error("API returned no shortened URL");
    }

    return data.result_url;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`URL shortening service error: ${error.message}`);
    }
    throw error;
  }
}

export const POST = async (request: Request): Promise<Response> => {
  try {
    const body = await request.json() as ShortenRequest;

    if (!body.url) {
      return createJsonResponse<ErrorResponse>(
        { error: "URL is required" },
        HTTP_STATUS.BAD_REQUEST
      );
    }

    if (!isValidUrl(body.url)) {
      return createJsonResponse<ErrorResponse>(
        { error: "Invalid URL format. URL must begin with http:// or https://" },
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const shortenedUrl = await shortenUrlWithCleanUri(body.url);

    return createJsonResponse<ShortenResponse>(
      { originalUrl: body.url, shortenedUrl },
      HTTP_STATUS.OK
    );

  } catch (error) {
    let status = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    let message = "Failed to shorten URL";

    if (error instanceof Error) {
      if (error.message.includes("timed out")) {
        status = HTTP_STATUS.SERVICE_UNAVAILABLE;
        message = "URL shortening service is not responding";
      }

      console.error({
        timestamp: new Date().toISOString(),
        error: error.message,
        type: error.name,
        stack: process.env.NODE_ENV !== "production" ? error.stack : undefined
      });
    } else {
      console.error("Unknown error type:", error);
    }

    return createJsonResponse<ErrorResponse>(
      {
        error: message,
        ...(process.env.NODE_ENV !== "production" && { details: error instanceof Error ? error.message : String(error) }),
      },
      status
    );
  }
};

export const OPTIONS = () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
};