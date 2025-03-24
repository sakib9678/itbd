import React, { useState } from "react";
import bdcoda from "../assets/images/bdcoda.png";
import boiAche from "../assets/images/boiAche.png";
import courierAche from "../assets/images/courierAche.png";
import laptopAche from "../assets/images/laptopAche.png";
import kazAche from "../assets/images/kazAche.png";
import eduPoribar from "../assets/images/eduPoribar.png";

const OurProject = () => {
  const [preview, setPreview] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const services = [
    {
      image: bdcoda,
      to: "https://bdcoda.com/",
    },
    {
      image: boiAche,
      to: "https://boiache.com/",
    },
    {
      image: eduPoribar,
      to: "https://eduporibar.com/",
    },
    {
      image: courierAche,
      to: "https://courierache.com/",
    },
    {
      image: laptopAche,
      to: "https://www.laptopache.com/",
    },
    {
      image: kazAche,
      to: "https://kazache.com/",
    },
  ];

  const handleImageClick = (service) => {
    if (isFullScreen) {
      window.open(service.to, "_blank", "noopener noreferrer");
    } else {
      setPreview(service);
      setIsFullScreen(true);
    }
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setPreview(null);
  };

  return (
    <div className="relative container text-center">
      {/* Full-screen preview overlay */}
      {preview && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center "
        >
          <div className="absolute top-4 right-4 ">
            <button
              className="text-white text-2xl h-8 w-8 rounded-xl bg-red-600"
              onClick={handleCloseFullScreen}
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <img
              src={preview.image}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-300"
              onClick={() => handleImageClick(preview)}
            />
            <div className="absolute left-1/2 bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-black px-4 py-2 rounded-lg font-medium">
                Click to Visit Website
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="animated-text">Our Projects</h2>
          <p className="text-2xl text-center">
            Discover our portfolio of successful digital solutions that have
            transformed businesses
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="items-center text-center mb-6">
                  <div 
                    className="relative bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors duration-300 cursor-zoom-in"
                    onClick={() => handleImageClick(service)}
                  >
                    <img 
                      src={service.image} 
                      alt="Project preview" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-1/2 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <a
                    className="px-6 py-2 bg-[#2D7EB5] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    href={service.to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;