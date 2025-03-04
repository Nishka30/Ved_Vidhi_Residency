import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8" id="location">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prime Location</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Strategically located with excellent connectivity to major landmarks
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d763.3312804882554!2d79.08233641962961!3d21.098256651903792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzU0LjAiTiA3OcKwMDQnNTguMiJF!5e1!3m2!1sen!2sin!4v1741001316316!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connectivity & Nearby Landmarks</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Prime City Center</h4>
                  <p className="text-gray-700">123 Luxury Avenue, Downtown</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mr-3"></div>
                  <p className="text-gray-700">5 minutes to Central Business District</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mr-3"></div>
                  <p className="text-gray-700">10 minutes to International Airport</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mr-3"></div>
                  <p className="text-gray-700">Walking distance to Metro Station</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mr-3"></div>
                  <p className="text-gray-700">Premium shopping malls within 2 km</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mr-3"></div>
                  <p className="text-gray-700">Top-rated schools and hospitals nearby</p>
                </div>
              </div>
              
              <a 
                href="https://goo.gl/maps/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 font-medium hover:underline"
              >
                Get Directions <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;