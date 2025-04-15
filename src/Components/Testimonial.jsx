import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewSlides = [
  {
    id: 1,
    title:
      "আমি তাদের কাছ থেকে একটি ওয়েবসাইট এবং অ্যাপ্লিকেশন তৈরি করিয়েছি। তাদের কাজের মান এবং সময়মতো ডেলিভারি আমাকে মুগ্ধ করেছে।",
    name: "Mustafizur Rahman",
    position: "Customer",
    rating: 5,
  },
  {
    id: 5,
    title:
      "আমি তাদের সার্ভিস ব্যবহার করেছি এবং এটি আমার ব্যবসার জন্য খুবই উপকারী হয়েছে। তাদের কাস্টমার সার্ভিস এবং সময়মতো ডেলিভারি সত্যিই প্রশংসনীয়।",
    name: "Arif Hossain",
    position: "Custromer",
    rating: 5,
  },
  {
    id: 6,
    title:
      "তাদের কাছ থেকে একটি ই-কমার্স ওয়েবসাইট তৈরি করিয়েছি। তাদের ডিজাইন এবং ডেভেলপমেন্টের মান সত্যিই অসাধারণ। আমি তাদের কাজের প্রতি খুবই সন্তুষ্ট।",
    name: "Shakib Al Hasan",
    position: "E-commerce Business Owner",
    rating: 5,
  },
  {
    id: 7,
    title:
      "তাদের মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট সার্ভিস ব্যবহার করেছি। তাদের টিম খুবই পেশাদার এবং সময়মতো কাজ সম্পন্ন করেছে। আমি তাদের সার্ভিস আবারও ব্যবহার করব।",
    name: "Nusrat Jahan",
    position: "Startup Founder",
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
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4   py-16 sm:py-16">
        <div className=" px-4 sm:px-4 lg:px-8 pb-20 my-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 animated-text2 md:pt-10">
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
              <div key={item.id} className="px-4 py-4">
                <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 text-4xl text-[#2D7EB5]" />

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
                    <p className="text-gray-600 text-sm mt-1">
                      {item.position}
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#2D7EB5] opacity-10 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
