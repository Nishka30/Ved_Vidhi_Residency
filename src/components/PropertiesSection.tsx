import React from 'react';
import PropertyCard from './PropertyCard';

interface PropertiesSectionProps {
  onBookNow: () => void;
}

const PropertiesSection: React.FC<PropertiesSectionProps> = ({ onBookNow }) => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      price: "$250,000",
      size: "1,800 sq ft",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      status: "available"
    },
    {
      id: 2,
      title: "Premium 2BHK Apartment",
      price: "$180,000",
      size: "1,200 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      status: "sold"
    },
    {
      id: 3,
      title: "Deluxe 4BHK Penthouse",
      price: "$450,000",
      size: "2,500 sq ft",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      status: "available"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="properties">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Properties</h2>
        <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Discover your perfect home from our selection of premium residences
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map(property => (
          <PropertyCard key={property.id} property={property} onBookNow={onBookNow} />
        ))}
      </div>
    </section>
  );
};

export default PropertiesSection;