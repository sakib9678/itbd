import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"
import logo from "../assets/images/itbd-logo.png"

const Footer = () => {
  const socialVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.5, type: "spring", stiffness: 300 }
    }
  }

  const listItemVariants = {
    hover: {
      x: 10,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="mt-10">
      <footer className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-12 shadow-inner">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="block"
              >
                <img className="w-48" src={logo} alt="ITBD Logo" />
              </motion.a>
              <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                We are dedicated to providing the best services and solutions for our clients.
              </p>
            </motion.div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-[#2D7EB5] inline-block relative
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                           after:bg-[#2D7EB5] hover:after:w-full after:transition-all after:duration-300">
                Quick Links
              </h3>
              <ul className="space-y-3">
               
                  <li>
                    <motion.li
                    
                    variants={listItemVariants}
                    whileHover="hover"
                  >
                    <a href='/' 
                       className="text-gray-600 hover:text-[#2D7EB5] transition duration-300 text-lg flex items-center">
                      <span>→ Home</span>
                    </a>
                  </motion.li>
                  </li>
                  <li>
                    <motion.li
                    
                    variants={listItemVariants}
                    whileHover="hover"
                  >
                    <a href='/' 
                       className="text-gray-600 hover:text-[#2D7EB5] transition duration-300 text-lg flex items-center">
                      <span>→ Service</span>
                    </a>
                  </motion.li>
                  </li>
                  <li>
                    <motion.li
                    
                    variants={listItemVariants}
                    whileHover="hover"
                  >
                    <a href='/' 
                       className="text-gray-600 hover:text-[#2D7EB5] transition duration-300 text-lg flex items-center">
                      <span>→ Blog</span>
                    </a>
                  </motion.li>
                  </li>
                  <li>
                    <motion.li
                    
                    variants={listItemVariants}
                    whileHover="hover"
                  >
                    <a href='/' 
                       className="text-gray-600 hover:text-[#2D7EB5] transition duration-300 text-lg flex items-center">
                      <span>→ Contact</span>
                    </a>
                  </motion.li>
                  </li>
                  
                  
                
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-[#2D7EB5] inline-block relative
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                           after:bg-[#2D7EB5] hover:after:w-full after:transition-all after:duration-300">
                Contact Info
              </h3>
              <ul className="space-y-3 text-gray-600">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 hover:text-[#2D7EB5] transition-colors duration-300"
                >
                  <span className="animate-bounce">📍</span>
                  <span>Hossain Market, Uttar Badda, Dhaka</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 hover:text-[#2D7EB5] transition-colors duration-300"
                >
                  <span className="animate-pulse">📧</span>
                  <span>itbd@gmail.com</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 hover:text-[#2D7EB5] transition-colors duration-300"
                >
                  <span className="animate-bounce">📞</span>
                  <span>+1 234 567 890</span>
                </motion.li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-[#2D7EB5] inline-block relative
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                           after:bg-[#2D7EB5] hover:after:w-full after:transition-all after:duration-300">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FaFacebook />, color: 'hover:text-blue-600' },
                  { icon: <FaInstagram />, color: 'hover:text-pink-600' },
                  { icon: <FaTwitch />, color: 'hover:text-purple-600' },
                  { icon: <FaTwitter />, color: 'hover:text-blue-400' },
                  { icon: <FaLinkedinIn />, color: 'hover:text-blue-700' }
                ].map((social, index) => (
                  <motion.a
                    key={index} 
                    variants={socialVariants}
                    whileHover="hover"
                    href="#"
                    className={`text-2xl text-gray-600 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t border-gray-200 mt-12 pt-8 text-center"
          >
            <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              &copy; {new Date().getFullYear()} ITBD. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Footer