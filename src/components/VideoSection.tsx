import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 px-4 sm:px-6 lg:px-8" id="video">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience The Project</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our exclusive residential community
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Project Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;