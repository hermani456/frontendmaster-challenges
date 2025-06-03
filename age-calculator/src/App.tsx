import { useState } from "react";
import Form from "./components/form";
import AgeDisplay from "./components/AgeDisplay";
import { calculateAge } from "./utils/calculateAge";
import type { AgeResult } from "./utils/calculateAge";

function App() {
  const [age, setAge] = useState<{
    years: number | string;
    months: number | string;
    days: number | string;
  }>({
    years: "--",
    months: "--",
    days: "--",
  });

  const handleCalculateAge = (day: number, month: number, year: number) => {
    const result: AgeResult = calculateAge(day, month, year);
    setAge(result);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f0f0f0] p-4 font-poppins">
      <div className="bg-white w-full max-w-xl rounded-2xl rounded-br-[100px] p-10 shadow-md">
        <Form onCalculateAge={handleCalculateAge} />
        <AgeDisplay age={age} />
      </div>
    </section>
  );
}

export default App;
