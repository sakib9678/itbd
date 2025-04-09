import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import BDCODAImage from '../assets/images/BDCODA..png';
import {
  FaHandHoldingUsd, FaShoppingCart, FaCertificate,
  FaShieldAlt, FaMoneyCheckAlt, FaPercent, FaHandshake,
  FaChartLine, FaUsers, FaClock, FaMobileAlt, FaBuilding
} from 'react-icons/fa';

const BDCODA = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const achievements = [
    {
      icon: <FaUsers />,
      value: 100,
      suffix: '+',
      title: 'Active Users',
      description: 'Trust BDCODA for their financial needs'
    },
    {
      icon: <FaHandshake />,
      value: 500,
      suffix: '+',
      title: 'Total Transactions',
      description: 'Successfully processed'
    },
    {
      icon: <FaBuilding />,
      value: 10,
      suffix: '+',
      title: 'Business Partners',
      description: 'Across Bangladesh'
    }
  ];

  const highlights = [
    {
      icon: <FaHandHoldingUsd />,
      title: 'Halal Finance Platform',
      description: 'A revolutionary Shariah-compliant digital financing solution',
      color: 'from-[#2D7EB5] to-[#1C4F72]'
    },
    {
      icon: <FaShieldAlt />,
      title: 'ITBD Sister Concern',
      description: 'Backed by the trusted ITBD Group technology infrastructure',
      color: 'from-[#2D7EB5] to-[#4BA3E3]'
    },
    {
      icon: <FaCertificate />,
      title: 'Islamic Banking',
      description: 'Fully compliant with Islamic banking principles',
      color: 'from-[#1C4F72] to-[#2D7EB5]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#E8F4FB]">
      {/* Header Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <div className="w-96 h-96 rounded-full bg-[#2D7EB5] blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-[#E8F4FB] text-[#2D7EB5] rounded-full text-sm font-medium mb-6">
                An ITBD Group Company
              </span>
              <h1 className="text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D7EB5] to-[#1C4F72]">
                  BDCODA
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bangladesh's Premier Halal Fintech Platform | Empowering Businesses with Shariah-Compliant Financial Solutions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-[#2D7EB5]">About BDCODA</h2>
            <p className="text-lg text-gray-600">
              BDCODA, a sister concern of Ibrahim Tech Bangladesh (ITBD), revolutionizes the financial landscape by providing Shariah-compliant digital financing solutions. We bridge the gap between traditional Islamic banking and modern financial technology.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-[#2D7EB5]">Mission</h4>
                <p className="text-gray-600">To provide accessible Halal financial services through technology</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-[#2D7EB5]">Vision</h4>
                <p className="text-gray-600">Leading the digital transformation of Islamic finance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={BDCODAImage}
              alt="BDCODA Platform Interface"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#2D7EB5] to-[#1C4F72] rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Highlights Section */}
      <div ref={ref} className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-[#E8F4FB] hover:border-[#2D7EB5] transition-colors"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-3xl mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2D7EB5]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0.03 }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #2D7EB5 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#2D7EB5] mb-16"
          >
            Our Milestones
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white to-[#F8FBFD] rounded-2xl p-8 border-2 border-[#E8F4FB] shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7EB5] to-[#1C4F72] rounded-t-2xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-6 text-[#2D7EB5]"
                      animate={{ rotateY: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      {achievement.icon}
                    </motion.div>

                    <motion.div
                      className="text-5xl font-bold mb-4 text-[#1C4F72]"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <CountUp
                        end={achievement.value}
                        suffix={achievement.suffix}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </motion.div>

                    <h3 className="text-2xl font-semibold mb-3 text-[#2D7EB5]">
                      {achievement.title}
                    </h3>

                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Visit Website CTA */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-[#2D7EB5] to-[#1C4F72] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Experience BDCODA</h2>
          <p className="text-xl mb-8">Visit our platform to explore Shariah-compliant financial solutions</p>
          <motion.a
            href="https://bdcoda.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#2D7EB5] px-8 py-4 rounded-xl shadow-lg hover:bg-[#E8F4FB] transition-colors"
          >
            Visit Website
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default BDCODA;