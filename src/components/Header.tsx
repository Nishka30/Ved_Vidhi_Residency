import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

interface HeaderProps {
  NowBook: () => void;
}

const Header: React.FC<HeaderProps> = ({ NowBook }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: '', href: '#' },
    { name: '', href: '#properties' },
    { name: '', href: '#availability' },
    { name: '', href: '#about' },
    { name: '', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className={`flex items-center ${isScrolled ? 'text-emerald-600' : 'text-white'}`}>
              <Home className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Ved - Vidhi</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-emerald-600' 
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={NowBook}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-white text-emerald-600 hover:bg-gray-100'
              }`}
            >
              Book a Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-300'
              }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleBookNow();
                setIsMenuOpen(false);
              }}
              className="w-full px-3 py-2 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700 text-center mt-4"
            >
              Book a Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;