
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

function App() {
  const handleBookNow = () => {
    window.open('https://wa.me/+919970119846?text=I%20am%20interested%20in%20your%20real%20estate%20project', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header NowBook={handleBookNow}/>
      
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

         {/* Project Details Section */}
         <ProjectDetails />
      
      {/* Location Section */}
      <LocationSection />

    
      
      
      {/* Floating Brochure Button */}
      <BrochureButton />
      
      <Footer />
    </div>
  );
}

export default App;