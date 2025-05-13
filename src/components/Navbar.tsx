
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            HAD<span className="text-gym-yellow">KAUR</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/classes" className="nav-link">Classes</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/pages" className="nav-link">Pages</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white hover:text-gym-yellow">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <div className="bg-gym-yellow w-10 h-10 flex items-center justify-center text-black font-bold">
            0
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gym-dark-gray absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/classes" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Classes</Link>
            <Link to="/services" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/pages" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Pages</Link>
            <Link to="/blog" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            <div className="pt-4 flex items-center">
              <button className="text-white">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <div className="bg-gym-yellow w-8 h-8 flex items-center justify-center text-black font-bold ml-4">
                0
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
