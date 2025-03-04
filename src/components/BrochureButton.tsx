import React, { useState } from 'react';
import { FileText, X, Download, Share2, Mail, MessageSquare } from 'lucide-react';

const BrochureButton: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
    setIsDownloadOpen(false);
  };

  const toggleDownload = () => {
    setIsDownloadOpen(!isDownloadOpen);
    setIsShareOpen(false);
  };

  const shareText = "Check out Ved - Vidhi Residency's luxurious properties! Download the brochure here: ";
  const shareUrl = window.location.href;
  const fullShareText = encodeURIComponent(shareText + shareUrl);

  const shareLinks = [
    {
      name: 'WhatsApp',
      url: `whatsapp://send?text=${fullShareText}`,
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'bg-[#25D366] hover:bg-[#128C7E]'
    },
    {
      name: 'Gmail',
      url: `mailto:?subject=${encodeURIComponent('Ved - Vidhi Residency Brochure')}&body=${fullShareText}`,
      icon: <Mail className="h-5 w-5" />,
      color: 'bg-[#EA4335] hover:bg-[#D93025]'
    },
    {
      name: 'SMS',
      url: `sms:?body=${fullShareText}`,
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'bg-[#4285F4] hover:bg-[#3367D6]'
    }
  ];

  return (
    <div className="fixed right-0 bottom-0 mb-8 mr-8 z-50 flex flex-col gap-4 items-end">
      {/* Share Panel */}
      {isShareOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl p-6 max-w-xs animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Share Project</h3>
            <button 
              onClick={toggleShare}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close share panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`flex flex-col items-center justify-center py-3 px-4 rounded-md text-white transition duration-300 ${link.color}`}
                data-action={link.name === 'WhatsApp' ? 'share/whatsapp/share' : undefined}
              >
                {link.icon}
                <span className="text-xs mt-1">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Download Panel */}
      {isDownloadOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl p-6 max-w-xs animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Download Brochure</h3>
            <button 
              onClick={toggleDownload}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close download panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-4">
            <img 
              src="/public/brochure_preview.jpg" 
              alt="Brochure preview" 
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <p className="text-gray-600 text-sm">
              Get complete details about our premium properties, floor plans, amenities, and pricing in our comprehensive brochure.
            </p>
          </div>
          
          <a 
            href="/public/Ved_Vidhi_Residency_brochure.pdf" 
            download
            className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-md hover:from-emerald-700 hover:to-emerald-800 transition duration-300 font-medium"
          >
            <Download className="mr-2 h-5 w-5" /> 
            Download Brochure
          </a>
        </div>
      )}
      
      {/* Floating Buttons */}
      <div className="flex gap-4">
        {/* Share Button */}
        <button
          onClick={toggleShare}
          className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
            isShareOpen 
              ? 'bg-white text-emerald-600 w-14 h-14' 
              : 'bg-gradient-to-r from-emerald-500 to-emerald-700 text-white w-14 h-14 hover:scale-110 hover:shadow-xl'
          }`}
          aria-label={isShareOpen ? "Close share panel" : "Open share panel"}
        >
          <Share2 className="h-6 w-6" />
        </button>

        {/* Download Button */}
        <button
          onClick={toggleDownload}
          className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
            isDownloadOpen 
              ? 'bg-white text-emerald-600 w-14 h-14' 
              : 'bg-gradient-to-r from-emerald-500 to-emerald-700 text-white w-14 h-14 hover:scale-110 hover:shadow-xl'
          }`}
          aria-label={isDownloadOpen ? "Close download panel" : "Open download panel"}
        >
          <FileText className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default BrochureButton;