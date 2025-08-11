import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, CodeSquare } from "lucide-react";
import { experienceData } from "@/lib/experienceData";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const icons = {
    ShieldCheck: <ShieldCheck className="text-[#1A1A1A]" />,
    ShieldAlert: <ShieldAlert className="text-[#1A1A1A]" />,
    CodeSquare: <CodeSquare className="text-[#1A1A1A]" />
  };

  // Function to get the logo based on company name
  const getCompanyLogo = (company: string) => {
    if (company.includes("RAPIDOPS")) {
      return "/assets/rapidops_logo.jpg";
    } else if (company.includes("EF EDUCATION")) {
      return "/assets/EF_logo.jpeg";
    }
    return null;
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-4 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Professional Experience
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A timeline of my cybersecurity journey across various organizations</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00FF8C] bg-opacity-30"></div>
          
          <motion.div 
            className="space-y-16 md:space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experienceData.map((experience, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Job Title and Duration - Always on the left */}
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                    <div className="bg-[#1A1A1A] bg-opacity-80 p-5 rounded-lg mb-4 hover:shadow-lg hover:shadow-[#00FF8C]/10 transition-all duration-300 border border-[#00FF8C]/30">
                      <h3 className="font-mono text-xl mb-2">
                        <span className="text-[#00FF8C]">$</span> {experience.title}
                      </h3>
                      <p className="text-gray-400 mb-2">{experience.period}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node - Always in the middle */}
                  <div className="md:w-12 flex justify-center order-1 md:order-2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#00FF8C] flex items-center justify-center">
                      {icons[experience.icon as keyof typeof icons]}
                    </div>
                  </div>
                  
                  {/* Company, Logo, Location - Always on the right */}
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <div className="bg-[#1A1A1A] bg-opacity-50 p-4 rounded-lg inline-block mb-4">
                      {getCompanyLogo(experience.company) ? (
                        <div className="w-48 h-48 rounded-lg flex items-center justify-center p-3 bg-[#1A1A1A] border border-[#00FF8C]/20">
                          <img 
                            src={getCompanyLogo(experience.company) || ''} 
                            alt={`${experience.company} logo`} 
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#00FF8C]/10 flex items-center justify-center">
                          {icons[experience.icon as keyof typeof icons]}
                        </div>
                      )}
                    </div>
                    <h3 className="font-mono text-xl font-bold mb-2">{experience.company}</h3>
                    <p className="text-gray-400">{experience.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}