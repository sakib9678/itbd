import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaTools,
  FaChartBar,
  FaBookReader,
} from "react-icons/fa";

const SchoolManagementSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-center text-white max-w-2xl flex flex-col items-center justify-center  mx-auto">
              <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="text-6xl font-bold mb-6 leading-tight"
              >
                Modern School Management System
              </motion.h1>
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="text-2xl text-blue-100"
              >
                A comprehensive solution for educational institutions to
                streamline operations and enhance learning experiences
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-3 bg-white text-[#2D7EB5] rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-[#2D7EB5] mb-4 p-5"
        >
          Key Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Discover the powerful tools and features that make our system stand
          out
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUserGraduate />}
            title="Student Management"
            description="Complete student lifecycle management including admissions, attendance tracking, and performance analytics."
          />
          <FeatureCard
            icon={<FaChalkboardTeacher />}
            title="Teacher Portal"
            description="Comprehensive tools for educators to manage courses, assignments, and student evaluations."
          />
          <FeatureCard
            icon={<FaCalendarAlt />}
            title="Schedule Management"
            description="Dynamic scheduling system for classes, events, and academic calendar management."
          />
          <FeatureCard
            icon={<FaTools />}
            title="Administrative Tools"
            description="Powerful administrative features for resource management and institutional operations."
          />
          <FeatureCard
            icon={<FaChartBar />}
            title="Analytics Dashboard"
            description="Real-time insights and reports on academic performance and institutional metrics."
          />
          <FeatureCard
            icon={<FaBookReader />}
            title="Learning Resources"
            description="Digital library and resource management for enhanced learning experience."
          />
        </div>
      </div>

      {/* Project Details Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-[#2D7EB5] mb-6"
          >
            Project Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            Transform your educational institution with our comprehensive
            solution
          </motion.p>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose lg:prose-xl"
            >
              <p className="text-gray-700 mb-6 text-lg">
                Our School Management System is designed to revolutionize
                educational administration through cutting-edge technology and
                user-friendly interfaces. Built with React and modern web
                technologies, it offers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Intuitive dashboard for all user roles",
                  "Real-time attendance and grade tracking",
                  "Automated timetable generation",
                  "Integrated communication system",
                  "Mobile-responsive design",
                  "Advanced security features",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                  >
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#2D7EB5] text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-blue-200">
              Contact us today to transform your educational institution
            </p>
            <button className="bg-white text-[#2D7EB5] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center mb-6">
        <div className="text-4xl text-blue-600 bg-blue-50 p-4 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#2D7EB5]">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default SchoolManagementSystem;
