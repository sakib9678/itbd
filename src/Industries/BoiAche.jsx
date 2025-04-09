import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaBookReader, FaShoppingCart, FaTruck, FaMoneyBillWave } from 'react-icons/fa'
import boiAche from '../assets/images/BoiAche.jpg'

const BoiAche = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation Bar */}
      <motion.div 
        className="bg-white shadow-lg backdrop-blur-md bg-opacity-80 fixed w-full z-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] bg-clip-text text-transparent">
              BoiAche
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Modern Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] bg-clip-text text-transparent">
                Your Digital Library Journey Starts Here
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Bangladesh's Premier Online Book Platform | Sister Concern of ITBD
              </p>
              <motion.a 
                className="bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://boiache.com"
              target="_blank"
              >
                Explore Collection
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D7EB5]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src={boiAche} 
                alt="BoiAche Library"
                className="rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern About Section */}
      <div className="py-24 bg-gradient-to-b from-white via-[#2D7EB5]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] bg-clip-text text-transparent">
                About BoiAche
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  BoiAche is Bangladesh's leading digital book platform, revolutionizing the way people access and experience literature. Our mission is to make knowledge accessible to everyone through our comprehensive digital library.
                </p>
                <p className="text-lg leading-relaxed">
                  As a sister concern of ITBD, we leverage cutting-edge technology to provide seamless access to thousands of books, ranging from academic materials to leisure reading.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="border-l-4 border-[#2D7EB5] pl-4">
                    <div className="text-3xl font-bold text-[#2D7EB5]">10K+</div>
                    <div className="text-sm text-gray-500">Books Available</div>
                  </div>
                  <div className="border-l-4 border-[#2D7EB5] pl-4">
                    <div className="text-3xl font-bold text-[#2D7EB5]">50K+</div>
                    <div className="text-sm text-gray-500">Happy Readers</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <FaBook className="text-4xl text-[#2D7EB5] mb-3" />
                  <h4 className="font-semibold mb-2">Digital Library</h4>
                  <p className="text-sm text-gray-600">Access books anytime, anywhere</p>
                </div>
                <div className="bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] p-6 rounded-2xl shadow-lg text-white">
                  <FaShoppingCart className="text-4xl mb-3" />
                  <h4 className="font-semibold mb-2">Easy Purchase</h4>
                  <p className="text-sm opacity-90">Simple buying process</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] p-6 rounded-2xl shadow-lg text-white">
                  <FaBookReader className="text-4xl mb-3" />
                  <h4 className="font-semibold mb-2">Smart Reading</h4>
                  <p className="text-sm opacity-90">Enhanced reading features</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <FaTruck className="text-4xl text-[#2D7EB5] mb-3" />
                  <h4 className="font-semibold mb-2">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Nationwide shipping</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] bg-clip-text text-transparent">
              Why Choose BoiAche?
            </h3>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookReader className="text-6xl" />,
                title: "Vast Collection",
                description: "Access thousands of books across all genres"
              },
              {
                icon: <FaMoneyBillWave className="text-6xl" />,
                title: "Flexible Options",
                description: "Choose between buying or renting books"
              },
              {
                icon: <FaTruck className="text-6xl" />,
                title: "Fast Delivery",
                description: "Quick delivery across Bangladesh"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all border border-gray-100 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] bg-clip-text text-transparent">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-semibold my-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-[#2D7EB5] to-[#1a4971] p-12 rounded-3xl text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">Ready to Start Your Reading Journey?</h3>
            <p className="text-xl mb-8 opacity-90">Join our growing community of book enthusiasts</p>
            <motion.a
              className="bg-white text-[#2D7EB5] px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://boiache.com/signup"
              target="_blank"
            >
              Create Free Account
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BoiAche