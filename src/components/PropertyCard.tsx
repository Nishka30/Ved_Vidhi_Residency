import React from 'react';
import { BedDouble, Bath, Move, Check, X } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  status: 'available' | 'sold';
}

interface PropertyCardProps {
  property: Property;
  onBookNow: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onBookNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-64 object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
          property.status === 'available' 
            ? 'bg-emerald-100 text-emerald-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {property.status === 'available' ? 'Available' : 'Sold'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-emerald-600 mb-4">{property.price}</p>
        
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <BedDouble className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Move className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{property.size}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {property.status === 'available' ? (
              <Check className="h-5 w-5 text-emerald-500 mr-2" />
            ) : (
              <X className="h-5 w-5 text-red-500 mr-2" />
            )}
            <span className={`font-medium ${
              property.status === 'available' 
                ? 'text-emerald-600' 
                : 'text-red-600'
            }`}>
              {property.status === 'available' ? 'Ready to Move' : 'Not Available'}
            </span>
          </div>
          
          {property.status === 'available' && (
            <button 
              onClick={onBookNow}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;