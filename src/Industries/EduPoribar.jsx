import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaLaptopCode,
  FaBook,
  FaHeadset,
  FaCertificate,
  FaGlobeAmericas,
  FaUsers,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import heroImage from "../assets/images/online-learning.jpg";
import studentImage from "../assets/images/virtual-class.jpeg";
import workspaceImage from "../assets/images/tech-workspace.jpeg";

const EduPoribar = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  const features = [
    {
      icon: <FaVideo className="text-4xl text-[#2D7EB5]" />,
      title: "Live Online Classes",
      description: "Interactive sessions with real-time instructor guidance",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-[#2D7EB5]" />,
      title: "Hands-on Projects",
      description: "Build real-world projects with practical applications",
    },
    {
      icon: <FaBook className="text-4xl text-[#2D7EB5]" />,
      title: "Digital Library",
      description: "Access to vast collection of e-books and resources",
    },
    {
      icon: <FaHeadset className="text-4xl text-[#2D7EB5]" />,
      title: "24/7 Support",
      description: "Round-the-clock technical and academic assistance",
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-[#2D7EB5]" />,
      title: "Global Community",
      description: "Connect and learn with students worldwide",
    },
    {
      icon: <FaCertificate className="text-4xl text-[#2D7EB5]" />,
      title: "Certification",
      description: "Industry-recognized online certificates",
    },
  ];

  const stats = [
    {
      number: "5K+",
      label: "Active Students",
      icon: <FaUsers className="text-3xl text-[#2D7EB5]" />,
    },
    {
      number: "100+",
      label: "Video Lessons",
      icon: <FaVideo className="text-3xl text-[#2D7EB5]" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <FaStar className="text-3xl text-[#2D7EB5]" />,
    },
    {
      number: "24/7",
      label: "Expert Support",
      icon: <FaHeadset className="text-3xl text-[#2D7EB5]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Online learning experience"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#2D7EB5]/40" />
        </div>
        <motion.div
          className="relative container mx-auto px-6 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-2xl space-y-8">
            <motion.div className="space-y-6" {...fadeIn}>
              <span className="inline-block bg-[#2D7EB5]/20 text-blue-200 text-lg font-semibold px-6 py-2 rounded-full border border-[#2D7EB5]/30">
                Transform Your Future with EduPoribar
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Your Gateway to Digital Learning Excellence
              </h1>
              <p className="text-xl text-white  leading-relaxed">
                Access world-class online education with live classes,
                interactive projects, and expert mentorship to accelerate your
                career growth. <br /> | Sister Concern of ITBD
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://eduporibar.com/" target="_blank" className="group bg-white text-[#2D7EB5] px-8 py-4 rounded-full font-semibold  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span className="flex items-center gap-2">
                    Start Learning
                    <FaRocket className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6  relative z-10">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-[#2D7EB5]/10 p-4 rounded-full group-hover:bg-[#2D7EB5]/20 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-[#2D7EB5] group-hover:scale-110 transition-transform">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-32">
        <motion.div
          className="text-center max-w-3xl mx-auto my-16"
          {...fadeInScale}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive learning features designed to help you achieve your
            goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#2D7EB5]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6  group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Experience Section */}
      <div className="bg-[#2D7EB5]/5 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            {...fadeIn}
          >
            <div className="relative">
              <img
                src={studentImage}
                alt="Virtual classroom experience"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2D7EB5] text-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm font-medium">Success Rate</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Transform Your Learning Experience
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience immersive learning with live classes, interactive
                sessions, and real-time collaboration with peers worldwide.
              </p>
              <div className="space-y-6">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-[#2D7EB5]/10 p-4 rounded-xl  group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="relative py-24 bg-gradient-to-r from-[#2D7EB5] to-[#246a99]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-0">
          <img
            src={workspaceImage}
            alt="Modern tech workspace"
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold text-white mb-4">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Join our global community of 50,000+ learners and transform your
              career with cutting-edge online courses.
            </p>
            <motion.button
              className="bg-white text-[#2D7EB5] px-12 py-5 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EduPoribar;
