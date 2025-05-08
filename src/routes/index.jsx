import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import HomeContent from "../Home/HomeContent";
import About from "../About/About";
import CompanyOverview from "../About/CompanyOverview";
import OurTeam from "../About/OurTeam";
import WebApplication from "../Components/WebApplication";
import MobileApplication from "../Components/MobileApplication";
import OpensourceDevelopment from "../Components/OpensourceDevelopment";
import FrontendDevelopment from "../Components/FrontendDevelopment";
import Blog from "../Blog/Blog";
import SchoolManagementSystem from "../Project/SchoolManagementSystem";
import ECommerce from "../Project/ECommerce";
import PharmecySoftware from "../Project/PharmecySoftware";
import POS from "../Project/POS";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Career from "../Career/Career";
import ERP_Software from "../Project/ERP_Software";
import CourierManagemen from "../Project/CourierManagemen";
import TailorManagement from "../Project/TailorManagement";
import PublicationWebsite from "../Project/PublicationWebsite";
import BoiAche from "../Industries/BoiAche";
import EduPoribar from "../Industries/EduPoribar";
import BDCODA from "../Industries/BDCODA";
import LaptopAche from "../Industries/LaptopAche";
import CourierAche from "../Industries/CourierAche";
import KazAche from "../Industries/KazAche";
import JobDescription from "../Career/JobDescription";
import JobApplicationForm from "../Career/JobApplicationForm";
import BlogPost1 from "../Blog/BlogPost1";
import BlogPost2 from "../Blog/BlogPost2";
import BlogPost3 from "../Blog/BlogPost3";
import BlogPost4 from "../Blog/BlogPost4";
import Affiliate from "../Home/Affiliate/Affiliate";
import AffiliatelogIn from "../Home/Affiliate/AffiliatelogIn";
import AffiliateSignUp from "../Home/Affiliate/AffiliateSignUp";
import AffiliateDashboard from "../Home/Affiliate/AffiliateDashboard";
import AffiliateEditProfile from "../Home/Affiliate/AffiliateEditProfile";
import AuthRoute from "../AuthRoute";
import ProtectedRoute from "../ProtectedRoute";

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen"></div>
      }
    >
      <Routes>
        <Route element={<Home />} path="/">
          <Route element={<HomeContent />} path="/" />
          <Route element={<About />} path="about" />
          <Route element={<CompanyOverview />} path="/about/company-overview" />
          <Route element={<OurTeam />} path="/about/our-team" />
          <Route element={<Services />} path="/services" />
          <Route
            element={<WebApplication />}
            path="/services/web-application"
          />
          <Route
            element={<MobileApplication />}
            path="/services/mobile-application"
          />
          <Route
            element={<OpensourceDevelopment />}
            path="/services/opensource-development"
          />
          <Route
            element={<FrontendDevelopment />}
            path="/services/frontend-development"
          />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogPost1 />} path="/blog/blog-post-1" />
          <Route element={<BlogPost2 />} path="/blog/blog-post-2" />
          <Route element={<BlogPost3 />} path="/blog/blog-post-3" />
          <Route element={<BlogPost4 />} path="/blog/blog-post-4" />

          <Route
            element={<SchoolManagementSystem />}
            path="/project/school-management"
          />
          <Route element={<ECommerce />} path="/project/e-commerce-website" />
          <Route
            element={<PharmecySoftware />}
            path="/project/pharmacy-software"
          />
          <Route element={<POS />} path="/project/pos-management" />
          <Route element={<ERP_Software />} path="/project/erp-software" />
          <Route
            element={<CourierManagemen />}
            path="/project/courier-management"
          />
          <Route
            element={<TailorManagement />}
            path="/project/tailor-management"
          />
          <Route
            element={<PublicationWebsite />}
            path="/project/publication-website"
          />
          <Route element={<BoiAche />} path="/industries/boi-ache" />
          <Route element={<EduPoribar />} path="/industries/edu-poribar" />
          <Route element={<BDCODA />} path="/industries/bdcoda" />
          <Route element={<LaptopAche />} path="/industries/laptop-ache" />
          <Route element={<CourierAche />} path="/industries/courier-ache" />
          <Route element={<KazAche />} path="/industries/kaz-ache" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Career />} path="/career" />
          <Route
            element={<JobDescription />}
            path="/career/job-description/:slug"
          />
          <Route
            element={<JobApplicationForm />}
            path="/career/apply-job/:slug"
          />

          <Route element={<Affiliate />} path="/affiliate" />
          <Route
            element={
              <AuthRoute>
                <AffiliateSignUp />
              </AuthRoute>
            }
            path="/affiliate-signup"
          />
          <Route
            element={
              <AuthRoute>
                <AffiliatelogIn />
              </AuthRoute>
            }
            path="/affiliate-login"
          />
          <Route
            element={
              <ProtectedRoute>
                <AffiliateDashboard />
              </ProtectedRoute>
            }
            path="/affiliate-dashboard"
          />

          <Route
            element={<AffiliateEditProfile />}
            path="/affiliate-dashboard/edit-profile"
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
