import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const BookingStatus: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState(1);
  
  // Sample data for floors and units
  const floors = [
    { id: 1, name: 'Floor 1' },
    { id: 2, name: 'Floor 2' },
    { id: 3, name: 'Floor 3' },
    { id: 4, name: 'Floor 4' },
    { id: 5, name: 'Floor 5' },
  ];
  
  const units = [
    // Floor 1
    [
      { id: 101, type: '2BHK', status: 'available' },
      { id: 102, type: '3BHK', status: 'sold' },
      { id: 103, type: '2BHK', status: 'available' },
      { id: 104, type: '3BHK', status: 'available' },
    ],
    // Floor 2
    [
      { id: 201, type: '2BHK', status: 'sold' },
      { id: 202, type: '3BHK', status: 'sold' },
      { id: 203, type: '2BHK', status: 'available' },
      { id: 204, type: '3BHK', status: 'available' },
    ],
    // Floor 3
    [
      { id: 301, type: '2BHK', status: 'available' },
      { id: 302, type: '3BHK', status: 'available' },
      { id: 303, type: '2BHK', status: 'sold' },
      { id: 304, type: '3BHK', status: 'sold' },
    ],
    // Floor 4
    [
      { id: 401, type: '2BHK', status: 'sold' },
      { id: 402, type: '3BHK', status: 'available' },
      { id: 403, type: '2BHK', status: 'available' },
      { id: 404, type: '3BHK', status: 'sold' },
    ],
    // Floor 5
    [
      { id: 501, type: '4BHK Penthouse', status: 'available' },
      { id: 502, type: '4BHK Penthouse', status: 'sold' },
    ],
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Unit Availability</h3>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Sold</span>
            </div>
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-4">
          <div className="flex space-x-2">
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setActiveFloor(floor.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeFloor === floor.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {floor.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {units[activeFloor - 1].map((unit) => (
          <div
            key={unit.id}
            className={`border rounded-lg p-4 text-center ${
              unit.status === 'available'
                ? 'border-emerald-200 bg-emerald-50'
                : 'border-red-200 bg-red-50'
            }`}
          >
            <div className="flex justify-center mb-2">
              {unit.status === 'available' ? (
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            <p className="font-medium text-gray-900">Unit {unit.id}</p>
            <p className="text-sm text-gray-600">{unit.type}</p>
            <p className={`text-sm font-medium mt-1 ${
              unit.status === 'available' ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {unit.status === 'available' ? 'Available' : 'Sold'}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Booking Summary</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total Units</p>
            <p className="text-2xl font-bold text-gray-900">
              {units.flat().length}
            </p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Available Units</p>
            <p className="text-2xl font-bold text-emerald-600">
              {units.flat().filter(unit => unit.status === 'available').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;