import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import heroVideo from "../assets/video/hero-video.mp4";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      badge: "Welcome to ITBD Solutions",
      titleStart: "Innovation",
      titleEnd: "Digital Excellence",
      typingWords: ["Technology", "Innovation", "Excellence"],
      description: "Transforming businesses through cutting-edge technology solutions",
      stats: ["15+ Years", "500+ Projects", "98% Satisfaction"]
    },
    {
      badge: "Digital Transformation",
      titleStart: "Building",
      titleEnd: "Future Solutions",
      typingWords: ["Modern", "Scalable", "Reliable"],
      description: "Expert development teams creating innovative digital experiences",
      stats: ["24/7 Support", "50+ Experts", "Global Reach"]
    },
    {
      badge: "Tech Excellence",
      titleStart: "Empowering",
      titleEnd: "Your Business",
      typingWords: ["Web Apps", "Mobile Apps", "Cloud Solutions"],
      description: "Strategic technology solutions for modern enterprises",
      stats: ["100+ Clients", "10+ Industries", "5★ Rating"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="relative h-screen md:h-[90vh] w-full overflow-hidden bg-[#100F10]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0672B8]/20 via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#100F10]/90 z-10" />

      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#100F10]/95 via-[#100F10]/80 to-transparent z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation
          loop
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full container mx-auto px-4">
                <div className="flex items-center h-full">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={`content-${index}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="max-w-4xl"
                      >
                        {/* Animated Line */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100px" }}
                          className="h-1 bg-gradient-to-r from-[#0672B8] to-blue-400 mb-8"
                          transition={{ duration: 0.8 }}
                        />

                        {/* Badge */}
                        <motion.div
                          variants={itemVariants}
                          className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
                                   bg-[#0672B8]/10 border border-[#0672B8]/20 backdrop-blur-sm mb-8"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#0672B8] animate-pulse" />
                          <span className="text-[#0672B8] text-sm font-medium">{slide.badge}</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                          variants={itemVariants}
                          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
                        >
                          <span className="text-[#0672B8]">{slide.titleStart}</span> {slide.titleEnd}
                          <div className="h-20">
                            <TypeAnimation
                              sequence={slide.typingWords.map(word => [word, 2000]).flat()}
                              wrapper="span"
                              speed={50}
                              repeat={Infinity}
                              className="block text-4xl md:text-5xl text-[#0672B8]/80"
                            />
                          </div>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          variants={itemVariants}
                          className="text-xl text-gray-300 mb-12 max-w-2xl"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTA Section */}
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-wrap items-center gap-8"
                        >
                          <Link
                            to="/contact"
                            className="group relative px-8 py-4 bg-[#0672B8] text-white rounded-lg 
                                     overflow-hidden shadow-lg shadow-[#0672B8]/20 hover:shadow-[#0672B8]/40 
                                     transition-all duration-300"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Get Started
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                <FiArrowRight className="text-xl" />
                              </motion.span>
                            </span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
                              initial={{ x: "100%" }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>

                          {/* Stats */}
                          <div className="flex gap-8">
                            {slide.stats.map((stat, i) => (
                              <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                              >
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.5 + (i * 0.1) }}
                                  className="text-[#0672B8] font-bold text-2xl mb-1"
                                >
                                  {stat}
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
          className="absolute top-10 md:top-20 right-10 md:right-20 z-10 w-28 md:w-32 h-28 md:h-32 rounded-full 
                     bg-gradient-to-br from-[#0672B8]/20 to-transparent 
                     backdrop-blur-sm border border-[#0672B8]/20"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-40 right-40 z-10 w-24 h-24 rounded-2xl 
                     bg-gradient-to-tr from-[#0672B8]/10 to-transparent 
                     backdrop-blur-sm border border-[#0672B8]/10"
        />

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                backgroundColor: i === activeIndex ? '#0672B8' : 'rgba(6, 114, 184, 0.2)'
              }}
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;