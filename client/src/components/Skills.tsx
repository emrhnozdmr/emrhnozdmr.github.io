import { motion } from "framer-motion";
import { Shield, Code } from "lucide-react";
import { skillsData } from "@/lib/skillsData";

export default function Skills() {
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
    <section id="skills" className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Technical Skills
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Core competencies and technical expertise</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-xl font-semibold mb-6 flex items-center">
              <Shield className="text-[#00FF8C] mr-2" /> Cybersecurity Skills
            </h3>
            
            <div className="space-y-4">
              {skillsData.cybersecurity.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className="bg-[#00FF8C] h-2.5 rounded-full skill-bar transition-all duration-1000"
                      data-width={`${skill.percentage}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-xl font-semibold mb-6 flex items-center">
              <Code className="text-[#00FF8C] mr-2" /> Technical Stack
            </h3>
            
            <div className="bg-[#1A1A1A] p-5 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(skillsData.technicalStack).map(([category, skills], index) => (
                  <div 
                    key={index}
                    className={`p-3 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 ${
                      category === 'Additional Skills' ? 'col-span-2' : ''
                    }`}
                  >
                    <h4 className="font-mono text-sm font-semibold mb-2 text-[#00FF8C]">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#1A1A1A] rounded text-xs font-mono border border-gray-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
