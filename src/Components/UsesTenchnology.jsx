import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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

const UsesTenchnology = () => {
  return (
    <div className="max-w-[1170px] m-auto p-5">
      <div className="max-w-[1170px] m-auto text-center lg:text-left mt-[50px]">
        <p className="text-[#545358] md:text-base text-[14px]">
          Technologies we work with
        </p>
        <h2 className="font-bold mt-[8px] mb-[50px] text-[#2D7EB5] md:text-[36px]  text-[25px] leading-[47px]">
          Seamless Integration
        </h2>
      </div>
      <div className="px-4 lg:px-0">
        <Tabs>
          <TabList className="flex items-center justify-start overflow-x-auto mb-8 p-2  rounded-xl gap-2 backdrop-blur-sm">
            {[
              { label: "Mobile", icon: "" },
              { label: "Front End", icon: "" },
              { label: "Database", icon: "" },
              { label: "Backend", icon: "" },
              { label: "CMS", icon: "" },
            ].map((tab, index) => (
              <Tab
                key={index}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-base transition-all duration-300
        ${
          isActive
            ? "bg-[#0471BA] text-white shadow-lg shadow-[#0471BA]/20"
            : "text-[#313131] hover:bg-[#0471BA]/10"
        }
        group relative overflow-hidden
        `
                }
              >
                <span className="relative z-10 transition-transform group-hover:scale-110">
                  {tab.icon}
                </span>
                <span className="relative z-10">{tab.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0471BA] to-[#0471BA]/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Tab>
            ))}
          </TabList>

          <TabPanel className={""}>
            <TechnologysItem
              itemIconOne={<IoLogoApple />}
              itemIconTwo={<IoLogoAndroid />}
              itemIconThree={<SiKotlin />}
              itemIconFour={<BiLogoFlutter />}
              itemIconFive={<FaReact />}
              itemIconSix={<GrSwift />}
              itemNameOne={"IOS"}
              itemNameTwo={"Android"}
              itemNameThree={"Kotline"}
              itemNameFour={"Flutter"}
              itemNameFive={"React Native"}
              itemNameSix={"Swift"}
            />
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
              itemNameSix={"Dynamodb"}
            />
          </TabPanel>
          <TabPanel>
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
              itemNameFive={"Larabel"}
              itemNameSix={"Codelgniter"}
            />
          </TabPanel>
          <TabPanel className={"text-center"}>
            <TechnologysItem
              itemIconOne={<TiShoppingCart />}
              itemIconTwo={<FaWordpress />}
              itemIconThree={<FaShopify />}
              itemNameOne={"eCommece"}
              itemNameTwo={"Wordpress"}
              itemNameThree={"Shopify"}
            />
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap justify-center gap-3 pt-4 md:gap-[80px] md:ml-[-35px] md:justify-start">
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <FaReact className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">IOS</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiVuedotjs className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">React</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <FaAngular className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Angular</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <GiKnockout className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Knockout</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiMeteor className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Meteor</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap justify-center gap-3 pt-4 md:gap-[80px] md:ml-[-35px] md:justify-start">
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiMysql className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">MySql</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiPostgresql className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">PostgreSQL</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiKotlin className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">NoSQL</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiMongodb className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">MongoDB</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <IoLogoFirebase className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Firestore</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiAmazondynamodb className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Dynamodb</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap justify-center gap-3 pt-4 md:gap-[80px] md:ml-[-35px] md:justify-start">
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <FaNodeJs className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Express Js</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiExpress className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">MongoDB</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <DiPhp className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">PHP</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <SiLaravel className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Laravel</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <ImFire className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Codelgniter</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap justify-center gap-3 pt-4 md:gap-[80px] md:ml-[-35px] md:justify-start">
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <TiShoppingCart className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">eCommerce</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <FaWordpress className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Wordpress</p>
              </div>
              <div className="flex flex-col justify-around items-center text-[#113759] group">
                <FaShopify className="text-[80px] group-hover:text-[#0673B5] duration-500 mb-3" />
                <p className="text-lg">Shopify</p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default UsesTenchnology;
