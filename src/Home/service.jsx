import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "../Components/Layout/Image";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import cardData from ".././mock-data/card.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Services = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div
        className="container relative py-20 overflow-hidden  "
        ref={sectionRef}
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-[1170px] relative mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.span
                  className="inline-block px-4 py-2 bg-[#2D7EB5]/10 text-[#2D7EB5] rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.2 }}
                >
                  Our Services
                </motion.span>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                  We believe innovation is the key to build a
                  <span className="text-[#2D7EB5]"> better future</span>
                </h3>
                <p className="text-gray-600 text-lg">
                  Develops and promotes end-to-end solutions, execution agility,
                  and depth of specialty.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-14 w-14 bg-[#2D7EB5] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#246a99] transition-all duration-300"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <IoMdArrowBack size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-14 w-14 bg-[#2D7EB5] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#246a99] transition-all duration-300"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <IoMdArrowForward size={24} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <Slider ref={sliderRef} {...settings}>
            {cardData?.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={service.to}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="  my-8">
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                      <div className="absolute -top-8 left-8">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-16 h-16 rounded-2xl bg-[${service.bg}] flex items-center justify-center shadow-lg`}
                        >
                          <Image src={service.icon} className="w-10 h-10" />
                        </motion.div>
                      </div>

                      <div className="pt-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#2D7EB5] transition-colors">
                          {service.serviceName}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {service.serviceDetails}
                        </p>

                        <motion.div
                          className="flex items-center text-[#2D7EB5] font-medium"
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <span className="h-[2px] w-6 bg-[#2D7EB5] mr-3" />
                          Learn More
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
