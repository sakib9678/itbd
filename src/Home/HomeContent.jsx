import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProject from "../Components/OurProject";
import Testimonial from "../Components/Testimonial";
import OthersPage from "../Components/OthersPage";
import UsesTenchnology from "../Components/UsesTenchnology";
import Services from "./service";
import WhySpecial from "../About/WhySpecial";
import SoftwarePricing from "../Components/SoftwarePricing";
import OurBlog from "../Components/OurBlog";

const HomeContent = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    autuplay: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    waitForAnimate: false,
  };
  const AnimatedText = ({ text, startDelay = 0 }) => {
    return (
      <span className="word-wrapper">
        {text.split(" ").map((word, index) => (
          <span
            key={index}
            className="word-animation text-[#056BB1]"
            style={{ animationDelay: `${startDelay + index * 0.2}s` }}
          >
            {word}
          </span>
        ))}
      </span>
    );
  };
  return (
    <>
      <div className="h-[80vh] w-full overflow-hidden">
        <Slider className="h-full">
          <section className="bg-cover bg-no-repeat bg-center h-full bg1">
            <div className="md:py-0 py-10  flex items-center bg-[#0000008e] bg-opacity-50">
              <div className="container ">
                <div className="w-full md:w-[50%]">
                  <h3 className="title relative bounce md:text-2xl text-[#fafafa] pl-12 ml-1 font-medium wave-text">
                    Welcome to ITBD Solutions
                  </h3>
                  <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#fafafa] font-semibold tracking-[-0.5px] leading-[1.1] mt-3">
                    <AnimatedText text="Transforming Ideas into Digital Reality with Innovative Solutions" />
                  </h1>
                  <p className="text-[#fafafa] text-base md:text-lg mt-3 slide-from-right">
                    Your trusted partner for comprehensive digital
                    transformation. We deliver custom solutions that drive
                    growth and efficiency in today's competitive market.
                  </p>
                  <div className="mt-5">
                    <button>
                      <Link
                        to="/about/company-overview"
                        className="bg-[#0471BA] text-white text-base font-medium px-5 py-3 rounded-md hover:bg-[#313131] duration-300 w-auto flex items-center gap-2"
                      >
                        <span>About Us</span>
                        <span>
                          <BsArrowRightCircleFill />
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-cover bg-no-repeat bg-center h-full bg2">
            <div className="md:py-0 py-10 flex items-center  bg-[#0000008e] bg-opacity-50">
              <div className="flex justify-end">
                <div className="w-full md:w-[50%] ">
                  <h3 className="title relative md:text-2xl text-[#fafafa] pl-12 ml-1 font-medium wave-text">
                    Get Business Service
                  </h3>
                  <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#fafafa] font-semibold tracking-[-0.5px] leading-[1.1] mt-3">
                    <AnimatedText text="Building a Better Future with Technology, Education & Business Support" />
                  </h1>
                  <p className="text-[#fafafa] text-base md:text-lg mt-3 slide-from-right">
                    Providing cutting-edge solutions in website development, app
                    creation, and e-commerce to empower businesses in the
                    evolving digital world.
                  </p>
                  <div className="mt-5">
                    <button>
                      <Link
                        to="/about/company-overview"
                        className="bg-[#0471BA] text-white text-base font-medium px-5 py-3 rounded-md hover:bg-[#313131] duration-300 w-auto flex items-center gap-2"
                      >
                        <span>About Us</span>
                        <span>
                          <BsArrowRightCircleFill />
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-cover bg-no-repeat bg-center h-full bg3">
            <div className="md:py-0 py-10 flex items-center bg-[#0000008e] bg-opacity-75">
              <div className="container">
                <div className="w-full md:w-[50%] ">
                  <h3 className="title relative md:text-2xl text-[#fafafa] pl-12 ml-1 font-medium wave-text">
                    Expert Technology Solutions
                  </h3>
                  <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#fafafa] font-semibold tracking-[-0.5px] leading-[1.1] mt-3">
                    <AnimatedText text="Empowering Your Business Through Digital Excellence" />
                  </h1>
                  <p className="text-[#fafafa] text-base md:text-lg mt-3 slide-from-right">
                    From custom web applications to mobile solutions, we help
                    businesses leverage technology to achieve their strategic
                    goals and stay ahead of the competition.
                  </p>
                  <div className="mt-5">
                    <button>
                      <Link
                        to="/about/company-overview"
                        className="bg-[#0471BA] text-white text-base font-medium px-5 py-3 rounded-md hover:bg-[#313131] duration-300 w-auto flex items-center gap-2"
                      >
                        <span>About Us</span>
                        <span>
                          <BsArrowRightCircleFill />
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </div>
      <WhySpecial />
      <Services />
      <SoftwarePricing />
      <UsesTenchnology />
      <OurProject />
      <Testimonial />
      <OthersPage />
      <OurBlog />
    </>
  );
};

export default HomeContent;
