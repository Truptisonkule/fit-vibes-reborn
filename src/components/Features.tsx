
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl md:text-8xl font-light uppercase tracking-wider text-gray-800 mb-4 leading-none">
              FEATURES
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-wider leading-tight">
              POWERFUL <br />WORKOUTS, UNLEASH <br />YOUR POTENTIAL
            </h3>
            <p className="text-gym-text-gray mt-8 mb-12">
              These are some of the interesting features that we offer to all our members
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="text-gym-yellow mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17L4 12"></path>
                  </svg>
                </div>
                <span className="text-lg">State-of-the-Art Equipment</span>
              </li>
              <li className="flex items-center">
                <div className="text-gym-yellow mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17L4 12"></path>
                  </svg>
                </div>
                <span className="text-lg">Expert Personal Trainers</span>
              </li>
              <li className="flex items-center">
                <div className="text-gym-yellow mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17L4 12"></path>
                  </svg>
                </div>
                <span className="text-lg">Varied Group Classes</span>
              </li>
              <li className="flex items-center">
                <div className="text-gym-yellow mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17L4 12"></path>
                  </svg>
                </div>
                <span className="text-lg">Clean and Welcoming Environment</span>
              </li>
              <li className="flex items-center">
                <div className="text-gym-yellow mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17L4 12"></path>
                  </svg>
                </div>
                <span className="text-lg">Comprehensive Wellness Services</span>
              </li>
            </ul>
            
            <a href="/features" className="gym-button inline-flex mt-10">
              <span>MORE FEATURE</span>
              <ChevronRight className="ml-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="row-span-2">
              <div className="bg-gym-dark-gray p-4 h-full">
                <div className="bg-black h-full w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Woman in fitness training"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gym-yellow p-6">
              <div className="uppercase text-sm font-semibold mb-2">TRAINING</div>
              <div className="text-2xl font-bold mb-4">Weight Loss</div>
              <p className="text-black mb-6">
                Our specialized weight loss programs are designed to help you achieve your goals with expert guidance.
              </p>
              <a href="/weight-loss" className="text-black font-bold inline-flex items-center">
                <span>Read More</span>
                <ChevronRight className="ml-2" />
              </a>
            </div>
            
            <div className="bg-gym-yellow p-6">
              <div className="uppercase text-sm font-semibold mb-2">TRAINING</div>
              <div className="text-2xl font-bold mb-4">Training Plan</div>
              <p className="text-black mb-6">
                Personalized training plans to match your specific fitness goals and lifestyle needs.
              </p>
              <a href="/training-plan" className="text-black font-bold inline-flex items-center">
                <span>Read More</span>
                <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
