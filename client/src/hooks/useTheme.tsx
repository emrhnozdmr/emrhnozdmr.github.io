import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    // Check for stored preference
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = 
      theme === "dark" || 
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Remove both classes first
    root.classList.remove("dark", "light");
    document.body.classList.remove("dark", "light");
    
    // Apply the appropriate class
    if (isDark) {
      root.classList.add("dark");
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      root.classList.add("light");
      document.body.classList.add("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#1A1A1A";
    }

    // Store the preference if it's not system
    if (theme !== "system") {
      localStorage.setItem("theme", theme);
    }

    // Setup media query listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        const systemIsDark = mediaQuery.matches;
        root.classList.remove("dark", "light");
        document.body.classList.remove("dark", "light");
        
        if (systemIsDark) {
          root.classList.add("dark");
          document.body.classList.add("dark");
          document.body.style.backgroundColor = "#121212";
          document.body.style.color = "#ffffff";
        } else {
          root.classList.add("light");
          document.body.classList.add("light");
          document.body.style.backgroundColor = "#f8f9fa";
          document.body.style.color = "#1A1A1A";
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}