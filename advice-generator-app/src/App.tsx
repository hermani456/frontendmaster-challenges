import { useEffect, useState } from "react";
import divider from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";

interface AdviceSlip {
  id: number;
  advice: string;
}

function App() {
  const [advice, setAdvice] = useState<AdviceSlip | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    // add a timestamp to prevent caching
    const timestamp = Date.now();
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${timestamp}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setAdvice(data.slip);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1f2632] p-3">
      <div className="relative bg-[#323a49] max-w-lg rounded-xl p-10 flex flex-col items-center gap-5 text-center">
        {isLoading ? (
          <>
            <h6 className="text-[#52ffa8] text-sm font-semibold tracking-widest">
              LOADING...
            </h6>
            <p className="text-white text-2xl font-semibold">
              "Fetching advice..."
            </p>
          </>
        ) : (
          <>
            <h6 className="text-[#52ffa8] text-sm font-semibold tracking-widest">
              ADVICE #{advice?.id}
            </h6>
            <p className="text-white text-[28px] font-semibold font-dm-sans">
              "{advice?.advice}"
            </p>
          </>
        )}
        <img src={divider} alt="divider" className="my-6 hidden md:block" />
        <img
          src={dividerMobile}
          alt="divider"
          className="my-6 block md:hidden"
        />
        <button
          className={`bg-[#52ffa8] rounded-full p-4 absolute bottom-0 translate-y-1/2 cursor-pointer hover:opacity-80 transition-opacity ${
            isLoading ? "animate-pulse" : ""
          }`}
          aria-label="Get new advice"
          onClick={getData}
          disabled={isLoading}
        >
          <img src={dice} alt="dice icon" />
        </button>
      </div>
    </section>
  );
}

export default App;
