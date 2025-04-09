import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLaptop, FaDesktop, FaTools, FaArrowRight, FaStar, FaShieldAlt, FaClock, FaHeadset } from 'react-icons/fa';

const LaptopAche = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const features = [
    {
      icon: FaShieldAlt,
      title: "Premium Quality",
      description: "All our products are carefully selected and quality tested"
    },
    {
      icon: FaClock,
      title: "Fast Service",
      description: "Quick turnaround time on all repairs and installations"
    },
    {
      icon: FaHeadset,
      title: "Expert Support",
      description: "24/7 technical support from our certified team"
    }
  ];
  
  const services = [
    {
      icon: FaLaptop,
      title: "Premium Laptops",
      description: "Ultra-powerful laptops with cutting-edge features for professionals",
      rating: "4.9"
    },
    {
      icon: FaDesktop,
      title: "Custom Workstations",
      description: "High-performance desktop solutions built for your specific needs",
      rating: "4.8"
    },
    {
      icon: FaTools,
      title: "Expert Services",
      description: "Professional support and maintenance by certified technicians",
      rating: "4.9"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div 
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="relative overflow-hidden bg-gradient-to-b from-[#2D7EB5]/10 to-white pt-20 pb-32 bg4"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0"
        />
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <motion.h1 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-6xl font-bold text-white mb-6"
            >
              Laptop Ache
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            >
              Your trusted partner for premium computing solutions and expert technical services <br /> | Sister Concern of ITBD
            </motion.p>
            <motion.div
            
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex justify-center gap-6"
            >
              <a href='https://laptopache.com/' target='_blank' className="px-8 py-4 bg-[#2D7EB5] text-white rounded-lg shadow-lg hover:bg-[#246A99] transition-all flex items-center gap-2">
                Visit Site <FaArrowRight className="ml-2" />
              </a>
              
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div 
                  className="w-12 h-12 bg-[#2D7EB5]/10 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-2xl text-[#2D7EB5]" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="p-8">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-4xl text-[#2D7EB5] mb-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <motion.div 
                      className="flex items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaStar className="text-yellow-400" />
                      <span className="text-gray-600">{service.rating}</span>
                    </motion.div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-[#2D7EB5] hover:text-[#246A99] transition-colors flex items-center gap-2"
                    >
                      Learn More <FaArrowRight />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-[#2D7EB5] py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-0"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Tech?</h2>
              <p className="text-white/90 text-lg">
                Visit our showroom to experience premium computing solutions firsthand
              </p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#2D7EB5] rounded-lg shadow-lg hover:bg-gray-50 transition-all font-semibold"
            >
              Book a Visit
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LaptopAche;