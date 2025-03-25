
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
import Hero from "./Hero";

const HomeContent = () => {
  return (
    <>
      <Hero />
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
