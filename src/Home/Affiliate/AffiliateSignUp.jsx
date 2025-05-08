import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRocket,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRegisterAffiliateMutation } from "../../app/features/apiSlice";
import { useNavigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

const AffiliateSignUp = () => {
  const [registerAffiliate] = useRegisterAffiliateMutation();
  const [loadding, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    affiliateid: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerAffiliate(formData).unwrap();
      setLoading(false);
      if (response) {
        toast.success("Registration successful!");
        navigate("/affiliate-login"); // Redirect to login page
        // Optional: Clear form or redirect
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: "",
          affiliateid: "",
        });
      }
    } catch (error) {
      setLoading(false);
      // console.error('API Error:', error);
      toast.error(error?.data?.message || "Registration failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto py-5 sm:py-10 flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#246A99] to-[#48a1e9] p-6 sm:p-12 text-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
            Join Our Affiliate Program
          </h2>
          <p className="text-base sm:text-xl mb-8">
            Transform your influence into income with our industry-leading
            affiliate partnership.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <FaRocket className="text-2xl sm:text-3xl mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  High Commission Rates
                </h3>
                <p className="text-sm sm:text-base text-gray-100">
                  Earn competitive commissions for every successful referral
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaDollarSign className="text-2xl sm:text-3xl mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Quick Payouts
                </h3>
                <p className="text-sm sm:text-base text-gray-100">
                  Get paid reliably with our monthly payment system
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaUsers className="text-2xl sm:text-3xl mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Dedicated Support
                </h3>
                <p className="text-sm sm:text-base text-gray-100">
                  Access exclusive resources and marketing materials
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/10 rounded-xl flex flex-col items-center justify-center">
            <p className="text-base sm:text-lg mb-2">
              Already have an account?
            </p>
            <button
              onClick={() => (window.location.href = "/affiliate-login")}
              className="h-10 w-28 bg-white rounded-full text-[#056FB7] shadow-md hover:shadow-lg transition-shadow"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 overflow-y-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-lg mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#246A99] mb-6">
              Create Your Affiliate Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                {/* Form Fields */}
                <div className="relative">
                  <label className="text-gray-700 text-sm font-bold mb-2 block">
                    Full Name
                  </label>
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 absolute left-3" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#246A99] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-700 text-sm font-bold mb-2 block">
                    Affiliate ID
                  </label>
                  <div className="flex items-center">
                    <FaUsers className="text-gray-400 absolute left-3" />
                    <input
                      type="text"
                      name="affiliateid"
                      value={formData.affiliateid}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#246A99] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-700 text-sm font-bold mb-2 block">
                    Email
                  </label>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 absolute left-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#246A99] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-700 text-sm font-bold mb-2 block">
                    Phone Number
                  </label>
                  <div className="flex items-center">
                    <FaPhone className="text-gray-400 absolute left-3" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#246A99] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="text-gray-700 text-sm font-bold mb-2 block">
                      Password
                    </label>
                    <div className="flex items-center">
                      <RiLockPasswordFill className="text-gray-400 absolute left-3" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#246A99] focus:border-transparent text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-gray-700 text-sm font-bold mb-2 block">
                      Confirm Password
                    </label>
                    <div className="flex items-center">
                      <RiLockPasswordFill className="text-gray-400 absolute left-3" />
                      <input
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#246A99] focus:border-transparent text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#246A99] to-[#48a1e9] text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-lg transition-all duration-300 mt-6"
                  type="submit"
                >
                  {loadding ? "Loading..." : "Create Account"}
                </motion.button>

                <p className="text-xs sm:text-sm text-center text-gray-600 mt-4">
                  By submitting this form, you agree to our{" "}
                  <a href="/terms" className="text-[#246A99] hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-[#246A99] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#fff",
            color: "#000",
          },
        }}
      />
    </div>
  );
};

export default AffiliateSignUp;
