import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-1 border rounded-lg"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}