import React, { useState, useEffect } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handlerTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handlerTheme}>
      <span className="dark:hover:text-borderDarkmode font-moch dark:text-white hover:text-primarioH  dark:hidden flex flex-row items-center gap-x-3">
        DarkMode
      </span>

      <span className="dark:hover:text-borderDarkmode font-moch dark:text-white hover:text-primarioH  hidden dark:flex flex-row items-center gap-x-3">
        LightMode
      </span>
    </button>
  );
};
