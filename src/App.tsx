import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectDetails from './components/ProjectDetails';
import AmenitiesSection from './components/AmenitiesSection';
import PropertiesSection from './components/PropertiesSection';
import VideoSection from './components/VideoSection';
import BookingStatusSection from './components/BookingStatusSection';
import LocationSection from './components/LocationSection';
import BrochureButton from './components/BrochureButton';
import ContactSection from './components/ContactSection';

function App() {
  const handleBookNow = () => {
    window.open('https://wa.me/1234567890?text=I%20am%20interested%20in%20your%20real%20estate%20project', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection handleBookNow={handleBookNow} />
      
      {/* Properties Section */}
      <PropertiesSection onBookNow={handleBookNow} />

      {/* Video Section */}
      <VideoSection />
      
      {/* Booking Status Section */}
      <BookingStatusSection />
      
      {/* Amenities Section */}
      <AmenitiesSection />
      
      {/* Location Section */}
      <LocationSection />
      
      {/* Floating Brochure Button */}
      <BrochureButton />
      
      {/* Project Details Section */}
      <ProjectDetails />
      
      {/* Contact Section */}
      <ContactSection onSubmit={handleBookNow} />
      
      <Footer />
    </div>
  );
}

export default App;