import { motion } from "framer-motion";
import React from "react";
import HR from "../assets/images/HR.png";
import CEO from "../assets/images/CEO.jpg";
import Sadek from "../assets/images/Sadek.png";
import Mizan from "../assets/images/Mizan.png";
import Mahmudul from "../assets/images/Mahmudul.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const TeamSection = ({ title, members }) => (
  <motion.div className="mt-16" {...fadeInUp}>
    <motion.h4 
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-[#2D7EB5] mb-8"
    >
      {title}
    </motion.h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="overflow-hidden rounded-t-xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 bg-white">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-[#2D7EB5] text-center"
            >
              {member.name}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 mt-2 text-center"
            >
              {member.role}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex justify-center space-x-4"
            >
              <a href="#" className="text-[#2D7EB5] hover:text-blue-600 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-[#2D7EB5] hover:text-blue-600 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const OurTeam = () => {
  const operationTeam = [
    {
      name: "Manjurul Islam",
      role: "HR & Admin",
      image: HR,
    },
    {
      name: "",
      role: "Operation Manager",
      image: "/team2.jpg",
    },
    {
      name: "",
      role: "Operation Executive",
      image: "/team3.jpg",
    },
    {
      name: "",
      role: "Operation Executive",
      image: "/team4.jpg",
    },
    {
      name: "",
      role: "Operation Executive",
      image: "/team5.jpg",
    }

  ];

  const itTeam = [
    {
      name: "Abu Sadek CHW",
      role: "Software Engineer & Head Of IT",
      image: Sadek,
    },
    {
      name: "Mizanur Rahman",
      role: "Software Engineer & Head of Edu Poribar",
      image: Mizan,
    },
    {
      name: "Mahmudul Hasan",
      role: "MERN Developer & Head of Frontend Team",
      image: Mahmudul,
    },
    {
      name: "Abu Taher",
      role: "Junior Software Engineer",
      image: "/team4.jpg",
    },
    {
      name: "Sakib Sheikh",
      role: "Junior Frontend Developer",
      image: "/team5.jpg",
    }
  ];

  const marketingTeam = [
    {
      name: "",
      role: "Marketing Director",
      image: "/team1.jpg",
    },
    {
      name: "",
      role: "Digital Marketing Specialist",
      image: "/team2.jpg",
    },
    {
      name: "",
      role: "Content Strategist",
      image: "/team3.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-5xl font-bold animated-text2"
          >
            Our Team
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            className="h-1 bg-[#2D7EB5] mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Meet the talented and innovative team of ITBD, dedicated to
            delivering cutting-edge IT solutions
          </motion.p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={CEO}
              alt="Mohammad Ibrahim hossain"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-3xl font-bold">Mohammad Ibrahim hossain</h3>
              <p className="text-xl mt-2">Founder & CEO</p>
            </div>
          </motion.div>
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold text-[#2D7EB5]"
            >
              Mohammad Ibrahim hossain
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed">
              Md. Ibrahim Hossain is a highly skilled, innovative, and intelligent individual 
              with deep expertise in the IT sector. His vast knowledge and strategic vision 
              make him a valuable leader, ensuring excellence in every aspect of service delivery.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed">
              With over 13 years of expertise in leadership and management within the IT and 
              software development industries, he has held key positions across various IT domains, 
              including strategic planning, design, management consulting, business development, 
              and innovation.
            </motion.p>
          </div>
        </motion.div>

        {/* Team Sections */}
        <TeamSection title="Operation Team" members={operationTeam} />
        <TeamSection title="IT Team" members={itTeam} />
        <TeamSection title="Marketing Team" members={marketingTeam} />
      </div>
    </div>
  );
};

export default OurTeam;