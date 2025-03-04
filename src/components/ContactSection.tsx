import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactSectionProps {
  onSubmit: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  return (
    <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions? Our team is here to help you find your dream home
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm onSubmit={onSubmit} />
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Visit Our Office</h4>
                  <p className="text-gray-700">123 Luxury Avenue, Downtown</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Call Us</h4>
                  <p className="text-gray-700">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Office Hours</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Saturday - Sunday</p>
                    <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;