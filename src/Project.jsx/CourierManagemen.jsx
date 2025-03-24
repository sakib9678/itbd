import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTruck,
  FaRoute,
  FaMobile,
  FaShieldAlt,
  FaChartLine,
  FaBox,
  FaUsersCog,
  FaRocket,
  FaCog
} from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';

const CourierManagemen = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const images = {
    hero: "https://excelsior-express.net/wp-content/uploads/2017/03/banner.jpg",
    dashboard: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80",
    mobile: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
    secure: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80"
  };

  const projectDetails = [
    {
      title: "Real-time Tracking",
      icon: <FaTruck className="text-4xl text-[#2D7EB5]" />,
      description: "Monitor deliveries in real-time with GPS precision",
      image: images.dashboard,
      features: ["Live GPS Tracking", "Route Optimization", "Delivery Updates"],
    },
    {
      title: "Mobile Solutions",
      icon: <FaMobile className="text-4xl text-purple-600" />,
      description: "Powerful mobile apps for drivers and customers",
      image: images.mobile,
      features: ["Driver App", "Customer Tracking", "Push Notifications"],
    },
    {
      title: "Secure Operations",
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      description: "End-to-end security for all deliveries",
      image: images.secure,
      features: ["Package Protection", "Secure Authentication", "Data Encryption"],
    },
  ];

  const features = [
    {
      icon: <FaTruck className="h-8 w-8" />,
      title: "Fleet Management",
      desc: "Efficiently manage your entire delivery fleet",
      color: "from-blue-400 to-[#2D7EB5]",
    },
    {
      icon: <FaRoute className="h-8 w-8" />,
      title: "Smart Routing",
      desc: "AI-powered route optimization",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <BiCurrentLocation className="h-8 w-8" />,
      title: "Live Tracking",
      desc: "Real-time package location updates",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaChartLine className="h-8 w-8" />,
      title: "Analytics",
      desc: "Comprehensive delivery insights",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaUsersCog className="h-8 w-8" />,
      title: "Driver Management",
      desc: "Complete driver scheduling system",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: <FaBox className="h-8 w-8" />,
      title: "Package Handling",
      desc: "Efficient package processing",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Courier Management Hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-5xl sm:text-7xl font-bold mb-6 text-white"
              {...fadeIn}
            >
              Next-Gen Courier Management
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
              {...fadeIn}
            >
              Transform your logistics operations with our state-of-the-art courier management system
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-[#2D7EB5] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-lg">
                <FaRocket className="h-5 w-5" />
                Schedule Demo
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg">
                <FaCog className="h-5 w-5" />
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Highlights */}
        <motion.div className="mb-32">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            {...fadeIn}
          >
            Project Highlights
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {projectDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="mb-2">{detail.icon}</div>
                    <h3 className="text-2xl font-semibold">{detail.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{detail.description}</p>
                  <ul className="space-y-2">
                    {detail.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2D7EB5]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="mb-32">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            {...fadeIn}
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
              >
                <div
                  className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            {...fadeIn}
          >
            Powerful Dashboard
          </motion.h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images.dashboard}
              alt="Courier Management Dashboard"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center py-16 bg-[#2D7EB5] rounded-3xl"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Delivery Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our courier management solution
          </p>
          <button className="bg-white text-[#2D7EB5] text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            <FaRocket className="h-5 w-5" />
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CourierManagemen;