import React from 'react';
import { motion } from 'framer-motion';
import pos from '../assets/images/pos-main.jpg';
import desktoppos from '../assets/images/desktop-pos.jpg';
import mobilePos from '../assets/images/mobile-pos.jpg';
import analyticPos from '../assets/images/analytic-pos.jpg';
import { FaCashRegister, FaBarcode, FaDesktop, FaChartBar, FaUsersCog, FaServer, FaCheckCircle, FaMobileAlt, FaCloudUploadAlt } from 'react-icons/fa';

const POS = () => {
  const solutions = [
    {
      title: "Desktop POS",
      features: [
        "Multi-store Management",
        "Real-time Inventory Tracking",
        "Customer Management",
        "Sales Analytics",
        "Employee Management",
        "Vendor Management"
      ],
      image: desktoppos,
      icon: FaDesktop
    },
    {
      title: "Mobile POS",
      features: [
        "Portable Checkout",
        "Mobile Payments",
        "Offline Mode",
        "Table Management",
        "Order Management",
        "Digital Receipts"
      ],
      image: mobilePos,
      icon: FaMobileAlt
    },
    {
      title: "Cloud POS",
      features: [
        "Real-time Sync",
        "Remote Access",
        "Automatic Backups",
        "Multi-device Support",
        "Secure Data Storage",
        "Automatic Updates"
      ],
      image: analyticPos,
      icon: FaCloudUploadAlt
    }
  ];

  const features = [
    {
      title: "Sales Management",
      points: [
        "Fast Checkout Process",
        "Multiple Payment Options",
        "Discount Management",
        "Tax Calculations"
      ]
    },
    {
      title: "Inventory Control",
      points: [
        "Stock Tracking",
        "Auto Purchase Orders",
        "Barcode Integration",
        "Stock Alerts"
      ]
    },
    {
      title: "Reporting & Analytics",
      points: [
        "Sales Reports",
        "Inventory Reports",
        "Financial Analytics",
        "Custom Reports"
      ]
    }
  ];

  return (
    <div className="min-h-screenp-5 py-5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Modern POS Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with our advanced Point of Sale systems. 
              Streamline operations, boost sales, and grow your business.
            </p>
            <button className="bg-[#2D7EB5] text-white px-8 py-3 rounded-lg font-semibold 
              hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src={pos}
              alt="POS System"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our POS Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect POS solution that fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <solution.icon className="text-2xl text-[#2D7EB5] mr-2" />
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your business efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-[#2D7EB5]">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#2D7EB5] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today for a free consultation</p>
            <button className="bg-white text-[#2D7EB5] px-8 py-3 rounded-lg font-semibold 
              hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default POS;