import React from "react";
import { motion } from "framer-motion";

const MobileApplication = () => {
  return (
    <div className="px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Existing Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-[#2D7EB5]">
            Mobile App Development Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Transforming your ideas into powerful mobile applications with
            cutting-edge technology and exceptional user experience.
          </p>
        </motion.div>

        {/* Existing Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* ... (previous three service cards remain the same) ... */}
        </div>

        {/* New Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Mobile App Development?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Expert Developers",
              "Agile Methodology",
              "Quality Assurance",
              "Timely Delivery",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-[#2D7EB5] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Discovery & Planning",
                desc: "We analyze your requirements and create a detailed roadmap.",
              },
              {
                title: "Design & Development",
                desc: "Our team creates intuitive designs and develops robust functionality.",
              },
              {
                title: "Testing & QA",
                desc: "Rigorous testing ensures your app performs flawlessly.",
              },
              {
                title: "Deployment & Support",
                desc: "We handle the launch and provide ongoing maintenance.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-[#2D7EB5] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New CTA Section */}
        <motion.div
          className="mt-20 bg-[#2D7EB5] rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="mb-8 text-lg">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#2D7EB5] px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Started
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#2D7EB5] transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Original CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="bg-[#2D7EB5] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileApplication;
