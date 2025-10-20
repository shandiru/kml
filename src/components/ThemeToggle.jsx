import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    root.style.colorScheme = next ? "dark" : "light";
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium border transition-colors duration-300
        ${isDark 
          ? "bg-[#1A1A1A] text-white border-gray-700 hover:bg-[#2A2A2A]" 
          : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0096E6]/50 ${className}`}
    >
      {isDark ? <FaMoon /> : <FaSun />}
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
