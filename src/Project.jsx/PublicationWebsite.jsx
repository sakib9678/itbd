import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaShoppingCart,
  FaCloud,
  FaChartLine,
  FaMobile,
} from "react-icons/fa";

const featuredProjects = [
  {
    id: 1,
    title: "Academic Journal Platform",
    client: "University Press",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3",
    category: "Academic Publishing",
    description: "Custom journal management system with peer review workflow"
  },
  {
    id: 2,
    title: "Digital Magazine Suite",
    client: "Media Group Ltd",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3",
    category: "Digital Publishing",
    description: "Interactive digital magazine platform with subscription system"
  },
  {
    id: 3,
    title: "Publisher CMS Platform",
    client: "Book House Inc",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3",
    category: "Content Management",
    description: "Enterprise-level publishing content management system"
  },
];

const services = [
  {
    icon: <FaCode />,
    title: "Custom CMS Development",
    description: "Tailored content management systems for publishers of all sizes."
  },
  {
    icon: <FaDatabase />,
    title: "Database Architecture",
    description: "Scalable database solutions for content management and storage."
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Integration",
    description: "Secure payment gateways and subscription management systems."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Infrastructure",
    description: "Robust cloud hosting with global CDN support."
  },
  {
    icon: <FaChartLine />,
    title: "Analytics Solutions",
    description: "Advanced analytics and reporting systems for publishers."
  },
  {
    icon: <FaMobile />,
    title: "Mobile Development",
    description: "Cross-platform mobile solutions for digital publications."
  }
];

const PublicationWebsite = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3')"
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl font-bold text-white mb-6"
            >
              Transform Your Publishing Business with Custom Web Solutions
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-[#2D7EB5] mb-8"
            >
              Expert IT services for modern digital publishing platforms
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#2D7EB5] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2D7EB5] transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D7EB5] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical solutions for digital publishers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#2D7EB5] mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="bg-[#2D7EB5] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Digitize Your Publishing?</h3>
          <p className="mb-8 text-xl">
            Let's build your next-generation publication platform together
          </p>
          <button className="bg-white text-[#2D7EB5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
            Get Free Technical Consultation
          </button>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="text-[#2D7EB5] text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-[#2D7EB5] mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ProjectCard = ({ title, client, image, category, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="text-sm text-[#2D7EB5] font-semibold mb-2">{category}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-gray-500">Client: {client}</div>
    </div>
  </motion.div>
);

export default PublicationWebsite;