import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useTheme } from "@/hooks/useTheme";

export default function Portfolio() {
  const { theme } = useTheme();
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
              top: rect.top + scrollTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('skill-bar')) {
            const targetWidth = entry.target.getAttribute('data-width');
            if (targetWidth) {
              (entry.target as HTMLElement).style.width = targetWidth;
            }
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      // Initially set width to 0
      (bar as HTMLElement).style.width = '0%';
      // Observe the element
      observer.observe(bar);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      skillBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);

  return (
    <div className={`${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-gray-50 text-[#1A1A1A]'} font-sans relative overflow-hidden transition-colors duration-300`}>
      <div className={`${theme === 'dark' ? 'matrix-bg' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
