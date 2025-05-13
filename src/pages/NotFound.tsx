
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 py-24">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gym-yellow">404</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</p>
          <p className="text-gym-text-gray mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, 
            had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="gym-button inline-flex"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
