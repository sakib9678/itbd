import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "../Components/Layout/Image";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import cardData from ".././mock-data/card.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

const Services = () => {
  const sliderRef = useRef(null);
  const { ref, inView } = useInView();

  const handleBackArrow = () => {
    sliderRef.current.slickPrev();
  };

  const handleForwardArrow = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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

  return (
    <section className="container pt-[80px] pb-0">
      <div className="max-w-[1320px] ml-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <div ref={ref} className="max-w-[1170px] relative">
            <div className="flex gap-[30px] flex-wrap xl:px-0 px-4">
              <h3 className="text-[#2D7EB5] md:text-[36px] text-[28px] font-bold lg:w-[600px] w-auto lg:text-left text-center">
                We believe innovation is the key to build a better future for our people.
              </h3>
              <p className="w-[310px] text-[#8C8B90] font-normal lg:text-left text-center lg:m-0 m-auto">
                develops and promotes end-to-end solutions, execution agility, and depth of specialty.
              </p>
              <div className="flex gap-[150px] md:absolute relative bottom-6 right-6 m-auto">
                <div className="cursor-pointer h-12 w-12 bg-[#2D7EB5] text-white rounded-full flex items-center justify-center"> 
                <IoMdArrowBack className="" size={"30px"} onClick={handleBackArrow} />
                </div>
                <div className="cursor-pointer h-12 w-12 bg-[#2D7EB5] text-white rounded-full flex items-center justify-center">
                <IoMdArrowForward size={"30px"} onClick={handleForwardArrow} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Slider ref={sliderRef} {...settings}>
          {cardData &&
            cardData?.length > 0 &&
            cardData.map((value, index) => {
              return (
                <NavLink to={value.to} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} key={index}>
                  <div className="slider-item mt-10 p-10">
                    <div className=" shadow-lg h-full group rounded-[20px] px-[30px] pt-[40px] pb-[15px] md:w-[340px] md:mx-[20px]">
                      <Image
                        className={`inline-block bg-[${value.bg}] p-[25px] rounded-full duration-300 group-hover:opacity-0 group-hover:mt-[-40px]`}
                        src={value.icon}
                      />
                      <h2 className="text-[28px] font-bold text-[#2D7EB5] mb-5 md:w-[280px]">
                        {value.serviceName}
                      </h2>
                      <p className="text-base text-[#808291] mb-[30px] duration-[1000ms]">
                        {value.serviceDetails}
                      </p>
                      <div className="flex opacity-0 items-center duration-[800ms] group-hover:opacity-100 group-hover:mt-[-15px]">
                        <span className="inline-block bg-[#2D7EB5] h-[2px] w-[20px]"></span>
                        <a href={value.to} className="text-[#2D7EB5] inline-block ml-[10px]">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;