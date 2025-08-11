import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

function useTheme() {
  return { theme: 'dark' };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1A1A1A]/90 backdrop-blur-lg shadow-md' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#00FF8C] font-mono text-xl font-semibold">&gt;_farhan.sh</span>
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex space-x-6 mr-4">
            <a href="#about" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>About</a>
            <a href="#experience" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>Experience</a>
            <a href="#skills" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>Skills</a>
            <a href="#certifications" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>Certifications</a>
            <a href="#testimonials" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>Testimonials</a>
            <a href="#contact" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>Contact</a>
            <a href="https://medium.com/@fxrhanansari" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}>Blog</a>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleMenu} 
            className={`text-white hover:text-[#00FF8C] focus:outline-none`}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#1A1A1A] border-gray-800 w-full border-t transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#experience" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            Experience
          </a>
          <a 
            href="#skills" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            Skills
          </a>
          <a 
            href="#certifications" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            Certifications
          </a>
          <a 
            href="#testimonials" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            Contact
          </a>
          <a 
            href="https://medium.com/@fxrhanansari" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300`}
            onClick={closeMenu}
          >
            Blog
          </a>
        </div>
      </div>
    </header>
  );
}