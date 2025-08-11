import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cloud, 
  AlertTriangle, 
  Monitor, 
  CodeXml,
  ShieldAlert
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2 relative">
                <span className="text-[#00FF8C]">#</span> About Me
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>
            
            <motion.div 
              className="mb-8 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <p className="mb-6 text-gray-300">
                I am a dedicated cybersecurity professional with experience in implementing and maintaining security protocols, 
                conducting vulnerability assessments, and enhancing organizational security posture. Currently serving as a 
                Security Associate at Rapidops Inc., I am passionate about staying ahead of emerging cyber threats.
              </p>
              
              <p className="text-gray-300">
                With a proven track record across multiple roles in the cybersecurity domain, I have successfully implemented 
                security solutions that reduced vulnerabilities, managed endpoint security for large organizations, and 
                contributed to ISO 27001 framework implementation to reinforce information security protocols.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <ShieldCheck />
                </div>
                <h3 className="font-mono font-semibold mb-2">Security Analysis</h3>
                <p className="text-sm text-gray-400">Experienced in vulnerability assessment and penetration testing</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Cloud />
                </div>
                <h3 className="font-mono font-semibold mb-2">Cloud Security</h3>
                <p className="text-sm text-gray-400">Expertise in Azure and AWS security implementations</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <AlertTriangle />
                </div>
                <h3 className="font-mono font-semibold mb-2">Threat Intelligence</h3>
                <p className="text-sm text-gray-400">Proactive identification and mitigation of security threats</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Monitor />
                </div>
                <h3 className="font-mono font-semibold mb-2">Endpoint Security</h3>
                <p className="text-sm text-gray-400">Implementation of robust endpoint protection solutions</p>
              </motion.div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2">
                <span className="text-[#00FF8C]">#</span> Education
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>
            
            <motion.div 
              className="mb-6 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{'>'}</span> Bachelor of Engineering, Computer Engineering
                </h3>
                <p className="text-gray-400 mb-1">GUJARAT TECHNOLOGICAL UNIVERSITY</p>
                <p className="text-sm mb-1">Ahmedabad, Gujarat</p>
              </div>
              
              <div>
                <h3 className="font-mono text-xl mb-2">
                  <span className="text-[#00FF8C]">{'>'}</span> Diploma in Information Technology
                </h3>
                <p className="text-gray-400 mb-1">MAHARAJA SAYAJIRAO UNIVERSITY</p>
                <p className="text-sm mb-1">Vadodara, Gujarat</p>
              </div>
            </motion.div>
            
            <div>
              <motion.div className="mb-6 inline-block" variants={itemVariants}>
                <h2 className="text-3xl font-bold font-mono mb-2">
                  <span className="text-[#00FF8C]">#</span> Positions
                  <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
                </h2>
              </motion.div>
              
              <div className="grid gap-4">
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono font-semibold mb-1">Google Developer Group, Baroda</h3>
                      <p className="text-sm text-gray-400 mb-2">Member | March 2021 – Present</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <CodeXml />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Contributed to online forums and community support channels, resolving 50+ technical inquiries. 
                    Organized quarterly networking events with 500+ participants across 3 cities in Gujarat.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono font-semibold mb-1">(ISC)², Candidate</h3>
                      <p className="text-sm text-gray-400 mb-2">Member | Jun 2016 – Jun 2017</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <ShieldAlert />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Part of (ISC)² members and associates comprising the largest global association of expert cybersecurity 
                    professionals dedicated to inspiring a safe and secure cyber world.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
