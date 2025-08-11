import { motion } from "framer-motion";
import { useState } from "react";
import { testimonialsData } from "@/lib/testimonialsData";
import { useTheme } from "@/hooks/useTheme";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [remoteImageError, setRemoteImageError] = useState<Record<number, boolean>>({});
  
  function getInitials(name: string) {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  }
  
  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % testimonialsData.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleRemoteImageError = (index: number) => {
    setRemoteImageError(prev => ({ ...prev, [index]: true }));
  };

  const handleLocalImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };
  
  const relationColors: Record<string, string> = {
    "Client": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Colleague": "bg-green-500/20 text-green-300 border-green-500/30",
    "Manager": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Research Mentor": "bg-amber-500/20 text-amber-300 border-amber-500/30"
  };
  
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Testimonials
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className={`max-w-2xl mx-auto theme-text`}>What colleagues and clients say about my work</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg mb-10 border border-[#00FF8C]/20 bg-transparent shadow-[0_0_15px_rgba(0,255,140,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                  {testimonialsData[activeIndex].image && !remoteImageError[activeIndex] ? (
                    <img
                      src={testimonialsData[activeIndex].image}
                      alt={`${testimonialsData[activeIndex].name} profile`}
                      className="w-16 h-16 object-cover"
                      onError={() => handleRemoteImageError(activeIndex)}
                    />
                  ) : testimonialsData[activeIndex].localImage && !imageError[activeIndex] ? (
                    <img
                      src={testimonialsData[activeIndex].localImage}
                      alt={`${testimonialsData[activeIndex].name} profile`}
                      className="w-16 h-16 object-cover"
                      onError={() => handleLocalImageError(activeIndex)}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#00FF8C]/10 border border-[#00FF8C]/30 text-[#00FF8C] font-bold text-xl">
                      {getInitials(testimonialsData[activeIndex].name)}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{testimonialsData[activeIndex].name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{testimonialsData[activeIndex].position}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${relationColors[testimonialsData[activeIndex].relation] || "bg-gray-700/20 text-gray-300 border-gray-700/30"}`}>
                      {testimonialsData[activeIndex].relation}
                    </span>
                  </div>
                  
                  <div className="mt-4 relative">
                    <MessageSquareQuote className="absolute -top-2 -left-2 w-5 h-5 text-[#00FF8C] opacity-40" />
                    <p className="pl-4 text-white italic">"{testimonialsData[activeIndex].testimonial}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex justify-center gap-2 mt-6">
              {testimonialsData.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[#00FF8C]' 
                      : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-transparent border border-[#00FF8C]/30 text-[#00FF8C] hover:bg-[#00FF8C]/10 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-transparent border border-[#00FF8C]/30 text-[#00FF8C] hover:bg-[#00FF8C]/10 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}