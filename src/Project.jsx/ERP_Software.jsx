import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaCogs, FaDatabase, FaClipboardCheck, FaCloud } from 'react-icons/fa';

const ERP_Software = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl text-[#2D7EB5]" />,
      title: "Financial Management",
      description: "Comprehensive financial tracking, reporting, and analytics tools"
    },
    {
      icon: <FaUsers className="text-4xl text-[#2D7EB5]" />,
      title: "HR Management",
      description: "Employee data, attendance, and performance management"
    },
    {
      icon: <FaCogs className="text-4xl text-[#2D7EB5]" />,
      title: "Operations Control",
      description: "Streamline business processes and workflow automation"
    },
    {
      icon: <FaDatabase className="text-4xl text-[#2D7EB5]" />,
      title: "Inventory Management",
      description: "Real-time stock tracking and optimization"
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#2D7EB5]" />,
      title: "Quality Control",
      description: "Ensure compliance and maintain quality standards"
    },
    {
      icon: <FaCloud className="text-4xl text-[#2D7EB5]" />,
      title: "Cloud Integration",
      description: "Secure cloud-based data storage and accessibility"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Enterprise Resource Planning Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Streamline your business operations with our comprehensive ERP software
        </p>
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="ERP Dashboard"
          className="w-full rounded-lg shadow-xl"
        />
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto text-center mt-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get started with our ERP solutions today and experience the difference
        </p>
        <button className="bg-[#2D7EB5] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
          Request a Demo
        </button>
      </motion.div>

      {/* Integration Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-7xl mx-auto mt-20"
      >
        <div className="bg-[#2D7EB5] rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-lg opacity-90">
                Our ERP software integrates perfectly with your existing systems and workflows,
                ensuring a smooth transition and enhanced productivity.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Integration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ERP_Software;