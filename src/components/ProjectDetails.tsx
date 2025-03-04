import React from 'react';
import { Check, PlayCircle } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About The Project</h2>
        <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Luxury Living in the Heart of the City</h3>
          <p className="text-gray-700 mb-6">
            Nestled in the most sought-after location, our premium residential project offers an unparalleled living experience. 
            With meticulous attention to detail and world-class amenities, we've created homes that blend luxury, comfort, and convenience.
          </p>
          <p className="text-gray-700 mb-6">
            Each residence is thoughtfully designed with spacious layouts, premium finishes, and abundant natural light. 
            Our commitment to quality ensures that every aspect of your home exceeds expectations.
          </p>
          <div className="flex items-center text-emerald-600 font-medium">
            <a href="#video" className="flex items-center hover:underline">
              <PlayCircle className="w-5 h-5 mr-2" /> Watch Project Video
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Highlights</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <p className="ml-3 text-gray-700">Premium location with excellent connectivity</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <p className="ml-3 text-gray-700">Spacious 2, 3 & 4 BHK luxury apartments</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <p className="ml-3 text-gray-700">Over 20+ world-class amenities</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <p className="ml-3 text-gray-700">Smart home features with modern technology</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <p className="ml-3 text-gray-700">Sustainable design with energy-efficient systems</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;