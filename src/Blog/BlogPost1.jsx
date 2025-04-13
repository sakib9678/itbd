import React from "react";
import { motion } from "framer-motion";

const BlogPost1 = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif animated-text font-bold tracking-wide leading-tight">
            The Future of Technology
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto italic">
            Exploring the innovations that will shape tomorrow's world and how they will affect our lives.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Future of Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-xl border-4 border-[#246A99]"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#246A99]"
            >
              <h2 className="text-4xl font-serif font-bold text-[#246A99] mb-6">
                Introduction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Technology is advancing at a rapid pace, and its impact is seen across industries, communities, and individuals. This transformation, powered by advancements in fields like AI, quantum computing, and 5G connectivity, is reshaping how we interact with the world.
              </p>

              <h2 className="text-4xl font-serif font-bold text-[#246A99] mb-6">
                Key Innovations
              </h2>
              <div className="columns-2 gap-8 text-lg text-gray-700 space-y-4">
                <p>
                  <strong className="font-medium text-[#246A99]">Artificial Intelligence:</strong> Powering smarter automation and deepening human-computer interaction.
                </p>
                <p>
                  <strong className="font-medium text-[#246A99]">Quantum Computing:</strong> Opening new frontiers of computational capacity and solving previously unsolvable problems.
                </p>
                <p>
                  <strong className="font-medium text-[#246A99]">5G Connectivity:</strong> Providing ultra-fast and reliable communication for next-gen applications.
                </p>
                <p>
                  <strong className="font-medium text-[#246A99]">Renewable Energy:</strong> Leading the charge toward a sustainable, eco-friendly future.
                </p>
              </div>

              <h2 className="text-4xl font-serif font-bold text-[#246A99] mt-12 mb-6">
                Challenges Ahead
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                While the progress is promising, the rapid pace of technological change raises concerns. Issues such as data privacy, cybersecurity, and the ethical use of AI must be tackled to ensure these innovations are safe and beneficial for society.
              </p>

              <h2 className="text-4xl font-serif font-bold text-[#246A99] mb-6">
                Conclusion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In conclusion, the future of technology presents a realm of opportunity and challenge. By responsibly navigating these advancements, we can harness their potential to create a better, more connected world for future generations.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#246A99]">
            <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
              Quick Highlights
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>
                AI is transforming industries with smarter automation.
              </li>
              <li>
                Quantum computing is solving previously unsolvable problems.
              </li>
              <li>
                5G is enabling ultra-fast communication for next-gen applications.
              </li>
              <li>
                Renewable energy is driving sustainability efforts worldwide.
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-[#246A99] mt-12 mb-6">
              Did You Know?
            </h2>
            <p className="text-lg text-gray-700">
              The first computer, ENIAC, was built in 1945 and weighed over 27 tons. Today, smartphones are millions of times more powerful and fit in your pocket!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost1;