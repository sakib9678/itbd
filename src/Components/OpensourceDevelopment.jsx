import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaBuilding } from "react-icons/fa";

const OpensourceDevelopment = () => {
  return (
    <div className="mx-auto px-4 py-5">
      <div className="container bg-white text-gray-800 py-16">
        <div className="">
          <motion.h1
            className="text-5xl font-bold mb-8 text-center bg-[#2D7EB5] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Open Source Development Services
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h2
                className="text-3xl font-semibold text-[#2D7EB5]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Empowering Innovation Through Open Source
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We specialize in creating and contributing to open source
                solutions that drive technology forward. Our expert developers
                help businesses leverage and enhance open source technologies.
              </motion.p>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCode className="w-8 h-8 text-[#2D7EB5] mr-4" />
                  <span className="text-gray-700 font-medium">
                    Custom Open Source Solutions
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaUsers className="w-8 h-8 text-[#2D7EB5] mr-4" />
                  <span className="text-gray-700 font-medium">
                    Community Contributions
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaBuilding className="w-8 h-8 text-[#2D7EB5] mr-4" />
                  <span className="text-gray-700 font-medium">
                    Enterprise Open Source Integration
                  </span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3"
                alt="Open Source Development"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
          <div className="mt-12">
            <motion.h2
              className="text-3xl font-semibold text-center text-[#2D7EB5]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <FaCode className="w-12 h-12 text-[#2D7EB5] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-gray-600">
                  We provide custom development services to create robust open source solutions tailored to your needs.
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <FaUsers className="w-12 h-12 text-[#2D7EB5] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                <p className="text-gray-600">
                  Our experts offer consulting services to help you navigate and leverage open source technologies effectively.
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <FaBuilding className="w-12 h-12 text-[#2D7EB5] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integration</h3>
                <p className="text-gray-600">
                  We assist in integrating open source solutions into your enterprise systems seamlessly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpensourceDevelopment;