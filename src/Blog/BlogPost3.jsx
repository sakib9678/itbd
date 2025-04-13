import React from "react";
import { motion } from "framer-motion";

const BlogPost3 = () => {
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
          <h1 className="font-serif animated-text tracking-wide">
            Embracing Digital Transformation
          </h1>
          <p className="text-lg text-gray-600 mt-4 italic">
            How businesses are evolving in the digital age.
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Digital Transformation"
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
                What is Digital Transformation?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Digital transformation is the integration of digital technology
                into all areas of a business, fundamentally changing how you
                operate and deliver value to customers. It’s also a cultural
                change that requires organizations to continually challenge the
                status quo, experiment, and get comfortable with failure.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99]"
            >
              <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
                Key Benefits of Digital Transformation
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                <li>
                  <strong>Improved Efficiency:</strong> Automating processes
                  reduces manual effort and increases productivity.
                </li>
                <li>
                  <strong>Enhanced Customer Experience:</strong> Deliver
                  personalized and seamless experiences across all touchpoints.
                </li>
                <li>
                  <strong>Data-Driven Insights:</strong> Leverage analytics to
                  make informed decisions and predict trends.
                </li>
                <li>
                  <strong>Innovation:</strong> Foster a culture of innovation
                  by adopting new technologies and approaches.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99]">
            <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
              Quick Tips for Digital Transformation
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
              <li>Start with a clear strategy and vision.</li>
              <li>Invest in the right technologies for your business.</li>
              <li>Empower your team with training and resources.</li>
              <li>Focus on delivering value to your customers.</li>
              <li>Continuously measure and optimize your efforts.</li>
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
            Digital transformation is no longer optional; it’s a necessity for
            businesses to stay competitive in today’s fast-paced world. By
            embracing digital tools and strategies, organizations can unlock new
            opportunities, improve efficiency, and deliver exceptional value to
            their customers. Start your digital transformation journey today and
            position your business for long-term success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost3;