import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSubmitJobMutation } from "../app/features/apiSlice";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiFileText,
  FiUpload,
  FiCheck,
} from "react-icons/fi";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    resume: null,
    summary: "",
  });

  const { slug } = useParams();
  const [submitJob, { isLoading }] = useSubmitJobMutation();
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.firstName);
    formDataToSend.append("last_name", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("cv", formData.resume);
    formDataToSend.append("summary", formData.summary);
    formDataToSend.append("job_id", slug);

    try {
      const response = await submitJob(formDataToSend).unwrap();
      toast.success("Application submitted successfully!");
      console.log("Job application submitted successfully:", response);

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        resume: null,
        summary: "",
      });
      setFileUploaded(false); // Reset file upload state
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Failed to submit application. Please try again."
      );
      console.error("Error submitting job application:", error);
    }
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
    setFileUploaded(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full mb-12">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-100 text-lg"
            >
              Take the next step in your career journey with us.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-center mb-6 text-gray-800"
        >
          Application Form
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                  <FiUser className="mr-2 text-blue-500" />
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                  <FiUser className="mr-2 text-blue-500" />
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                  <FiPhone className="mr-2 text-blue-500" />
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                  <FiMail className="mr-2 text-blue-500" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
            </div>

            {/* File Upload */}
            <motion.div whileHover={{ scale: 1.01 }} className="relative">
              <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                <FiFileText className="mr-2 text-blue-500" />
                Resume
              </label>
              <div
                className={`border-2 border-dashed rounded-xl p-6 text-center ${
                  fileUploaded
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
                {fileUploaded ? (
                  <FiCheck className="text-4xl text-green-400 mb-2 text-center m-auto" />
                ) : (
                  <FiUpload className="text-4xl text-blue-400 mb-2 text-center m-auto" />
                )}
                <p className="text-gray-600">
                  {fileUploaded
                    ? "File uploaded successfully!"
                    : "Drag and drop your resume here"}
                </p>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div whileHover={{ scale: 1.01 }} className="relative">
              <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                <FiFileText className="mr-2 text-blue-500" />
                Summary
              </label>
              <textarea
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us why you'd be a great fit..."
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
