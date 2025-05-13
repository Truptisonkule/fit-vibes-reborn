
import React from 'react';

const features = [
  {
    icon: "⏱️",
    title: "Workout plans tailored to your needs"
  },
  {
    icon: "💻",
    title: "Access to the client's panel"
  },
  {
    icon: "📱",
    title: "Social media integration"
  },
  {
    icon: "🏆",
    title: "Battle tournaments"
  },
  {
    icon: "👤",
    title: "Individual trainings"
  },
  {
    icon: "⚽",
    title: "Playing fields for team sports"
  },
  {
    icon: "📊",
    title: "Progress tracking"
  },
  {
    icon: "💳",
    title: "Diverse member plans"
  }
];

const GymFeatures = () => {
  return (
    <section className="py-24 bg-black relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Only a Gym</h2>
          <p className="text-gym-text-gray max-w-3xl mx-auto">
            Gym Base is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts.
            Check what else we offer for our members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border border-gym-light-gray p-8 flex flex-col items-center text-center hover:border-gym-yellow transition-all"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymFeatures;
