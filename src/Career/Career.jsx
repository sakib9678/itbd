import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptopCode,
  FaCoffee,
  FaRocket,
  FaAward,
  FaGlobe,
  FaBrain,
  FaHandshake,
} from "react-icons/fa";

const Career = () => {
  const benefits = [
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      desc: "Join a diverse team of industry experts",
    },
    {
      icon: <FaLaptopCode />,
      title: "Innovation Hub",
      desc: "Work with cutting-edge tech stack",
    },
    {
      icon: <FaCoffee />,
      title: "Work-Life Balance",
      desc: "Flexible hours & remote options",
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      desc: "Clear advancement paths",
    },
    {
      icon: <FaAward />,
      title: "Recognition",
      desc: "Performance-based rewards",
    },
    {
      icon: <FaGlobe />,
      title: "Global Impact",
      desc: "Work with worldwide clients",
    },
    {
      icon: <FaBrain />,
      title: "Learning & Development",
      desc: "Continuous skill enhancement",
    },
    {
      icon: <FaHandshake />,
      title: "Inclusive Environment",
      desc: "Equal opportunities for all",
    },
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      experience: "5+ years",
      salary: "$90K - $130K",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hybrid",
      department: "Design",
      experience: "3+ years",
      salary: "$70K - $90K",
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Operations",
      experience: "4+ years",
      salary: "$85K - $120K",
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "On-site",
      department: "Product",
      experience: "5+ years",
      salary: "$95K - $140K",
    },
    {
      title: "Data Scientist",
      type: "Full-time",
      location: "Hybrid",
      department: "Analytics",
      experience: "3+ years",
      salary: "$80K - $115K",
    },
    {
      title: "Flutter Developer",
      type: "Contract",
      location: "Remote",
      department: "Mobile Development",
      experience: "2+ years",
      salary: "$70K - $90K",
    },
    {
      title: "Technical Lead",
      type: "Full-time",
      location: "On-site",
      department: "Engineering",
      experience: "7+ years",
      salary: "$120K - $160K",
    },
    {
      title: "QA Engineer",
      type: "Full-time",
      location: "Hybrid",
      department: "Quality Assurance",
      experience: "3+ years",
      salary: "$65K - $85K",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="text-white max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-[#2D7EB5] rounded-full text-sm font-semibold mb-6"
              >
                We're Hiring!
              </motion.span>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Build Your Future With Us
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Join a team of innovators and tech enthusiasts who are
                passionate about creating cutting-edge solutions that transform
                businesses worldwide.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <button className="bg-[#2D7EB5] text-white px-8 py-3 rounded-lg hover:bg-[#2D7EB5] transition-all transform hover:-translate-y-1">
                  View Open Positions
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section - New */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Employees" },
              { number: "50+", label: "Countries" },
              { number: "95%", label: "Retention Rate" },
              { number: "500+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-[#2D7EB5] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              Why Choose Us?
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join us and experience a workplace
              that values innovation, growth, and well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-white hover:bg-[#2D7EB5] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-4xl text-[#2D7EB5] group-hover:text-white mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Position Cards - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Open Positions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 p-8 rounded-xl hover:bg-[#2D7EB5] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-white mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90">
                      {position.department}
                    </p>
                  </div>
                  <span className="text-[#2D7EB5] group-hover:text-white font-semibold">
                    {position.salary}
                  </span>
                </div>
                <div className="flex gap-4 mb-6">
                  <span className="px-4 py-1 rounded-full text-sm bg-blue-100 text-[#2D7EB5] group-hover:bg-white/20 group-hover:text-white">
                    {position.type}
                  </span>
                  <span className="px-4 py-1 rounded-full text-sm bg-green-100 text-green-800 group-hover:bg-white/20 group-hover:text-white">
                    {position.location}
                  </span>
                  <span className="px-4 py-1 rounded-full text-sm bg-purple-100 text-purple-800 group-hover:bg-white/20 group-hover:text-white">
                    {position.experience}
                  </span>
                </div>

                <a
                  href="/career/job-description"
                  className="block w-full bg-[#2D7EB5] group-hover:bg-white group-hover:text-[#2D7EB5] text-white text-center px-6 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Apply Now →
                </a>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-20 bg-[#2D7EB5] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals to join our team.
              Send us your resume and let's explore opportunities together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2D7EB5] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Submit Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
