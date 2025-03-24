import React from "react";
import special from "../assets/images/special.jpg";
import communication from "../assets/images/communication.png";
import experience from "../assets/images/experience.png";
import safe from "../assets/images/safe.png";
import passion from "../assets/images/passion.png";
const WhySpecial = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={special} alt="" />
        </div>
        <div>
          <h4 className="text-3xl font-semibold text-[#2D7EB5]">Why Special ITBD?</h4>
          <p className="text-lg mt-3">
            We help you elevate your business and maximize revenue with
            cutting-edge technological solutions. Instead of adding unnecessary
            services that drive up costs, we focus on delivering precisely what
            your business needs for optimal growth and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <div className="flex h-44 w-full bg-blue-50 rounded-lg p-2 shadow-xl hover:-translate-y-4 transition-all">
              <div>
                <img className="h-20 w-52" src={communication} alt="" />
              </div>
              <div className="ml-2">
                <p className="text-xl font-semibold">Communication</p>
                <p className="mt-2">
                  Effective communication is arguably the number one skill
                  required software.
                </p>
              </div>
            </div>
            <div className="flex h-44 w-full bg-blue-50 rounded-lg p-2 shadow-xl hover:-translate-y-4 transition-all ">
              <div className="h-56 ">
                <img className="h-20 w-52" src={experience} alt="" />
              </div>
              <div className="ml-2">
                <p className="text-xl font-semibold">Experience</p>
                <p className="mt-2">
                We are more experienced that allows creating a finished solution.
                </p>
              </div>
            </div>
            <div className="flex h-44 w-full bg-blue-50 rounded-lg p-2 shadow-xl hover:-translate-y-4 transition-all ">
              <div>
                <img className="h-20 w-52" src={safe} alt="" />
              </div>
              <div className="ml-2">
                <p className="text-xl font-semibold">Safe & Secure</p>
                <p className="mt-2">
                We follow robust data security strategies will protect an organization’s information.
                </p>
              </div>
            </div>
            <div  className="flex h-44 w-full bg-blue-50 rounded-lg p-2 shadow-xl hover:-translate-y-4 transition-all">
              <div>
                <img className="h-20 w-52" src={passion} alt="" />
              </div>
              <div className="ml-2">
                <p className="text-xl font-semibold">Passion for Testing</p>
                <p className="mt-2">
                We test regularly can ensure the level of quality that encourages the diligence o find bugs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySpecial;
