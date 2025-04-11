import React from "react";
import webAplication from "../assets/images/webApplication.png";
import { motion } from "framer-motion"; // Add this import

const WebApplication = () => {
  return (
    <div className="font-sans container mx-auto">
      {/* Hero Section */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-2 justify-evenly items-center bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#2D7EB5]">
              Web Application Development Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Transform your business with custom web applications that deliver
              exceptional user experiences
            </p>
            <button className="bg-gradient-to-r from-[#2D7EB5] to-blue-600 text-white py-4 px-10 rounded-full transition duration-300 hover:shadow-lg hover:scale-105 transform">
              Get Started
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={webAplication} alt="Web Development"  />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-[#2D7EB5]">
            Our Web Application Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-[#2D7EB5] text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Updated for better visualization */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-[#2D7EB5]">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-[#2D7EB5] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D7EB5] text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <button className="bg-white text-[#2D7EB5] py-4 px-10 rounded-full transition duration-300 hover:shadow-lg hover:scale-105 transform font-semibold">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: <i className="fas fa-code"></i>,
    title: "Custom Web Development",
    description: "Tailor-made solutions to meet your specific business requirements"
  },
  {
    icon: <i className="fas fa-mobile-alt"></i>,
    title: "Responsive Design",
    description: "Applications that work seamlessly across all devices"
  },
  {
    icon: <i className="fas fa-server"></i>,
    title: "Backend Development",
    description: "Robust server-side solutions for optimal performance"
  }
];

const processSteps = [
  {
    title: "Requirements Analysis",
    description: "Understanding your needs and objectives"
  },
  {
    title: "Design & Planning",
    description: "Creating the blueprint for success"
  },
  {
    title: "Development",
    description: "Building your solution with cutting-edge technology"
  },
  {
    title: "Testing & Launch",
    description: "Ensuring quality and performance"
  }
];

export default WebApplication;