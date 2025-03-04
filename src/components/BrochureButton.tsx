import React, { useState } from 'react';
import { FileText, X, Download, ChevronRight } from 'lucide-react';

const BrochureButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-0 bottom-0 mb-8 mr-8 z-50 flex items-center">
      {/* Expanded brochure box */}
      {isOpen && (
        <div className="mr-16 bg-white rounded-lg shadow-2xl p-6 max-w-xs animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Project Brochure</h3>
            <button 
              onClick={toggleOpen}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close brochure panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-4">
            <img 
              src="/public/brochure_preview.jpg" 
              alt="Brochure preview" 
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <p className="text-gray-600 text-sm">
              Get complete details about our premium properties, floor plans, amenities, and pricing in our comprehensive brochure.
            </p>
          </div>
          
          <a 
            href="/public/Ved_Vidhi_Residency_brochure.pdf" 
            download
            className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-md hover:from-emerald-700 hover:to-emerald-800 transition duration-300 font-medium"
          >
            <Download className="mr-2 h-5 w-5" /> 
            Download Brochure
          </a>
        </div>
      )}
      
      {/* Circular button */}
      <button
        onClick={toggleOpen}
        className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-white text-emerald-600 w-16 h-16' // Increased size when open
            : 'bg-gradient-to-r from-emerald-500 to-emerald-700 text-white w-16 h-16 hover:w-20 hover:h-20' // Increased size when closed
        }`}
        aria-label="Open brochure download"
      >
        {isOpen ? (
          <ChevronRight className="h-8 w-8" /> // Increased icon size when open
        ) : (
          <FileText className="h-8 w-8" /> // Increased icon size when closed
        )}
      </button>
    </div>
  );
};

export default BrochureButton;0