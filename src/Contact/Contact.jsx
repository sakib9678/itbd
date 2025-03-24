import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-contact h-[400px]  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 ">
          <img
            src="src/assets/images/contact.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto px-4"
          >
            We're here to help and answer any question you might have
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-[#2D7EB5] font-medium">Contact Us</li>
              </ol>
            </nav>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className=" rounded-lg shadow-lg p-6 bg-[#2D7EB5]">
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MdEmail className="text-2xl text-white mt-1" />
                      <div className="ml-4">
                        <p className="text-sm text-white">Email</p>
                        <p className="">academyitbd@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MdPhone className="text-2xl text-white mt-1" />
                      <div className="ml-4">
                        <p className="text-sm text-white">Phone</p>
                        <p className="">+88013072794008</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MdLocationOn className="text-2xl text-white mt-1" />
                      <div className="ml-4">
                        <p className="text-sm text-white">Location</p>
                        <p className="">
                          Hossain Market, Sha-41, Uttar Badda
                          <br />
                          Dhaka 1212, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-4 text-white">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                        (Icon, index) => (
                          <a
                            key={index}
                            href="#"
                            className="w-10 h-10 rounded-full bg-white text-white flex items-center justify-center hover:bg-[#1a4971] transition-colors duration-300"
                          >
                            <Icon className="text-lg text-[#2D7EB5]" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    Send us a Message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D7EB5] focus:border-[#2D7EB5] transition-colors duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D7EB5] focus:border-[#2D7EB5] transition-colors duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D7EB5] focus:border-[#2D7EB5] transition-colors duration-300"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows="6"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D7EB5] focus:border-[#2D7EB5] transition-colors duration-300"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#2D7EB5] text-white py-3 px-6 rounded-md hover:bg-[#1a4971] transition-colors duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>

                {/* Map */}
                <motion.div variants={itemVariants} className="mt-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9882713262273!2d90.42353007397125!3d23.78343198751011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7203c395cd9%3A0x8010c40757c29135!2sIbrahim%20Tech%20BD!5e0!3m2!1sen!2sbd!4v1742708874689!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
