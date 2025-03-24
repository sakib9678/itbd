import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaUserFriends,
  FaMobile,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
  FaCreditCard,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import ecommerceDashboard from "../assets/images/dashboard.jpg";
import mobileApp from "../assets/images/mobile-app.jpg";
import securePayment from "../assets/images/secure-payment.jpg";
import ecommerceHero from "../assets/images/hero-bg.jpg";

const ECommerce = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const projectDetails = [
    {
      title: "Modern Tech Stack",
      icon: <FaCode className="text-4xl text-blue-600" />,
      description:
        "Built with React.js, Node.js, and MongoDB for optimal performance",
      image: ecommerceDashboard,
      features: ["React.js Frontend", "Node.js Backend", "MongoDB Database"],
    },
    {
      title: "Mobile First Design",
      icon: <FaMobile className="text-4xl text-purple-600" />,
      description: "Responsive design that works seamlessly across all devices",
      image: mobileApp,
      features: ["Responsive Layout", "Touch Friendly", "Fast Loading"],
    },
    {
      title: "Secure Infrastructure",
      icon: <FaDatabase className="text-4xl text-green-600" />,
      description: "Enterprise-grade security with encrypted data transmission",
      image: securePayment,
      features: ["SSL Encryption", "Secure Payments", "Data Protection"],
    },
  ];

  const features = [
    {
      icon: <FaShoppingCart className="h-8 w-8" />,
      title: "Smart Shopping Cart",
      desc: "Intuitive shopping experience with smart recommendations",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8" />,
      title: "Secure Payments",
      desc: "Multi-layer security with encrypted transactions",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaUserFriends className="h-8 w-8" />,
      title: "User Management",
      desc: "Comprehensive customer profile management",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaChartLine className="h-8 w-8" />,
      title: "Analytics Dashboard",
      desc: "Real-time insights and reporting",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaMobile className="h-8 w-8" />,
      title: "Mobile Responsive",
      desc: "Seamless experience across all devices",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: <FaCreditCard className="h-8 w-8" />,
      title: "Payment Processing",
      desc: "Support for multiple payment methods",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ecommerceHero}
            alt="E-commerce Hero"
            className="w-full h-full object-cover"
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
              E-Commerce Software Solutions
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
              {...fadeIn}
            >
              Transform your business with our powerful and intuitive e-commerce
              platform
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-[#2D7EB5] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#246a99] transition-colors text-lg">
                <FaRocket className="h-5 w-5" />
                Get Started
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
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={ecommerceDashboard}
              alt="E-commerce Dashboard"
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <button className="bg-[#2D7EB5] text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2 mx-auto">
            <FaRocket className="h-5 w-5" />
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ECommerce;
