import React from "react";
import { motion } from "framer-motion";

const serviceData = [
  {
    title: "Web Development",
    description:
      "Custom web applications, responsive websites, and e-commerce solutions built with modern technologies.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
    icon: "💻",
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS, Azure, and Google Cloud implementation, migration, and management services.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    icon: "☁️",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, penetration testing, and security infrastructure setup.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    icon: "🔒",
  },
  {
    title: "Data Analytics",
    description:
      "Big data solutions, business intelligence, and advanced analytics services.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    icon: "📊",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic IT planning, digital transformation, and technology consulting services.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    icon: "💡",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile app development for iOS and Android.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    icon: "📱",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#2D7EB5] font-semibold text-xl mb-4"
            >
              Welcome to ITBD Services
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into
              <br />
              <span className="text-[#2D7EB5]">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Delivering cutting-edge IT solutions that empower businesses to
              thrive in the digital era.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="bg-[#2D7EB5] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-current text-white" viewBox="0 0 1440 120">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-bold mb-6 text-[#2D7EB5]"
            >
              Our Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <p className="text-xl text-gray-600 max-w-3xl">
                Comprehensive IT Solutions tailored to elevate your business
                performance and drive innovation
              </p>
              <div className="w-20 h-1 bg-[#2D7EB5] mt-6"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r w-full h-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg border border-gray-200">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2D7EB5] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-6 rounded-xl bg-[#2D7EB5] text-white font-semibold 
                               shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
