import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Extentions from "./components/extensions";

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

  return (
    <div className="min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleTheme={setIsDarkMode} />
      <Extentions />
    </div>
  );
}

export default App;
