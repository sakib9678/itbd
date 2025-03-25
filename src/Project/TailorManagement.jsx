import React from "react";
import { motion } from "framer-motion";

const TailorManagement = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D7EB5]">
            Tailor Management System
          </h1>
          <p className="text-lg text-gray-600">
            Streamline your tailoring business with our comprehensive management solution.
            Efficient order tracking, measurement management, and customer relationship system.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2D7EB5] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1537274942065-eda9d00a6293?ixlib=rb-4.0.3"
            alt="Tailor Management System"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {[
          {
            title: "Order Management",
            description: "Track customer orders, deadlines, and delivery status in real-time.",
            image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3", // Add feature image
          },
          {
            title: "Measurement System",
            description: "Digital storage of customer measurements with easy update capabilities.",
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3", // Add feature image
          },
          {
            title: "Customer Database",
            description: "Maintain detailed customer profiles, preferences, and order history.",
            image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3", // Add feature image
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2D7EB5] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-8 rounded-lg mb-12"
      >
        <h2 className="text-3xl font-bold text-[#2D7EB5] mb-6 text-center">
          Key Benefits
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            "Efficient order tracking",
            "Digital measurements",
            "Customer history access",
            "Automated reminders",
            "Invoice generation",
            "Inventory management",
            "Staff management",
            "Performance analytics",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-[#2D7EB5] mb-4">
          Ready to Modernize Your Tailoring Business?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us today for a personalized demonstration.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#2D7EB5] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Schedule Demo
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default TailorManagement;