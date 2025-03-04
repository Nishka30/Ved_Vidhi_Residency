import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import BHK3 from './resources/3BHK.jpg';
import BHK2 from './resources/2BHK.jpg';
import BHK21 from './resources/2BHKs.jpg';
import { FaEye, FaTimes } from 'react-icons/fa'; // Importing eye and close icons

interface PropertiesSectionProps {
  onBookNow: () => void;
}

const PropertiesSection: React.FC<PropertiesSectionProps> = ({ onBookNow }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredProperties = [
    {
      id: 1,
      title: "Premium 3BHK Apartment",
      price: "Pre-Launch Offer : ₹4500/Sqft.",
      size: "1781.82 sq ft",
      bedrooms: 3,
      bathrooms: 2,
      image: BHK3,
      status: "available"
    },
    {
      id: 2,
      title: "Premium 2BHK Apartment",
      price: "Pre-Launch Offer : ₹4500/Sqft.",
      size: "1316.57 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      image: BHK2,
      status: "available"
    },
    {
      id: 3,
      title: "Deluxe 2BHK Apartment",
      price: "Pre-Launch Offer : ₹4500/Sqft.",
      size: "1137.72 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      image: BHK21,
      status: "available"
    }
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
          <div key={property.id} className="relative">
            <PropertyCard property={property} onBookNow={onBookNow} />
            <button 
              className="absolute top-2 left-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
              onClick={() => openModal(property.image)}
            >
              <FaEye className="text-gray-700" />
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button className="absolute top-2 right-2 text-gray-700" onClick={closeModal}>
              <FaTimes className="text-xl" />
            </button>
            <img src={selectedImage!} alt="Property" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertiesSection;