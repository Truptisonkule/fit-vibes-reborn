
import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
          opacity: 0.5,
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div ref={textRef} className="opacity-0">
            <div className="mb-4">
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-white">
                BEST GYM OF THE CITY FOR FITNESS
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-wide leading-tight mb-6">
              TRAIN WITH <span className="text-white">BEST</span>
              <br />
              <span className="text-gym-yellow">GYM EXPERIENCE</span>
              <br />
              IN HADKAUR
            </h1>
            
            <Link
              to="/get-started"
              className="gym-button inline-block mt-6 group"
            >
              <span>GET STARTED TODAY</span>
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
