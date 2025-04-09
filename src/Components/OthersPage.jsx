import React from "react";
import { motion } from "framer-motion";
import girl from "../assets/images/girl.png";
import laptop from "../assets/images/laptop.png";
import { Link } from "react-router-dom";

const OthersPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative bg-gradient-to-r from-[#2D7EB5] to-blue-600 rounded-2xl  shadow-lg">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-center px-8 py-4 ">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Start Working With Our <br />
              <span className="text-yellow-300">Technical Experts</span>
            </h2>
            <p className="text-white/80 mt-4 text-sm md:text-base mb-5">
              Collaborate with our skilled professionals to achieve your goals
              with cutting-edge solutions.
            </p>
            {/* Button Section */}
            <div className="mt-6 md:mt-0">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 w-36 bg-yellow-300 text-[#2D7EB5] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Now
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-6 md:mt-0">
            <img
              className=""
              src={girl}
              alt="Girl illustration"
            />
          </div>
        </div>

        {/* Floating Laptop Illustration */}
        <motion.div
          className="absolute -top-10 left-6 md:left-12"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            className="h-20 md:h-28 lg:h-32"
            src={laptop}
            alt="Laptop illustration"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OthersPage;
