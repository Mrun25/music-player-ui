
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full neon-glow hover:neon-glow-blue transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      <div className="relative z-10 transition-all duration-300 ease-in-out">
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-200" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </div>
      <span className="absolute inset-0 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm transform scale-0 transition-transform duration-300 group-hover:scale-100"></span>
    </button>
  );
};
