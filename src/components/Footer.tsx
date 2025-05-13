
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold">
                HAD<span className="text-gym-yellow">KAUR</span>
              </h2>
            </div>
            <p className="text-gym-text-gray mb-8">
              Welcome to Hadkaur Fitness! We are here to support and guide you.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">CALL US ANYTIME</h3>
              <p className="text-2xl font-bold text-gym-yellow">+123 45677345</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">VISIT OUR LOCATION</h3>
              <p className="text-white">
                17110 116TH AVE SE UNIT A
                <br />
                RENTON, WA 98058-5055
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">OUR SERVICES</h3>
            <ul className="space-y-4">
              <li>
                <a href="/services/personal-training" className="text-white hover:text-gym-yellow flex items-center">
                  <ChevronRight className="w-4 h-4 text-gym-yellow mr-2" />
                  PERSONAL TRAINING
                </a>
              </li>
              <li>
                <a href="/services/group-workout" className="text-white hover:text-gym-yellow flex items-center">
                  <ChevronRight className="w-4 h-4 text-gym-yellow mr-2" />
                  GROUP WORKOUT
                </a>
              </li>
              <li>
                <a href="/services/muscle-building" className="text-white hover:text-gym-yellow flex items-center">
                  <ChevronRight className="w-4 h-4 text-gym-yellow mr-2" />
                  MUSCLE BUILDING
                </a>
              </li>
              <li>
                <a href="/services/virtual-gym" className="text-white hover:text-gym-yellow flex items-center">
                  <ChevronRight className="w-4 h-4 text-gym-yellow mr-2" />
                  VIRTUAL GYM TRAINING
                </a>
              </li>
              <li>
                <a href="/services/weightloss" className="text-white hover:text-gym-yellow flex items-center">
                  <ChevronRight className="w-4 h-4 text-gym-yellow mr-2" />
                  WEIGHTLOSS TRAINING
                </a>
              </li>
              <li>
                <a href="/services/stretching" className="text-white hover:text-gym-yellow flex items-center">
                  <ChevronRight className="w-4 h-4 text-gym-yellow mr-2" />
                  BODY STRETCHING
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="text-gym-text-gray mb-4">
              Stay updated with our latest news and special offers.
            </p>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gym-dark-gray border border-gym-light-gray text-white px-4 py-3 focus:outline-none focus:border-gym-yellow w-full"
              />
              <button className="bg-gym-yellow text-black px-6 py-3 hover:bg-opacity-90">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gym-dark-gray p-3 hover:bg-gym-yellow hover:text-black transition-colors">
                  f
                </a>
                <a href="#" className="bg-gym-dark-gray p-3 hover:bg-gym-yellow hover:text-black transition-colors">
                  G+
                </a>
                <a href="#" className="bg-gym-dark-gray p-3 hover:bg-gym-yellow hover:text-black transition-colors">
                  in
                </a>
                <a href="#" className="bg-gym-dark-gray p-3 hover:bg-gym-yellow hover:text-black transition-colors">
                  P
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gym-dark-gray">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gym-text-gray">©2023 Hadkaur. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gym-text-gray hover:text-gym-yellow">
              Privacy Policy
            </a>
            <a href="/terms-condition" className="text-gym-text-gray hover:text-gym-yellow">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
