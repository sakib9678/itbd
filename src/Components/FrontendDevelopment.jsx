import React from "react";
import { motion } from "framer-motion";

const FrontendDevelopment = () => {
  return ( 
    <div className="container mx-auto px-4 pb-10">
      <div className=" mt-10">
        <div className="px-4 py-16">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            data-aos="fade-up"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frontend Development
            </h1>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user experiences
            </p>
          </motion.div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="ml-3 text-xl font-semibold">Fast Performance</h3>
              </div>
              <p className="text-gray-600">
                Optimized code for lightning-fast loading times and smooth
                interactions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-[#2D7EB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="ml-3 text-xl font-semibold">
                  Responsive Design
                </h3>
              </div>
              <p className="text-gray-600">
                Perfectly adapted layouts for all devices and screen sizes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-[#2D7EB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 className="ml-3 text-xl font-semibold">Modern UI/UX</h3>
              </div>
              <p className="text-gray-600">
                Contemporary design patterns and intuitive user experiences.
              </p>
            </motion.div>
          </div>

          {/* Technologies Section */}
          <motion.div
            className="mt-20"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="React"
                className="h-20 w-auto mx-auto hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                alt="TypeScript"
                className="h-20 w-auto mx-auto hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                alt="Tailwind CSS"
                className="h-20 w-auto mx-auto hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                alt="Next.js"
                className="h-20 w-auto mx-auto hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>

          {/* Project Showcase */}
          <motion.div
            className="mt-20"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Latest Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Project 1"
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-[#2D7EB5] bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    E-Commerce Platform
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="Project 2"
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-[#2D7EB5] bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Dashboard Analytics
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center bg-[#2D7EB5] rounded-xl p-12 shadow-xl"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 mb-8">
              Let's create something amazing together
            </p>
            <motion.button
              className="bg-white text-[#2D7EB5] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;