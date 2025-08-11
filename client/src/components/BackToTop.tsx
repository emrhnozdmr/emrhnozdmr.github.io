import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        theme === "dark" 
          ? "bg-[#1A1A1A] text-[#00FF8C] border border-[#00FF8C]/30 hover:bg-[#00FF8C]/20" 
          : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
      }`}
      aria-label="Scroll to top"
      style={{ zIndex: 40 }}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
} 