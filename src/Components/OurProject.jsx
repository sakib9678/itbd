import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiZoomIn, FiX } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import bdcoda from "../assets/images/bdcoda.png";
import boiAche from "../assets/images/boiAche.png";
import courierAche from "../assets/images/courierAche.png";
import laptopAche from "../assets/images/laptopAche.png";
import kazAche from "../assets/images/kazAche.png";
import eduPoribar from "../assets/images/eduPoribar.png";

const projectData = [
  {
    id: 1,
    image: bdcoda,
    to: "https://bdcoda.com/",
    title: "BDCODA",
    category: "ecommerce",
    description: "Complete digital marketplace solution",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    image: boiAche,
    to: "https://boiache.com/",
    title: "Boi Ache",
    category: "education",
    description: "Online bookstore platform",
    tech: ["Next.js", "Express", "PostgreSQL"]
  },
  {
    id: 3,
    image: eduPoribar,
    to: "https://eduporibar.com/",
    title: "Edu Poribar",
    category: "education",
    description: "Educational management system",
    tech: ["React", "Firebase", "Material-UI"]
  },
  {
    id: 4,
    image: courierAche,
    to: "https://courierache.com/",
    title: "Courier Ache",
    category: "logistics",
    description: "Courier service management",
    tech: ["Vue.js", "Node.js", "MongoDB"]
  },
  {
    id: 5,
    image: laptopAche,
    to: "https://www.laptopache.com/",
    title: "Laptop Ache",
    category: "ecommerce",
    description: "Tech retail platform",
    tech: ["React", "Redux", "Node.js"]
  },
  {
    id: 6,
    image: kazAche,
    to: "https://kazache.com/",
    title: "Kaz Ache",
    category: "services",
    description: "Service marketplace platform",
    tech: ["Next.js", "Prisma", "PostgreSQL"]
  }
];

const OurProject = () => {
  const [preview, setPreview] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      selectedFilter === 'all'
        ? projectData
        : projectData.filter(project => project.category === selectedFilter)
    );
  }, [selectedFilter]);

  const categories = ['all', 'ecommerce', 'education', 'logistics', 'services'];

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
        transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 
            group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent 
          opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 
            group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 
        transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPreview(project)}
          className="p-2 bg-white rounded-full text-blue-600 hover:bg-[#246A99]
            hover:text-white transition-all duration-300 shadow-lg"
          aria-label="Preview"
        >
          <FiZoomIn size={20} />
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={project.to}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full text-blue-600 hover:bg-[#246A99]
            hover:text-white transition-all duration-300 shadow-lg"
          aria-label="Visit website"
        >
          <FiExternalLink size={20} />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-text2 text-transparent bg-clip-text">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of successful digital solutions that have transformed businesses
              <br />
              <span className="text-[#246A99]">Innovation meets excellence</span>
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300
                ${selectedFilter === category
                  ? 'bg-[#246A99] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Preview Modal */}
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreview(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center 
              justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden 
                shadow-2xl my-8"
              >
                <div className="relative">
                  <img
                    src={preview.image}
                    alt={preview.title}
                    className="w-full h-auto cursor-zoom-in"
                    onClick={() => window.open(preview.image, '_blank')}
                  />
                  <button
                    onClick={() => setPreview(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full 
                  hover:bg-black/75 transition-colors"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{preview.title}</h3>
                  <p className="text-gray-600 mb-4">{preview.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {preview.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={preview.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D7EB5] text-white 
                      rounded-lg  transition-colors"
                  >
                    Visit Website
                    <BsArrowRight />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default OurProject;