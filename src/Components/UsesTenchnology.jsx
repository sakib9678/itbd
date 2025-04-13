import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoApple, IoLogoFirebase } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
import { BiLogoFlutter } from "react-icons/bi";
import {
  SiKotlin,
  SiVuedotjs,
  SiMeteor,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazondynamodb,
  SiLaravel,
  SiExpress,
} from "react-icons/si";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { GiKnockout } from "react-icons/gi";
import { ImFire } from "react-icons/im";
import { DiPhp } from "react-icons/di";
import { TiShoppingCart } from "react-icons/ti";
import TechnologysItem from "./TechnologysItem";

const UsesTechnology = () => {
  const [activeTab, setActiveTab] = useState("Mobile");
  const [slidePosition, setSlidePosition] = useState(0);

  const tabs = [
    { label: "Mobile", content: "Mobile Content" },
    { label: "Front End", content: "Front End Content" },
    { label: "Database", content: "Database Content" },
    { label: "Backend", content: "Backend Content" },
    { label: "CMS", content: "CMS Content" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Mobile":
        return (
          <TechnologysItem
            itemIconOne={<IoLogoApple />}
            itemIconTwo={<IoLogoAndroid />}
            itemIconThree={<SiKotlin />}
            itemIconFour={<BiLogoFlutter />}
            itemIconFive={<FaReact />}
            itemIconSix={<GrSwift />}
            itemNameOne={"IOS"}
            itemNameTwo={"Android"}
            itemNameThree={"Kotlin"}
            itemNameFour={"Flutter"}
            itemNameFive={"React Native"}
            itemNameSix={"Swift"}
          />
        );
      case "Front End":
        return (
          <TechnologysItem
            itemIconOne={<FaReact />}
            itemIconTwo={<SiVuedotjs />}
            itemIconThree={<FaAngular />}
            itemIconFour={<GiKnockout />}
            itemIconFive={<SiMeteor />}
            itemNameOne={"React"}
            itemNameTwo={"Vue"}
            itemNameThree={"Angular"}
            itemNameFour={"Knockout"}
            itemNameFive={"Meteor"}
          />
        );
      case "Database":
        return (
          <TechnologysItem
            itemIconOne={<SiMysql />}
            itemIconTwo={<SiPostgresql />}
            itemIconThree={<SiKotlin />}
            itemIconFour={<SiMongodb />}
            itemIconFive={<IoLogoFirebase />}
            itemIconSix={<SiAmazondynamodb />}
            itemNameOne={"MySql"}
            itemNameTwo={"PostgreSQL"}
            itemNameThree={"NoSQL"}
            itemNameFour={"MongoDB"}
            itemNameFive={"Firebase"}
            itemNameSix={"DynamoDB"}
          />
        );
      case "Backend":
        return (
          <TechnologysItem
            itemIconOne={<FaNodeJs />}
            itemIconTwo={<SiExpress />}
            itemIconThree={<SiMongodb />}
            itemIconFour={<DiPhp />}
            itemIconFive={<SiLaravel />}
            itemIconSix={<ImFire />}
            itemNameOne={"Node"}
            itemNameTwo={"Express Js"}
            itemNameThree={"MongoDB"}
            itemNameFour={"PHP"}
            itemNameFive={"Laravel"}
            itemNameSix={"CodeIgniter"}
          />
        );
      case "CMS":
        return (
          <TechnologysItem
            itemIconOne={<TiShoppingCart />}
            itemIconTwo={<FaWordpress />}
            itemIconThree={<FaShopify />}
            itemNameOne={"eCommerce"}
            itemNameTwo={"WordPress"}
            itemNameThree={"Shopify"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1170px] m-auto p-5 container mx-auto px-4 ">
      <div className="max-w-[1170px] m-auto text-center lg:text-left mt-[50px]">
        <p className="text-[#545358] md:text-base text-[14px]">
          Technologies we work with
        </p>
        <h2 className="font-bold mt-[8px] mb-[20px] animated-text2 md:text-[36px] text-[25px] leading-[47px]">
          Seamless Integration
        </h2>
      </div>
      <div className="px-4 lg:px-0">
        {/* Tab List with Slider */}
        <div className="relative">
          <div className="flex items-center justify-start overflow-hidden mb-8 py-5 px-1 rounded-xl backdrop-blur-sm">
            {/* Left Arrow */}
            <button
              onClick={() => setSlidePosition(Math.max(slidePosition - 100, 0))}
              className="absolute left-0 z-10 lg:hidden bg-white/80 shadow-md rounded-full p-2"
              disabled={slidePosition === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Tabs Container */}
            <div
              className="flex transition-transform duration-300 ease-in-out gap-2"
              style={{ transform: `translateX(-${slidePosition}px)` }}
            >
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex-shrink-0 flex items-center gap-2 px-6 py-[6px] rounded-[20px] font-medium text-base transition-all duration-300 ${
                    activeTab === tab.label
                      ? "bg-[#0471BA] text-white shadow-lg shadow-[#0471BA]/20"
                      : "text-[#313131] hover:bg-[#0471BA]/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setSlidePosition(Math.min(slidePosition + 100, 400))}
              className="absolute right-0 z-10 lg:hidden bg-white/80 shadow-md rounded-full p-2"
              disabled={slidePosition >= 400}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default UsesTechnology;