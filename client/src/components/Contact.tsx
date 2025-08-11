import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Link as LinkIcon } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // For Netlify Forms
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      formData.append("form-name", "contact");
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Get In Touch
            <div className="h-1 w-32 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Interested in working together? Let's connect!</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1A1A1A] bg-opacity-80 p-6 rounded-lg mb-8 border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF3E3E] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
                <span className="ml-4 text-sm text-gray-400 font-mono">contact.sh</span>
              </div>
              
              <div className="font-mono text-sm">
                <p className="mb-2"><span className="text-[#00FF8C]">$</span> <span className="text-white">./send_message.sh</span></p>
                <p className="mb-4">Initiating secure contact protocol...</p>
                
                <form className="space-y-4" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <div>
                    <label htmlFor="name" className="block text-[#00FF8C] mb-1">NAME:</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#00FF8C] mb-1">EMAIL:</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#00FF8C] mb-1">SUBJECT:</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#00FF8C] mb-1">MESSAGE:</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#00FF8C] text-[#1A1A1A] font-mono font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
                
                <p className="mt-4">
                  <span className="text-[#00FF8C]">$</span> <span className="text-white">_</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
                <MapPin className="text-[#00FF8C] mr-2" /> Location
              </h3>
              <p className="text-gray-300 mb-2">Ahmedabad, Gujarat, India</p>
              <p className="text-gray-400 text-sm">Available for remote work globally</p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
                <Mail className="text-[#00FF8C] mr-2" /> Email
              </h3>
              <a 
                href="mailto:fxrhanansari@gmail.com" 
                className="text-gray-300 hover:text-[#00FF8C] transition-colors duration-300"
              >
                fxrhanansari@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
                <LinkIcon className="text-[#00FF8C] mr-2" /> Social
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ansari-farhan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://github.com/fxrhan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a 
                  href="https://x.com/fxrhanansari" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300"
                  aria-label="X.com Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}