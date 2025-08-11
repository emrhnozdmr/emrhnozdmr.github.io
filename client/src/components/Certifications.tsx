import { motion } from "framer-motion";
import { certificationsData } from "@/lib/certificationsData";
import { 
  ShieldCheck, 
  Shield, 
  CloudIcon, 
  Globe, 
  Database,
  PlusCircle
} from "lucide-react";

export default function Certifications() {
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

  const icons = {
    ShieldCheck: <ShieldCheck className="text-3xl text-[#00FF8C]" />,
    Shield: <Shield className="text-3xl text-[#00FF8C]" />,
    Cloud: <CloudIcon className="text-3xl text-[#00FF8C]" />,
    Globe: <Globe className="text-3xl text-[#00FF8C]" />,
    Database: <Database className="text-3xl text-[#00FF8C]" />,
    Plus: <PlusCircle className="text-4xl text-gray-400" />
  };

  return (
    <section id="certifications" className="py-16 md:py-24 px-4 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Certifications & Training
            <div className="h-1 w-52 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional qualifications and specialized training</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificationsData.map((certification, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A1A1A] bg-opacity-80 p-5 rounded-lg hover:shadow-lg hover:shadow-[#00FF8C]/10 transition-all duration-300 border border-[#00FF8C]/30"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-[#00FF8C] bg-opacity-20 rounded-full flex items-center justify-center">
                  {icons[certification.icon as keyof typeof icons]}
                </div>
              </div>
              <h3 className="font-mono text-lg font-semibold text-center mb-3">{certification.name}</h3>
              <div className="border-t border-gray-800 pt-3 mt-4">
                <p className="text-xs text-gray-400 text-center">{certification.issuer}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="bg-[#1A1A1A] bg-opacity-80 p-5 rounded-lg hover:shadow-lg hover:shadow-[#00FF8C]/10 transition-all duration-300 border border-[#00FF8C]/30 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <div className="text-gray-400 text-center mb-4">
              {icons.Plus}
            </div>
            <h3 className="font-mono text-lg font-semibold text-center">Pursuing New Certifications</h3>
            <p className="text-sm text-gray-400 text-center mt-2">Always expanding my knowledge in cybersecurity</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
