
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const classesData = [
  {
    id: 1,
    title: 'FITNESS & GYM',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 2,
    title: 'PERSONAL TRAINING',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 3,
    title: 'BOXING CLASS',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 4,
    title: 'KETTLEBELL CLASS',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
];

const Classes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleClasses = classesData.slice(currentIndex, currentIndex + (window.innerWidth >= 768 ? 3 : 1));

  const handleNext = () => {
    if (currentIndex + 3 < classesData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(classesData.length - 3);
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gym-green uppercase mb-2">
              A WIDE RANGE OF
            </h2>
            <h3 className="section-header mb-0">FITNESS CLASSES</h3>
          </div>
          <div className="mt-6 md:mt-0 max-w-xl">
            <p className="text-gym-text-gray">
              Staying motivated can always be a challenge, but with a wide variety of fitness classes available across gym you'll find the perfect way to keep active.
              Whatever you are looking to achieve we have classes for everyone.
            </p>
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="flex overflow-hidden space-x-6">
            {visibleClasses.map((item) => (
              <div key={item.id} className="w-full md:w-1/3 flex-shrink-0 transition-all duration-500 class-card group">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="class-overlay">
                    <h3 className="class-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gym-yellow text-black p-2 rounded-full z-10 hover:bg-opacity-90"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gym-yellow text-black p-2 rounded-full z-10 hover:bg-opacity-90"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <a href="/programs" className="gym-button inline-flex">
            SEE ALL PROGRAMS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
