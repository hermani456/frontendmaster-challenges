import Form from "./components/form";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center gap-6 md:gap-10 text-white pt-10 px-4 sm:px-6 md:px-8">
        <h2 className="!mt-4 md:!mt-10 text-xl font-semibold">Coding conf</h2>
        <h1 className="text-2xl md:text-4xl font-semibold max-w-sm md:max-w-2xl text-center">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className="text-gray-300 text-base md:text-lg text-center">Secure your spot at the next year&apos;s biggest coding conference</p>
      </div>
      <Form />
    </div>
  );
}
