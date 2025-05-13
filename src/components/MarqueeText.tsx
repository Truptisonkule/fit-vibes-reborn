
import React from 'react';

const MarqueeText = () => {
  return (
    <section className="py-12 bg-black overflow-hidden relative">
      <div className="gradient-overlay absolute inset-0 z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex marquee">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-4xl md:text-6xl font-bold text-gray-800 uppercase tracking-wider">
                GET HAPPIER - JOIN US NOW - GET A PERSONALIZED PROGRAM - BE STRONGER - JOIN US NOW - FEEL BETTER
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex marquee">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-4xl md:text-6xl font-bold text-gray-800 uppercase tracking-wider">
                GET HAPPIER - JOIN US NOW - GET A PERSONALIZED PROGRAM - BE STRONGER - JOIN US NOW - FEEL BETTER
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeText;
