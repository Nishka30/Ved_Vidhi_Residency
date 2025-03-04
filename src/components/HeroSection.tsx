import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Home } from 'lucide-react';
import C1 from './resources/C1.jpg'; // Adjust the path as necessary
import C2 from './resources/C2.jpg';
import C3 from './resources/C3.jpg';
import C4 from './resources/C4.jpg';

interface HeroSectionProps {
  handleBookNow: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleBookNow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = [C1, C2, C3, C4]; // Use imported images

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

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={projectImages[currentImageIndex]} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Luxury Living Redefined</h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">Experience the pinnacle of modern living in our exclusive residential community</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleBookNow}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" /> Book a Visit
          </button>
          <a 
            href="#properties" 
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" /> View Properties
          </a>
        </div>
      </div>
      
      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default HeroSection;