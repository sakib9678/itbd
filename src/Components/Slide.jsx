import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/images/img.png";
import slide2 from "../assets/images/laptopAcheLogo.png";
import slide3 from "../assets/images/bdcodaLogo.png";
import slide4 from "../assets/images/boiAcheLogo.png";
import slide5 from "../assets/images/kazAcheLogo.png";

const Slide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
    <div>
        <Slider {...settings} className="mt-20 ">
            
                <div><img className='w-60' src={slide1} alt="" /></div>
                <div><img className='w-60' src={slide2} alt="" /></div>
                <div><img className='w-60' src={slide3} alt="" /></div>
                <div><img className='w-60' src={slide4} alt="" /></div>
                <div><img className='w-60' src={slide5} alt="" /></div>
            
        </Slider>
    </div>
  )
}

export default Slide