import React from "react";
import { motion } from "framer-motion";
import ourVision from "../assets/images/ourVision.jpg";
import ourMission from "../assets/images/ourMission.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const CompanyOverview = () => {
  return (
    <div className="container">
      <motion.div className="mt-10">
        <motion.div 
          className="flex flex-col justify-center items-center"
          {...fadeInUp}
        >
          <motion.h3 
            className="text-5xl font-bold border-b-4 border-[#2D7EB5] p-3 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Company <span className="text-[#2D7EB5]">Overview</span>
          </motion.h3>

          <motion.p 
            className="mt-3 text-center"
            {...fadeIn}
          >
            We are committed to maximizing our customers' benefits by delivering
            innovative, cost-effective, and scalable IT solutions that drive
            efficiency and growth.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        >
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-semibold">
              <span className="text-[#2D7EB5]">Who</span> We Are?
            </h3>
            <p className="leading-7 text-lg text-gray-800 mt-3">
              ITBD is a Dhaka-based global IT consulting and solutions provider
              with a strong reputation for excellence. We deliver value-driven
              services backed by years of expertise, deep industry knowledge,
              and a proven track record across various domains. Our
              comprehensive offerings include full-cycle software development,
              enterprise web solutions, web applications, and portal
              development, ensuring innovative and scalable solutions tailored
              to business needs.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-semibold">
              <span className="text-[#2D7EB5]">What</span> We Do
            </h3>
            <p className="leading-7 text-lg text-gray-800 mt-3">
              Leveraging cutting-edge technologies such as IoT, AI-ML, AR-VR,
              voice assistants, DevOps, and cloud computing, ITBD has
              established itself as a leading IT company in Dhaka. We specialize
              in delivering industry-driven mobility solutions across web and
              mobile application development. Our dedicated R&D team and skilled
              tech experts continuously innovate to provide a diverse range of
              IT services and solutions for global clients. Partnering with us
              guarantees significant cost savings and accelerated project
              execution, ensuring seamless digital transformation.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center flex flex-col justify-center items-center"
          {...fadeInUp}
        >
          <motion.p 
            className="h-10 w-32 bg-blue-100 rounded-full text-[#2D7EB5] font-semibold p-2"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Our Values
          </motion.p>
          <motion.h3 
            className="mt-3 text-4xl font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            What <span className="text-[#2D7EB5]">We Believe</span>
          </motion.h3>
        </motion.div>

        <motion.div {...fadeIn}>
          <motion.p 
            className="text-center text-lg mt-5"
            {...fadeInUp}
          >
            At ITBD, our strength lies in an unyielding commitment to customer
            satisfaction and a relentless pursuit of excellence. We don't just
            deliver services—we craft transformative digital experiences that
            propel businesses forward. With a sharp focus on quality,
            innovation, and strategic impact, we ensure your brand reaches new
            heights. Our experts dive deep into your vision, dedicating time and
            expertise to create solutions that not only meet your needs but
            exceed expectations, driving real and measurable success.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mt-16"
            {...fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <h4 className="text-3xl font-semibold text-[#2D7EB5]">
                Our Vision
              </h4>
              <p className="mt-5 text-lg">
                We aspire to be a global leader in cutting-edge offshoring and
                outsourcing technologies, empowering businesses to become
                invaluable assets. Through meticulous attention to detail,
                unwavering commitment to quality, and strategic talent
                selection, we strive to drive innovation and excellence in every
                solution we deliver.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.5 }}
            >
              <img className="rounded-full" src={ourVision} alt="" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mt-16"
            {...fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ duration: 0.5 }}
            >
              <img className="rounded-full " src={ourMission} alt="" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <h4 className="text-3xl font-semibold text-[#2D7EB5]">
                Our Mission
              </h4>
              <p className="mt-5 text-lg">
                We aspire to be a global leader in cutting-edge offshoring and
                outsourcing technologies, empowering businesses to become
                invaluable assets. Through meticulous attention to detail,
                unwavering commitment to quality, and strategic talent
                selection, we strive to drive innovation and excellence in every
                solution we deliver.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompanyOverview;