
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import Features from '../components/Features';
import MarqueeText from '../components/MarqueeText';
import UpcomingClasses from '../components/UpcomingClasses';
import GymFeatures from '../components/GymFeatures';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Classes />
      <MarqueeText />
      <Features />
      <UpcomingClasses />
      <GymFeatures />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
