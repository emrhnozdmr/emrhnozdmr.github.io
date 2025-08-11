import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-gray-400 text-sm">
              <span className="text-[#00FF8C]">&copy;</span> {new Date().getFullYear()} Farhan Ansari. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop} 
              className="text-gray-400 hover:text-[#00FF8C] transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
