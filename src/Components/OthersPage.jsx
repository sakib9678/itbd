import React from "react";
import { motion } from "framer-motion";
import girl from "../assets/images/girl.png";
import laptop from "../assets/images/laptop.png";
import { Link } from "react-router-dom";

const OthersPage = () => {
  return (
    <div className="container mx-auto px-4 "> 
      <div className=" relative">
      <div className="flex flex-col md:flex-row justify-between p-3 md:p-5 items-center min-h-[13rem] w-full bg">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left mb-6 md:mb-0">
          <p className="text-white">
            Start Working With Our <br />{" "}
            <span className="text-[#2D7EB5]">Technical Exparts</span>
          </p>
        </div>
        
        <div className="order-3 md:order-2 my-4 md:my-0">
          <Link 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            to="/contact"
          >
            <button className="h-10 md:h-12 w-28 md:w-32 bg-[#2D7EB5] text-white font-semibold rounded-lg shadow-lg hover:translate-y-2 transition-all text-sm md:text-base">
              Contact Now
            </button>
          </Link>
        </div>

        <div className="order-2 md:order-3">
          <img 
            className="h-48 md:h-60 lg:h-72 -mt-4 md:-mt-20" 
            src={girl} 
            alt="Girl illustration" 
          />
        </div>
      </div>

      <div>
        <motion.h1
          className="absolute -top-14 left-4 md:left-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            className="h-20 md:h-28 lg:h-32" 
            src={laptop} 
            alt="Laptop illustration" 
          />
        </motion.h1>
      </div>
    </div>
    </div>
  );
};

export default OthersPage;