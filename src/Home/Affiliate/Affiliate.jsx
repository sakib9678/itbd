import React from "react";
import { motion } from "framer-motion";
import { FaRegHandshake, FaChartLine, FaRegLightbulb, FaArrowRight, FaCheck } from "react-icons/fa";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative h-full container mx-auto px-6 lg:px-12 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Unlock Your Earning Potential
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join our elite affiliate network and start earning substantial commissions 
              by promoting trusted digital products.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white text-[#0570B9] px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = "/affiliate-signup"}
            >
              Start Earning Now
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 mb-24 relative z-10">
          {[
            { number: "৳50K+", text: "Average Monthly Earnings", icon: <FaRegHandshake className="text-4xl text-blue-600" /> },
            { number: "1000+", text: "Active Partners", icon: <FaChartLine className="text-4xl text-blue-600" /> },
            { number: "24/7", text: "Dedicated Support", icon: <FaRegLightbulb className="text-4xl text-blue-600" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="py-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Why Partner With Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy to Start",
                description: "Simple registration process with quick approval and instant access to your dashboard.",
                features: ["Quick Registration", "Instant Approval", "User-friendly Dashboard"]
              },
              {
                title: "High Earnings",
                description: "Competitive commission rates with bonus opportunities and timely payouts.",
                features: ["Up to 50% Commission", "Performance Bonuses", "Monthly Payments"]
              },
              {
                title: "Full Support",
                description: "Comprehensive support system to help you succeed in your affiliate journey.",
                features: ["Marketing Materials", "Dedicated Support", "Training Resources"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <FaCheck className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#0570B9] to-[#0891f7] rounded-2xl p-12 text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful affiliates who are already earning with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/affiliate-signup"}
            className="bg-white text-[#0570B9] px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300"
          >
            Begin Your Journey Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Affiliate;