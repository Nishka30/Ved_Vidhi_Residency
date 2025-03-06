import React from 'react';
import { Clock, Building } from 'lucide-react';
import C1 from './resources/foundation.jpg'; 
import C2 from './resources/structure.jpg';
import C3 from './resources/ground.jpg';

const ProgressSection = () => {
  const constructionUpdates = [
    {
      date: 'March 2024',
      title: 'Foundation Complete',
      image: C1,
      description: 'Foundation and basement construction completed ahead of schedule.'
    },
    {
      date: 'February 2024',
      title: 'Structure Progress',
      image: C2,
      description: 'Main structure framework reaching 4th floor.'
    },
    {
      date: 'January 2024',
      title: 'Ground Breaking',
      image: C3,
      description: 'Official project launch and ground breaking ceremony.'
    }
  ];

  return (
    <section id="progress" className="py-8 md:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Construction Progress
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Watch our vision come to life as we make steady progress in building your future home.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-600"></div>

          {/* Construction updates */}
          <div className="space-y-8 md:space-y-16">
            {constructionUpdates.map((update, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-0 md:px-6 mb-6 md:mb-0">
                  <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                  }`}>
                    <img 
                      src={update.image} 
                      alt={update.title}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2" />
                        <span className="text-sm md:text-base text-emerald-400">{update.date}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{update.title}</h3>
                      <p className="text-sm md:text-base text-gray-400">{update.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for mobile layout */}
                <div className="md:hidden w-full h-px bg-emerald-600/30 my-4"></div>
              </div>
            ))}
          </div>

          {/* Current status */}
          <div className="mt-8 md:mt-16 bg-gray-800 rounded-lg p-4 md:p-8 relative">
            <div className="absolute -top-5 md:-top-6 left-1/2 transform -translate-x-1/2 bg-emerald-600 p-2 md:p-3 rounded-full">
              <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-center pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Current Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                <div className="text-center bg-gray-900/50 p-3 md:p-4 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-500">45%</p>
                  <p className="text-xs md:text-sm text-gray-400">Overall Progress</p>
                </div>
                <div className="text-center bg-gray-900/50 p-3 md:p-4 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-500">Phase 2</p>
                  <p className="text-xs md:text-sm text-gray-400">Current Phase</p>
                </div>
                <div className="text-center bg-gray-900/50 p-3 md:p-4 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-500">Dec 2024</p>
                  <p className="text-xs md:text-sm text-gray-400">Expected Completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;