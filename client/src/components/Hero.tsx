import { motion } from "framer-motion";
import useTypewriter from "@/hooks/useTypewriter";

export default function Hero() {
  const name = useTypewriter("FARHAN ANSARI", 100);
  const title = useTypewriter("Security Associate at Rapidops Inc.", 50, 1200);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/90 to-[#121212]"></div>
      </div>

      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 mx-auto p-2 border border-[#00FF8C] rounded-lg bg-[#1A1A1A] bg-opacity-70"
        >
          <p className="font-mono text-sm text-[#00FF8C]">// cybersecurity professional</p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono"
        >
          {name}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-xl md:text-2xl font-light text-gray-300">
            <span className="terminal-text">{title}</span>
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="terminal-window bg-[#1A1A1A] bg-opacity-80 p-4 md:p-6 rounded-lg max-w-3xl mx-auto mb-8 text-left border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
        >
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF3E3E] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
            <span className="ml-4 text-sm text-gray-400 font-mono">farhan@security:~</span>
          </div>
          <div className="font-mono text-sm md:text-base">
            <p className="mb-2"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">./get_profile.sh</span></p>
            <p className="mb-1">Cybersecurity professional with expertise in:</p>
            <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Vulnerability Assessment</p>
            <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Security Protocols</p>
            <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Threat Intelligence</p>
            <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Cloud Security (Azure, AWS)</p>
            <p className="mb-3"><span className="text-[#00FF8C]">{'>'}</span> Endpoint Security</p>
            <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">echo $LOCATION</span></p>
            <p className="mb-3">Ahmedabad, India</p>
            <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">cat contact.txt</span></p>
            <p className="mb-1">E: fxrhanansari@gmail.com</p>
            <p className="mb-1 flex items-center">
              <span className="mr-2">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/ansari-farhan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0066CC] hover:text-[#00FF8C] transition-colors duration-300"
              >
                linkedin.com/in/ansari-farhan
              </a>
            </p>
            <p className="mb-1 flex items-center">
              <span className="mr-2">GitHub:</span>
              <a 
                href="https://github.com/fxrhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6e5494] hover:text-[#00FF8C] transition-colors duration-300"
              >
                github.com/fxrhan
              </a>
            </p>
            <p className="mb-1 flex items-center">
              <span className="mr-2">X.com:</span>
              <a 
                href="https://x.com/fxrhanansari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:text-[#00FF8C] transition-colors duration-300"
              >
                x.com/fxrhanansari
              </a>
            </p>
            <p className="mb-1 mt-3">
              <span className="text-[#00FF8C]">$</span> <span className="text-white">_</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#about" 
              className="px-8 py-3 bg-[#1A1A1A] border border-[#00FF8C] rounded-md hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300 font-mono"
            >
              About Me
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-[#0066CC] rounded-md hover:bg-[#0066CC] transition-all duration-300 font-mono"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
