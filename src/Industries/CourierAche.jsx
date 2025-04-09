import React from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaTruck, FaMapMarkerAlt, FaClock, FaShieldAlt, FaPhone } from 'react-icons/fa';
import Banner from "../assets/images/courierAche-banner.jpg";

const CourierAche = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Same-day delivery within city, 2-3 days nationwide"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Wide Coverage",
      description: "Serving all major cities and districts across the country"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Handling",
      description: "Package safety guaranteed with real-time tracking"
    },
    {
      icon: <FaClock />,
      title: "24/7 Service",
      description: "Round-the-clock customer support and pickup service"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EBF4F9] to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="md:w-1/2"
          >
            <div className="mb-4">
              <span className="bg-[#EBF4F9] text-[#2D7EB5] px-4 py-1 rounded-full text-sm font-semibold inline-block">
                A Sister Concern of ITBD
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D7EB5] mb-4">
              Swift Deliveries at Your Fingertips
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-lg">
                Courier Ache is a leading online courier platform enabling seamless product delivery across the nation. As a proud sister concern of ITBD, we combine technology and reliability to provide exceptional delivery services.
              </p>
              <p className="text-gray-600 text-lg">
                Experience hassle-free shipping with our advanced tracking system and nationwide network, ensuring your packages reach their destination safely and on time.
              </p>
            </div>
            <motion.a
              href='https://courierache.com'
              target='_blank'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2D7EB5] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#246A99] transition-colors"
            >
              Send Package Now
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="md:w-1/2"
          >
            <img
              src={Banner}
              alt="Courier Service"
              className="rounded-lg shadow-2xl p-5 w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2D7EB5] mb-12">
            Why Choose Courier Ache?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#EBF4F9] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-[#2D7EB5] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2D7EB5] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#2D7EB5] text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ship Your Package?</h2>
          <p className="text-xl mb-8">Contact us now and get your delivery started</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white text-[#2D7EB5] px-8 py-3 rounded-full font-semibold hover:bg-[#EBF4F9] transition-colors cursor-pointer"
          >
            <FaPhone />
            <span>Contact Us</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourierAche;