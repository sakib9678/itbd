import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import HomeContent from "../Home/HomeContent";
import About from "../About/About";
// import AllService from "../Components/AllService";
import CompanyOverview from "../About/CompanyOverview";
import OurTeam from "../About/OurTeam";
import WebApplication from "../Components/WebApplication";
import MobileApplication from "../Components/MobileApplication";
import OpensourceDevelopment from "../Components/OpensourceDevelopment";
import FrontendDevelopment from "../Components/FrontendDevelopment";
import Blog from "../Blog";
import SchoolManagementSystem from "../Project.jsx/SchoolManagementSystem";
import ECommerce from "../Project.jsx/ECommerce";
import PharmecySoftware from "../Project.jsx/PharmecySoftware";
import POS from "../Project.jsx/POS";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Career from "../Career/Career";
import ERP_Software from "../Project.jsx/ERP_Software";
import CourierManagemen from "../Project.jsx/CourierManagemen";
import TailorManagement from "../Project.jsx/TailorManagement";
import PublicationWebsite from "../Project.jsx/PublicationWebsite";





const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen"></div>
      }
    >
      <Routes>
        <Route element={<Home/>} path="/">
          <Route element={<HomeContent />} path="/" />
          <Route element={<About />} path="about" />
          <Route element={<CompanyOverview />} path="/about/company-overview" />
          <Route element={<OurTeam />} path="/about/our-team" />
          <Route element={<Services />} path="/services" />
          <Route element={<WebApplication />} path="/services/web-application" />
          <Route element={<MobileApplication />} path="/services/mobile-application" />
          <Route element={<OpensourceDevelopment />} path="/services/opensource-development" />
          <Route element={<FrontendDevelopment />} path="/services/frontend-development" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<SchoolManagementSystem />} path="/project/school-management" />
          <Route element={<ECommerce />} path="/project/e-commerce-website" />
          <Route element={<PharmecySoftware />} path="/project/pharmacy-software" />
          <Route element={<POS />} path="/project/pos-management" />
          <Route element={<ERP_Software />} path="/project/erp-software" />
          <Route element={<CourierManagemen />} path="/project/courier-management" />
          <Route element={<TailorManagement />} path="/project/tailor-management" />
          <Route element={<PublicationWebsite />} path="/project/publication-website" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Career />} path="/career" />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;