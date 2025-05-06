import React from "react";
import { motion } from "framer-motion";

const BlogPost4 = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="animated-text font-serif tracking-wide">
            The Future of Cloud Architecture in 2025
          </h1>
          <p className="text-lg text-gray-600 mt-4 italic">
            Exploring trends and innovations shaping the cloud landscape.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Cloud Architecture"
                className="w-full h-96 object-cover rounded-lg shadow-md border-4 border-[#246A99]"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99] mb-10"
            >
              <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
                Introduction to Cloud Architecture
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cloud architecture has become the backbone of modern
                technological advancements. As we move into 2025, the cloud is
                evolving to meet the demands of scalability, security, and
                innovation. This article explores the trends and technologies
                shaping the future of cloud architecture.
              </p>
            </motion.div>

            {/* Key Trends */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99]"
            >
              <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
                Key Trends in Cloud Architecture
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                <li>
                  <strong>Edge Computing:</strong> Bringing computation closer
                  to the data source for reduced latency and faster processing.
                </li>
                <li>
                  <strong>Serverless Architectures:</strong> Enabling developers
                  to focus on code without worrying about infrastructure
                  management.
                </li>
                <li>
                  <strong>Multi-Cloud Strategies:</strong> Leveraging multiple
                  cloud providers to avoid vendor lock-in and enhance
                  flexibility.
                </li>
                <li>
                  <strong>AI and Machine Learning Integration:</strong> Using
                  AI-driven insights to optimize cloud operations and enhance
                  decision-making.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99]">
            <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
              Quick Tips for Cloud Success
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
              <li>Adopt a cloud-first strategy for new projects.</li>
              <li>Invest in cloud security and compliance measures.</li>
              <li>Train your team on emerging cloud technologies.</li>
              <li>Leverage automation to streamline cloud operations.</li>
              <li>Continuously monitor and optimize cloud costs.</li>
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99] mt-16"
        >
          <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
            Conclusion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The future of cloud architecture is bright, with innovations like
            edge computing, serverless architectures, and AI integration
            redefining how businesses operate. By staying ahead of these trends
            and adopting best practices, organizations can unlock the full
            potential of the cloud and drive success in the digital era.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost4;