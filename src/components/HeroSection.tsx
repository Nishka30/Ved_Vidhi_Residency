import C1 from './resources/C1.jpg'; 
import C2 from './resources/C2.jpg';
import C3 from './resources/C3.jpg';
import C4 from './resources/C4.jpg';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Building2, Calendar, MapPin, Star } from 'lucide-react';

interface HeroSectionProps {
  handleBookNow: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleBookNow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = [
    C1, C2, C3, C4
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  const navLinks = [
    { name: 'Virtual Tour', href: '#progress', icon: <Building2 className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: 'Properties', href: '#properties', icon: <Star className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: 'Booking Status', href: '#availability', icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: 'Location', href: '#location', icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" /> },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <img 
          src={projectImages[currentImageIndex]} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between text-white px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Main Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block">Luxury Living</span>
              <span className="text-emerald-400">Redefined</span>
            </h1>
            
            <p className="text-lg md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200 px-4">
              Experience the pinnacle of modern living in our exclusive residential community
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center mb-8 md:mb-16 px-4">
              <button 
                onClick={handleBookNow}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-md text-sm md:text-base font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Book a Visit
              </button>
              <a 
                href="#progress" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-md text-sm md:text-base font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <Building2 className="w-4 h-4 md:w-5 md:h-5 mr-2" /> View Progress
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Stats and Navigation */}
        <div className="space-y-6 md:space-y-8">
          {/* Image Slider Controls */}
          <div className="flex justify-center space-x-2 md:space-x-3">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 transition-all duration-300 rounded-sm ${
                  currentImageIndex === index 
                    ? 'bg-emerald-500 w-8 md:w-12' 
                    : 'bg-white/50 hover:bg-white w-4 md:w-6'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 w-full px-2 md:px-0 max-w-4xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center bg-emerald-600 hover:bg-emerald-700 rounded-md py-2 md:py-3 px-2 group transition-all duration-300"
              >
                <div className="p-2 md:p-3 bg-white/10 group-hover:bg-emerald-600 rounded-md transition-all duration-300 mb-1 md:mb-2">
                  {link.icon}
                </div>
                <span className="font-medium text-xs md:text-sm group-hover:text-emerald-400 transition-colors duration-200">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Property Stats */}
          <div className="py-4 md:py-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-black/20 rounded-md p-3 md:p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">90+</p>
                  <p className="text-xs md:text-sm text-gray-300">Luxury Properties</p>
                </div>
                <div className="bg-black/20 rounded-md p-3 md:p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">98%</p>
                  <p className="text-xs md:text-sm text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow Navigation */}
      <button 
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-emerald-600 px-3 py-4 md:px-4 md:py-6 rounded-md transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-emerald-600 px-3 py-4 md:px-4 md:py-6 rounded-md transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>
    </section>
  );
};

export default HeroSection;