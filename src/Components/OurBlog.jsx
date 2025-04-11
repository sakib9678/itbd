import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

const OurBlog = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold animated-text2 mb-4">
            Our Latest Blog Posts
          </h2>
          <p className="text-gray-600">
            Stay updated with our latest news and insights
          </p>
        </motion.div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-500 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  </svg>
                  <span className="ml-2 text-gray-600">5 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  The Future of Technology
                </h3>
                <p className="text-gray-600">
                  Explore the latest trends in technology and their impact on
                  our daily lives.
                </p>
                <button className="flex items-center text-blue-500 hover:text-blue-700">
                  Read More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-500 animate-bounce"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  </svg>
                  <span className="ml-2 text-gray-600">3 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Web Development Best Practices
                </h3>
                <p className="text-gray-600">
                  Learn about modern web development techniques and tools.
                </p>
                <button className="flex items-center text-blue-500 hover:text-blue-700">
                  Read More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-500 animate-spin"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                  </svg>
                  <span className="ml-2 text-gray-600">4 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Digital Transformation
                </h3>
                <p className="text-gray-600">
                  Discover how businesses are adapting to the digital age.
                </p>
                <button className="flex items-center text-blue-500 hover:text-blue-700">
                  Read More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
