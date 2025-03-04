import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
      
      {/* Wave Pattern */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#4ade80" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Logo and Tagline - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-500">Ved - Vidhi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Redefining luxury living with premium residential properties in prime locations.
          </p>
        </div>
        
        {/* Main Content - Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
                  About Project
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
                  Properties
                </a>
              </li>
              <li>
                <a href="#availability" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
                  Availability
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">At Besa - Pipla Road, Near Besa Square, Nagpur.</span>
              </li>
              <li className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 99701 19846</span>
              </li>
              <li className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">sales.homeintown.ai@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center mb-4">
              <Instagram className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors duration-300">
                  <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs text-gray-500 mt-1 group-hover:text-emerald-400 transition-colors duration-300">Facebook</span>
              </a>
              <a href="#" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors duration-300">
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs text-gray-500 mt-1 group-hover:text-emerald-400 transition-colors duration-300">Twitter</span>
              </a>
              <a href="#" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors duration-300">
                  <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs text-gray-500 mt-1 group-hover:text-emerald-400 transition-colors duration-300">Instagram</span>
              </a>
              <a href="#" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-emerald-800 transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs text-gray-500 mt-1 group-hover:text-emerald-400 transition-colors duration-300">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

    
        
        {/* Bottom Section with Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ved - Vidhi. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#4ade80" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;