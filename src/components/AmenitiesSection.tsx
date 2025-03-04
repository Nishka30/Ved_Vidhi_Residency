import React from 'react';

const AmenitiesSection: React.FC = () => {
  const amenities = [
    { name: "Swimming Pool", icon: "🏊‍♂️" },
    { name: "Gym", icon: "💪" },
    { name: "24/7 Security", icon: "🔒" },
    { name: "Children's Play Area", icon: "🧒" },
    { name: "Clubhouse", icon: "🏛️" },
    { name: "Landscaped Gardens", icon: "🌳" },
    { name: "Jogging Track", icon: "🏃‍♂️" },
    { name: "EV Charging", icon: "🔌" }
  ];

  return (
    <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Amenities</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Enjoy a lifestyle filled with convenience and luxury with our carefully curated amenities
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{amenity.icon}</div>
              <h3 className="font-medium text-gray-900">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;