import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  const getData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    getData()
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return <>{advice}</>;
}

export default App;
