import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import special from "../assets/images/special.jpg";
import communication from "../assets/images/communication.png";
import experience from "../assets/images/experience.png";
import safe from "../assets/images/safe.png";
import passion from "../assets/images/passion.png";

const WhySpecial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: communication,
      title: "Communication",
      description: "Effective communication is arguably the number one skill required software."
    },
    {
      icon: experience,
      title: "Experience",
      description: "We are more experienced that allows creating a finished solution."
    },
    {
      icon: safe,
      title: "Safe & Secure",
      description: "We follow robust data security strategies will protect an organization's information."
    },
    {
      icon: passion,
      title: "Passion for Testing",
      description: "We test regularly can ensure the level of quality that encourages the diligence o find bugs"
    }
  ];

  return (
    <div className="container" ref={ref}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20  mx-auto px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={special} alt="" className="w-full rounded-lg shadow-xl" />
        </motion.div>

        <div>
          <motion.h4 
            className="text-3xl font-semibold text-[#2D7EB5]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Why Special ITBD?
          </motion.h4>
          
          <motion.p 
            className="text-lg mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We help you elevate your business and maximize revenue with
            cutting-edge technological solutions. Instead of adding unnecessary
            services that drive up costs, we focus on delivering precisely what
            your business needs for optimal growth and efficiency.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                className="flex h-44 w-full bg-blue-50 rounded-lg p-2 shadow-xl transition-all"
              >
                <div>
                  <motion.img 
                    className="h-20 w-52"
                    src={feature.icon}
                    alt={feature.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                <div className="ml-2">
                  <p className="text-xl font-semibold">{feature.title}</p>
                  <p className="mt-2">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhySpecial;