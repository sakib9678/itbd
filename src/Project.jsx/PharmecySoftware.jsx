import React from "react";
import { motion } from "framer-motion";

const PharmecySoftware = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D7EB5]">
            Pharmacy Management Software
          </h1>
          <p className="text-lg text-gray-600">
            Streamline your pharmacy operations with our comprehensive
            management solution. Efficient inventory control, prescription
            management, and billing system.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2D7EB5] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Request Demo
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3"
            alt="Pharmacy Management System"
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
            title: "Inventory Management",
            description:
              "Real-time tracking of medicine stock, expiry dates, and automated reorder notifications.",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
          },
          {
            title: "Prescription Management",
            description:
              "Digital prescription processing, patient history tracking, and drug interaction checks.",
            image:
              "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3",
          },
          {
            title: "Billing System",
            description:
              "Automated billing, insurance processing, and financial reporting capabilities.",
            image:
              "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
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

      {/* Key Benefits Section */}
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
            "Easy inventory tracking",
            "Reduced medication errors",
            "Improved patient care",
            "Enhanced efficiency",
            "Real-time reporting",
            "Cloud backup system",
            "Multi-branch support",
            "24/7 Technical support",
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
          Ready to Transform Your Pharmacy?
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch with us for a free consultation and demo.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#2D7EB5] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Sales
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PharmecySoftware;
