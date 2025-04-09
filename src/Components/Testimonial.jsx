import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewSlides = [
  {
    id: 1,
    title:
      "Outstanding delivery service that exceeded my expectations! The care and attention to detail in handling my package was remarkable. Fast, efficient, and professional.",
    name: "John Doe",
    position: "Business Owner",
    rating: 5,
  },
  {
    id: 2,
    title:
      "I've been using this service for my business shipments, and they've never disappointed. Their tracking system is excellent, and the customer service is top-notch.",
    name: "Jane Smith",
    position: "E-commerce Manager",
    rating: 5,
  },
  {
    id: 3,
    title:
      "Reliable, punctual, and extremely professional. The team goes above and beyond to ensure packages arrive safely and on time. Highly impressed!",
    name: "Michael Brown",
    position: "Retail Director",
    rating: 5,
  },
  {
    id: 4,
    title:
      "The best shipping service I've ever used! Their international delivery options are excellent, and their prices are very competitive.",
    name: "Sarah Johnson",
    position: "Online Entrepreneur",
    rating: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2D7EB5] to-blue-900 bg-clip-text text-transparent">
            Customer Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our valued customers
            have to say
          </p>
        </div>

        {/* Slider Section */}
        <Slider {...settings} className="review-slider -mx-4">
          {reviewSlides.map((item) => (
            <div key={item.id} className="px-4 py-2">
              <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 text-4xl text-[#2D7EB5] opacity-20" />

                {/* Star Ratings */}
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-gray-700 italic leading-relaxed mb-6 min-h-[100px]">
                  {item.title}
                </p>

                {/* Customer Info */}
                <div className="mt-auto">
                  <h4 className="font-bold text-[#2D7EB5] text-xl">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{item.position}</p>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#2D7EB5] opacity-10 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
