import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/images/favicon.png';
import {
    FaBriefcase, FaBuilding, FaMapMarkerAlt, FaDollarSign,
    FaCheck, FaRegBookmark
} from 'react-icons/fa';
import { GrSchedules } from 'react-icons/gr';
import { GiProfit } from 'react-icons/gi';

const JobDescription = () => {
    // Animation variants
    const pageVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    const headerVariants = {
        initial: { opacity: 0, y: -50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const listItemVariants = {
        initial: { opacity: 0, x: -20 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            x: 10,
            transition: {
                type: "spring",
                stiffness: 400
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        },
        tap: { scale: 0.95 }
    };

    const responsibilities = [
        "Design and implement scalable web applications",
        "Write clean, maintainable, and efficient code",
        "Collaborate with cross-functional teams",
        "Participate in code reviews and technical discussions",
        "Mentor junior developers"
    ];

    const requirements = [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with cloud services (AWS/Azure)",
        "Excellent problem-solving skills",
        "Strong communication skills"
    ];

    const benefits = [
        "Health insurance",
        "401(k) matching",
        "Paid time off",
        "Professional development"
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
                        className="relative overflow-hidden rounded-3xl p-8 mb-12 shadow-xl bg-blue-50 "
                        variants={headerVariants}
                        whileHover={{ scale: 1.01 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-blue-600 opacity-10"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <div className="relative z-10">
                            <motion.span
                                className="inline-block px-4 py-1 rounded-full bg-[#2D7EB5] text-white text-sm mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Featured Position
                            </motion.span>
                            <h1 className="text-5xl font-bold mb-6 text-[#2D7EB5]">Senior Full Stack Developer</h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { icon: <FaBuilding />, label: "Department", value: "IT" },
                                    { icon: <FaBriefcase />, label: "Employment", value: "Full-time" },
                                    { icon: <FaMapMarkerAlt />, label: "Location", value: "41/1-Sh, Uttarbadda, Behind Hossain Market, 2nd Floor, Dhaka-1212" },
                                    { icon: <FaDollarSign />, label: "Salary Range", value: "$20K - $30K" }
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

                    {/* Quick Actions */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-6 mb-8"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex items-center gap-4">
                                <motion.img
                                    src={Logo}
                                    alt="Company Logo"
                                    className="w-16 h-16 rounded-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                />
                                <div>
                                    <h3 className="font-bold text-xl text-[#2D7EB5]">Ibrahim Tech Bangladesh</h3>
                                    <p className="text-gray-600">Technology · 50+ employees</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <motion.a
                                    href="/career/apply-job"
                                    className="px-6 py-2 rounded-lg text-white bg-[#2D7EB5] inline-block"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Apply Now
                                </motion.a>
                                <motion.button
                                    className="px-6 py-2 rounded-lg border-2 border-[#2D7EB5] text-[#2D7EB5]"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <FaRegBookmark className="inline-block mr-2" />
                                    Save
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Company Section */}
                    <motion.section
                        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-[#2D7EB5]">About the Company</h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <motion.div
                                className="md:w-1/3"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
                                    alt="Company Office"
                                    className="w-full h-64 object-cover rounded-2xl shadow-md"
                                />
                            </motion.div>
                            <div className="md:w-2/3 space-y-6">
                                <p className="text-gray-600 leading-relaxed">
                                    Ibrahim Tech Bangladesh is a leading technology company specializing in innovative solutions
                                    for enterprise clients. Founded in 2020, we've grown to over 50 employees globally and
                                    continue to push the boundaries of what's possible in software development.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        { label: "Founded", value: "2020" },
                                        { label: "Company Size", value: "50+ employees" },
                                        { label: "Industry", value: "Technology" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-4 rounded-xl bg-blue-50"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <h4 className="font-semibold mb-1 text-[#2D7EB5]">{item.label}</h4>
                                            <p className="text-gray-600">{item.value}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* About Section */}
                            <motion.section
                                className="bg-white rounded-2xl shadow-lg p-8"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-[#2D7EB5]">About the Role</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    We are seeking a talented Senior Full Stack Developer to join our growing team.
                                    This is an opportunity to work on cutting-edge projects and make a significant impact
                                    on our products and services.
                                </p>

                                <h3 className="text-xl font-semibold mb-4 text-[#2D7EB5]">Key Responsibilities</h3>
                                <motion.ul className="space-y-3">
                                    {responsibilities.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-600"
                                            variants={listItemVariants}
                                            whileHover="hover"
                                        >
                                            <FaCheck className="mt-1 text-[#2D7EB5]" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.section>

                            {/* Requirements Section */}
                            <motion.section
                                className="bg-white rounded-2xl shadow-lg p-8"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-[#2D7EB5]">Requirements</h2>
                                <motion.ul className="space-y-3">
                                    {requirements.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-600"
                                            variants={listItemVariants}
                                            whileHover="hover"
                                        >
                                            <FaCheck className="mt-1 text-[#2D7EB5]" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div
                                className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-[#2D7EB5]">Job Details</h2>

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
                                        <GrSchedules className="text-2xl text-[#2D7EB5] mb-2"/>
                                        <h3 className="font-semibold mb-2 text-[#2D7EB5]">Schedule</h3>
                                        <p className="text-gray-600">
                                            Saturday to Thursday
                                            <br />
                                            (09:00 AM - 06:00 PM)
                                        </p>
                                    </motion.div>
                                    {/* <motion.div
                                        className="p-4 rounded-xl bg-blue-50"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <FaMapMarkerAlt className="text-2xl text-[#2D7EB5] mb-2"/>
                                        <h3 className="font-semibold mb-2 text-[#2D7EB5]">Location</h3>
                                        <p className="text-gray-600">
                                            41/1-Sh, Uttarbadda, Behind Hossain Market, 2nd Floor, Dhaka-1212
                                        </p>
                                    </motion.div> */}
                                    {/* <motion.div
                                        className="p-4 rounded-xl bg-blue-50"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <FaDollarSign className="text-2xl text-[#2D7EB5] mb-2"/>
                                        <h3 className="font-semibold mb-2 text-[#2D7EB5]">Salary Range
                                        </h3>
                                        <p className="text-gray-600">
                                            $20K - $30K
                                        </p>
                                    </motion.div> */}
                                    <motion.div
                                        className="p-4 rounded-xl bg-blue-50"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <GiProfit className="text-2xl text-[#2D7EB5] mb-2"/>
                                        <h3 className="font-semibold mb-2 text-[#2D7EB5]">Benefits</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            {benefits.map((benefit, index) => (
                                                <motion.li
                                                    key={index}
                                                    variants={listItemVariants}
                                                    whileHover="hover"
                                                >
                                                    {benefit}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.a
                                        href="/career/apply-job"
                                        className="w-full py-3 rounded-xl text-white font-semibold bg-[#2D7EB5] inline-block text-center"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Apply for this position
                                    </motion.a>

                                    <motion.p
                                        className="text-center text-sm text-gray-500"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Application deadline: May 30, 2025
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