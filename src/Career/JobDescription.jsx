import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/favicon.png";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCheck,
  FaRegBookmark,
} from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { GiProfit } from "react-icons/gi";
import { useGetCircularDetailsQuery } from "../app/features/apiSlice";
import { TbCurrencyTaka } from "react-icons/tb";

const JobDescription = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // Import useNavigate from react-router-dom
  const {
    data: careerJobDeailsData,
    isLoading,
    isError,
  } = useGetCircularDetailsQuery(slug);
  //   console.log(careerJobDeailsData);

  // Animation variants

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const headerVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const listItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    tap: { scale: 0.95 },
  };

  const responsibilities = [
    "Design and implement scalable web applications",
    "Write clean, maintainable, and efficient code",
    "Collaborate with cross-functional teams",
    "Participate in code reviews and technical discussions",
    "Mentor junior developers",
  ];

  const benefits = [
    "Health insurance",
    "401(k) matching",
    "Paid time off",
    "Professional development",
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-gray-50 py-12"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <motion.div
            className="relative overflow-hidden rounded-3xl p-8 mb-8 shadow-xl bg-blue-50 "
            variants={headerVariants}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-600 opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative z-10">
              <motion.span
                className="inline-block px-4 py-1 rounded-full bg-[#2D7EB5] text-white text-sm mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Featured Position
              </motion.span>
              <h1 className="text-5xl font-bold mb-6 text-[#2D7EB5]">
                {careerJobDeailsData?.data?.job_title}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FaBuilding />,
                    label: "Department",
                    value: careerJobDeailsData?.data?.department,
                  },
                  {
                    icon: <FaBriefcase />,
                    label: careerJobDeailsData?.data?.employment_type,
                    value: "Full-time",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Location",
                    value: careerJobDeailsData?.data?.location,
                  },
                  {
                    icon: <TbCurrencyTaka />,
                  
                    label: "Salary Range",
                    value: careerJobDeailsData?.data?.salary_range,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#2D7EB5] backdrop-blur-sm rounded-xl p-4 text-white"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm opacity-80">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <motion.section
                className="bg-white rounded-2xl shadow-lg p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: careerJobDeailsData?.data?.description,
                  }}
                  className="mt-4 text-[#313131]"
                ></div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h2 className="text-2xl font-bold mb-6 text-[#2D7EB5]">
                  Job Details
                </h2>

                <div className="space-y-6">
                  {/* <motion.div
                                        className="p-4 rounded-xl bg-blue-50"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <FaBuilding className="text-2xl text-[#2D7EB5] mb-2"/>
                                        <h3 className="font-semibold mb-2 text-[#2D7EB5]">Department</h3>
                                        <p className="text-gray-600">
                                            IT
                                        </p>
                                    </motion.div> */}
                  {/* <motion.div
                                        className="p-4 rounded-xl bg-blue-50"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <FaBriefcase className="text-2xl text-[#2D7EB5] mb-2"/>
                                        <h3 className="font-semibold mb-2 text-[#2D7EB5]">Employment</h3>
                                        <p className="text-gray-600">
                                            Full-time


                                        </p>
                                    </motion.div> */}
                  <motion.div
                    className="p-4 rounded-xl bg-blue-50"
                    whileHover={{ scale: 1.02 }}
                  >
                    <GrSchedules className="text-2xl text-[#2D7EB5] mb-2" />
                    <h3 className="font-semibold mb-2 text-[#2D7EB5]">
                      Schedule
                    </h3>
                    <p className="text-gray-600">
                      Saturday to Thursday
                      <br />
                      (09:00 AM - 06:00 PM)
                    </p>
                  </motion.div>

                  <motion.button
                    onClick={() => {
                      navigate(
                        `/career/apply-job/${careerJobDeailsData?.data?.id}`
                      );
                    }}
                    className="w-full py-3 rounded-xl text-white font-semibold bg-[#2D7EB5] inline-block text-center"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Apply for this position
                  </motion.button>

                  <motion.p
                    className="text-center text-sm text-gray-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    Application deadline: {careerJobDeailsData?.data?.deadline}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobDescription;
