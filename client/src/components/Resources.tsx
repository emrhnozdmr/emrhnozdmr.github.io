import { motion } from "framer-motion";
import { Wrench, BookOpen, Users, ExternalLink, Search, Shield } from "lucide-react";
import { resourcesData } from "@/lib/resourcesData";
import { useState } from "react";

export default function Resources() {
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

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("tools");

  const categoryColors: Record<string, string> = {
    "Network Analysis": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Network Security": "bg-green-500/20 text-green-300 border-green-500/30",
    "Penetration Testing": "bg-red-500/20 text-red-300 border-red-500/30",
    "Web Security": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Operating System": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Standards": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Threat Intelligence": "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Security Check": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "News": "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "Forum": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    "Practice": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
    "Learning": "bg-rose-500/20 text-rose-300 border-rose-500/30",
    "Conference": "bg-amber-500/20 text-amber-300 border-amber-500/30"
  };

  const getFilteredData = () => {
    const data = resourcesData[activeTab as keyof typeof resourcesData] || [];
    if (!searchTerm) return data;
    
    return data.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredData = getFilteredData();

  return (
    <section id="resources" className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Security Resources
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Curated cybersecurity tools, resources, and communities</p>
        </motion.div>

        <div className="mb-8">
          <div className="bg-[#1A1A1A] p-2 rounded-lg border border-gray-800 flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-6">
            <button 
              onClick={() => setActiveTab("tools")}
              className={`px-4 py-2 rounded-md font-mono text-sm flex items-center ${
                activeTab === "tools" 
                  ? "bg-[#00FF8C]/20 text-[#00FF8C] border border-[#00FF8C]/50" 
                  : "text-gray-400 hover:bg-gray-800 border border-transparent"
              } transition-all duration-300`}
            >
              <Wrench className="w-4 h-4 mr-2" />
              Tools
            </button>
            <button 
              onClick={() => setActiveTab("resources")}
              className={`px-4 py-2 rounded-md font-mono text-sm flex items-center ${
                activeTab === "resources" 
                  ? "bg-[#00FF8C]/20 text-[#00FF8C] border border-[#00FF8C]/50" 
                  : "text-gray-400 hover:bg-gray-800 border border-transparent"
              } transition-all duration-300`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Learning
            </button>
            <button 
              onClick={() => setActiveTab("communities")}
              className={`px-4 py-2 rounded-md font-mono text-sm flex items-center ${
                activeTab === "communities" 
                  ? "bg-[#00FF8C]/20 text-[#00FF8C] border border-[#00FF8C]/50" 
                  : "text-gray-400 hover:bg-gray-800 border border-transparent"
              } transition-all duration-300`}
            >
              <Users className="w-4 h-4 mr-2" />
              Communities
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 border border-gray-800 rounded-md bg-[#1A1A1A] text-white focus:ring-[#00FF8C] focus:border-[#00FF8C] focus:outline-none"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-[#1A1A1A] p-5 rounded-lg hover:shadow-lg hover:shadow-[#00FF8C]/10 transition-all duration-300 border border-[#00FF8C]/30 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-mono text-lg font-semibold">{item.name}</h3>
                  <Shield className="text-[#00FF8C] ml-2 flex-shrink-0" size={18} />
                </div>
                
                <p className="text-sm text-gray-400 mb-4 flex-grow">{item.description}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[item.category] || "bg-gray-700/20 text-gray-300 border-gray-700/30"}`}>
                    {item.category}
                  </span>
                  
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#00FF8C] hover:underline text-sm flex items-center"
                    aria-label={`Visit ${item.name} website`}
                  >
                    Visit <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4">
                <Search className="text-gray-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-mono mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search term or category filter</p>
            </div>
          )}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="inline-block p-4 bg-[#1A1A1A] rounded-lg border border-[#00FF8C]/30">
            <p className="text-sm text-gray-400">
              <span className="text-[#00FF8C] font-mono">$</span> This list is regularly updated with new resources
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}