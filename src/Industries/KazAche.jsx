import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import KazAcheImage from '../assets/images/KazAche..png';
import { 
  FaSearch, FaCode, FaDesktop, FaPencilAlt, FaCamera, 
  FaArrowRight, FaShieldAlt, FaClock, FaGlobe, 
  FaUsers, FaCheckCircle, FaGlobeAmericas 
} from 'react-icons/fa';

const KazAche = () => {
  const controls = useAnimation();
  
  const categories = [
    { icon: <FaCode />, title: 'Development', count: '1.2k+ Jobs', color: 'from-[#2D7EB5] to-[#1C4F72]' },
    { icon: <FaDesktop />, title: 'Design', count: '800+ Jobs', color: 'from-[#2D7EB5] to-[#4BA3E3]' },
    { icon: <FaPencilAlt />, title: 'Writing', count: '500+ Jobs', color: 'from-[#1C4F72] to-[#2D7EB5]' },
    { icon: <FaCamera />, title: 'Photography', count: '300+ Jobs', color: 'from-[#4BA3E3] to-[#2D7EB5]' },
  ];

  const features = [
    { icon: <FaShieldAlt />, title: 'Secure Platform' },
    { icon: <FaClock />, title: 'Fast Delivery' },
    { icon: <FaGlobe />, title: 'Global Reach' }
  ];

  const statistics = [
    { icon: <FaUsers />, value: 1000, suffix: '+', label: 'Active Users', color: 'from-[#2D7EB5] to-[#1C4F72]' },
    { icon: <FaCheckCircle />, value: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-[#EB353C] to-[#FF6B6B]' },
    { icon: <FaGlobeAmericas />, value: 10, suffix: '+', label: 'Countries Reached', color: 'from-[#4BA3E3] to-[#2D7EB5]' }
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#E8F4FB]">
      {/* Hero Section */}
      <div className='text-center mt-10'>
        <h1 className='text-6xl font-bold'><span className='text-[#EB353C]'>Kaz</span> Ache</h1>
      </div>
      <div className="pt-16 pb-16 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-[#E8F4FB] text-[#2D7EB5] rounded-full text-sm font-medium mb-6">
                  Powered by ITBD Group
                </span>
                <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Gateway to
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D7EB5] to-[#1C4F72]">
                    {" "}Global Talent
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with elite freelancers and transform your business vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://kazache.com/'
                    target='_blank'
                    className="bg-gradient-to-r from-[#2D7EB5] to-[#1C4F72] text-white px-8 py-4 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    Start Hiring <FaArrowRight />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                   href='https://kazache.com/'
                   target='_blank'
                    className="bg-white border-2 border-[#2D7EB5] text-[#2D7EB5] px-8 py-4 rounded-xl hover:shadow-lg transition"
                  >
                    Become a Freelancer
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="relative z-10"
                >
                  <img 
                    src={KazAcheImage}
                    alt="Freelancer"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#2D7EB5] to-[#1C4F72] w-full h-full rounded-2xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <div className="w-96 h-96 rounded-full bg-[#2D7EB5] blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10">
          <div className="w-96 h-96 rounded-full bg-[#4BA3E3] blur-3xl"></div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8F4FB] to-white opacity-50 transform -skew-y-6"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statistics.map((stat, index) => {
            const [ref, inView] = useInView({
              threshold: 0.3,
              triggerOnce: true
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}`}></div>
                <div className="text-center">
                  <div className="text-4xl mb-4 text-[#2D7EB5]">{stat.icon}</div>
                  <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#2D7EB5] to-[#1C4F72] bg-clip-text text-transparent">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    )}
                  </h3>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-r from-[#E8F4FB] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-4 text-gray-600 group-hover:text-[#2D7EB5] transition">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.title}</h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl mb-4 text-[#2D7EB5]">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KazAche;