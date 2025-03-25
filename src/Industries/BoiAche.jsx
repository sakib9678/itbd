import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaBookReader, FaShoppingCart } from 'react-icons/fa'
import boiAche from '../assets/images/BoiAche.jpg'

const BoiAche = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.img 
            src={boiAche} 
            alt="BoiAche Logo"
            className=" mx-auto mb-6"
            whileHover={{ scale: 1.05 }}
          />
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to BoiAche
          </motion.h1>
          <p className="text-xl text-gray-600 mb-8">Your Ultimate Destination for Books in Bangladesh</p>
          <motion.a
            href="https://boiache.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full inline-block hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit BoiAche
          </motion.a>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaBook className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Buy Books</h3>
            <p className="text-gray-600">Explore our vast collection of books across various genres.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaBookReader className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rent Books</h3>
            <p className="text-gray-600">Save money by renting books for your reading needs.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaShoppingCart className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
            <p className="text-gray-600">Convenient online shopping with quick delivery.</p>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">About BoiAche</h2>
          <p className="text-gray-600 mb-4">
            BoiAche is Bangladesh's premier online bookstore, offering a comprehensive collection of books
            for purchase and rent. We believe in making reading accessible to everyone through our
            innovative book rental service and competitive pricing for purchases.
          </p>
          <p className="text-gray-600">
            Whether you're a student, professional, or book enthusiast, BoiAche provides a seamless
            experience for all your reading needs. Join our community of readers today!
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BoiAche