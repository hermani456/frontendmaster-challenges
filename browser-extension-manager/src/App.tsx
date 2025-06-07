import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

function App() {
  const getInitialColorMode = (): boolean => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialColorMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  // const toggleTheme = () => {
  //   setIsDarkMode((current) => !current);
  // };

  return (
    <div className="bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleTheme={setIsDarkMode} />
    </div>
  );
}

export default App;
