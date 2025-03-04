import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronRight } from 'lucide-react';
import videoSrc from './resources/intro.mp4';
import imageSrc from './resources/Intro.jpg';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8" id="video">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Our Luxury Residences</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300">
            Take a virtual tour of our exclusive residential community and imagine your future home
          </p>
        </div>
        
        {/* Desktop/Laptop Layout - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full max-w-6xl">
          {/* Video Player - Takes left side on desktop */}
          <div className="lg:w-96 w-full max-w-xl">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black h-full">
              <video
                ref={videoRef}
                className="w-full h-auto"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                poster={imageSrc}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center transition-transform transform hover:scale-110">
                    <Play className="h-5 w-5 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-28 left-0 right-0 text-center">
                    <p className="text-white text-xl font-semibold">Click to Play</p>
                  </div>
                </div>
              )}
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                {/* Progress Bar */}
                <div 
                  className="h-2 bg-gray-700 rounded-full mb-4 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-emerald-500 rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-emerald-400 focus:outline-none transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-emerald-400 focus:outline-none transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-6 w-6" />
                      ) : (
                        <Volume2 className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handleFullscreen}
                      className="text-white hover:text-emerald-400 focus:outline-none transition-colors"
                    >
                      <Maximize className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content - Takes right side on desktop */}
          <div className="lg:w-2/5 flex flex-col justify-center max-w-xl w-full">
            <div className="bg-gray-800 p-6 rounded-lg mb-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Stunning Architecture</h3>
              </div>
              <p className="text-gray-300">Experience the perfect blend of modern design and functional living spaces, crafted by award-winning architects to create homes that are both beautiful and practical.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Premium Amenities</h3>
              </div>
              <p className="text-gray-300">Enjoy world-class facilities designed for comfort, convenience, and luxury. From state-of-the-art fitness centers to serene spa retreats, every amenity is thoughtfully curated.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Prime Location</h3>
              </div>
              <p className="text-gray-300">Strategically located with easy access to essential services, entertainment venues, and transportation hubs. Enjoy the perfect balance of urban convenience and peaceful living.</p>
            </div>
          </div>
        </div>
        
        {/* Mobile-only additional info section - Hidden on desktop */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:hidden w-full">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Stunning Architecture</h3>
            </div>
            <p className="text-gray-300">Experience the perfect blend of modern design and functional living spaces.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Premium Amenities</h3>
            </div>
            <p className="text-gray-300">Enjoy world-class facilities designed for comfort, convenience, and luxury.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Prime Location</h3>
            </div>
            <p className="text-gray-300">Strategically located with easy access to essential services and entertainment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;