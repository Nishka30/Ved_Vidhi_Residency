import React from 'react';
import BookingStatus from './BookingStatus';

const BookingStatusSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="availability">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Booking Status</h2>
        <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Check the availability of our premium residences
        </p>
      </div>
      
      <BookingStatus />
    </section>
  );
};

export default BookingStatusSection;