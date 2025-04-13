import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaLock, FaRocket } from "react-icons/fa";

const BlogPost2 = () => {
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
            Web Development Best Practices
          </h1>
          <p className="text-lg text-gray-600 mt-4 italic">
            A guide to building modern, efficient, and secure websites.
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="Web Development Best Practices"
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
                Why Best Practices Matter
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Following best practices in web development ensures that your
                website is not only functional but also efficient, secure, and
                user-friendly. It helps developers maintain consistency, reduces
                technical debt, and improves collaboration within teams. By
                adhering to these principles, you can create websites that stand
                the test of time and deliver exceptional user experiences.
              </p>
            </motion.div>

            {/* Key Best Practices */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99]"
            >
              <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
                Key Best Practices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Practice 1 */}
                <div className="flex items-start space-x-4">
                  <FaCode className="text-[#246A99] text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Clean and Maintainable Code
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Write code that is easy to read, maintain, and scalable.
                      Use proper naming conventions and follow coding standards.
                    </p>
                  </div>
                </div>

                {/* Practice 2 */}
                <div className="flex items-start space-x-4">
                  <FaMobileAlt className="text-[#246A99] text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Mobile-First Design
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Ensure your website is responsive and optimized for mobile
                      devices to provide a seamless user experience.
                    </p>
                  </div>
                </div>

                {/* Practice 3 */}
                <div className="flex items-start space-x-4">
                  <FaLock className="text-[#246A99] text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Security Best Practices
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Protect user data by implementing HTTPS, secure
                      authentication, and regular vulnerability testing.
                    </p>
                  </div>
                </div>

                {/* Practice 4 */}
                <div className="flex items-start space-x-4">
                  <FaRocket className="text-[#246A99] text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Performance Optimization
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Optimize your website's performance by minimizing assets,
                      using caching, and implementing lazy loading.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#246A99]">
            <h2 className="text-3xl font-serif font-bold text-[#246A99] mb-6">
              Quick Tips
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
              <li>Use semantic HTML to improve accessibility and SEO.</li>
              <li>Regularly test your website on different devices and browsers.</li>
              <li>Keep your dependencies up-to-date to avoid vulnerabilities.</li>
              <li>Document your code and processes for better team collaboration.</li>
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
            By following these best practices, you can ensure that your web
            development projects are efficient, secure, and user-friendly.
            Whether you're building a personal portfolio or a large-scale
            application, these principles will help you create a product that
            meets modern standards and exceeds user expectations. Start
            implementing these practices today and take your web development
            skills to the next level!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost2;