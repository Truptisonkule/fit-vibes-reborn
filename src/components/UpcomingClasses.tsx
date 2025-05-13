
import React from 'react';

const classesData = [
  {
    id: 1,
    title: 'BOXING',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 2,
    title: 'CARDIO',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'
  },
  {
    id: 3,
    title: 'FLEXIBILITY',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 4,
    title: 'STRENGTH',
    image: 'https://images.unsplash.com/photo-1532384748853-8f54a2f4e7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 5,
    title: 'WORKOUT',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 6,
    title: 'ZUMBA',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
];

const UpcomingClasses = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gym-dark-gray relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-14 bg-gym-yellow mr-4"></div>
            <h2 className="section-header text-center mb-0">
              JOIN OUR UPCOMMING
              <br />
              CLASSES NOW!!
            </h2>
            <div className="h-1 w-14 bg-gym-yellow ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesData.map(classItem => (
            <div key={classItem.id} className="class-card group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
                    {classItem.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingClasses;
