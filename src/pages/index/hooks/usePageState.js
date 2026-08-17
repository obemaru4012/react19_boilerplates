import { useEffect, useState } from "react";

const COLOR_MODE_KEY = "color-mode";

const getInitialMode = () => {
  const saved = window.localStorage.getItem(COLOR_MODE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Hooks
 */
const usePageState = ({ props }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(COLOR_MODE_KEY, mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { mode, toggleMode };
};

export default usePageState;
