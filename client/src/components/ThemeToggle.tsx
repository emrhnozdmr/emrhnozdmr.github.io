import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <motion.button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${
          theme === "dark" 
            ? "bg-[#1A1A1A] text-[#00FF8C] hover:bg-[#1A1A1A]/80" 
            : "bg-white text-[#1A1A1A] hover:bg-gray-100"
        } transition-colors duration-300 relative`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <div className="relative w-6 h-6">
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ 
              opacity: theme === "dark" ? 1 : 0,
              rotate: theme === "dark" ? 0 : -45
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Moon className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ 
              opacity: theme === "light" ? 1 : 0,
              rotate: theme === "light" ? 0 : 45
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Sun className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}