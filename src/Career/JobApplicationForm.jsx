import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiFileText, FiUpload, FiBriefcase, FiCalendar, FiCheck } from 'react-icons/fi';

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    const [fileUploaded, setFileUploaded] = useState(false);
    const handleFileUpload = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
        setFileUploaded(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Full Width Hero Section */}
            <div className="relative h-[500px] w-full mb-12">
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
                            className="text-6xl font-bold text-white mb-6"
                        >
                            Join Our Team
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-100 text-2xl max-w-2xl"
                        >
                            Take the next step in your career journey with us and be part of something extraordinary
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Form Container */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl font-bold text-center mb-8 text-gray-800"
                >
                    Application Form
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-center text-gray-600 mb-6"
                >
                    Fill out the form below to apply for a position with us.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                                    <FiUser className="mr-2 text-[#2D7EB5] text-lg" />
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D7EB5] focus:border-transparent"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                                    <FiMail className="mr-2 text-[#2D7EB5] text-lg" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D7EB5] focus:border-transparent"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                                    <FiPhone className="mr-2 text-[#2D7EB5] text-lg" />
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D7EB5] focus:border-transparent"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                                    <FiBriefcase className="mr-2 text-[#2D7EB5] text-lg" />
                                    Position Applied For
                                </label>
                                <select
                                    name="position"
                                    value={formData.position}
                                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                    className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D7EB5] focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Position</option>
                                    <option value="software-engineer">Software Engineer</option>
                                    <option value="ui-designer">UI Designer</option>
                                    <option value="project-manager">Project Manager</option>
                                </select>
                            </motion.div>
                        </div>

                        {/* File Upload Section */}

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            {/* File Upload Area */}
                            <div className="relative group">
                                <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                                    <FiFileText className="mr-2 text-[#2D7EB5] text-lg" />
                                    Resume
                                </label>
                                <div className={`border-2 border-dashed  rounded-xl p-10 text-center
                                                     ${fileUploaded ? 'border-green-400 bg-green-400/10' : 'border-gray-300 '}
                                                     transition-all duration-300`}>

                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileUpload}
                                    />
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col items-center"
                                    >
                                        {fileUploaded ? (
                                            <FiCheck className="text-5xl text-green-400 mb-4" />
                                        ) : (
                                            <FiUpload className="text-5xl text-blue-400 mb-4" />
                                        )}
                                        <p className="text-gray-200 text-lg mb-2">
                                            {fileUploaded ? 'File uploaded successfully!' : 'Drag and drop your resume here'}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Cover Letter */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="relative"
                        >
                            <label className="flex items-center text-lg font-medium text-gray-700 mb-1">
                                <FiFileText className="mr-2 text-[#2D7EB5] text-lg" />
                                Cover Letter
                            </label>
                            <textarea
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D7EB5] focus:border-transparent"
                                placeholder="Tell us why you'd be a great fit..."
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#2D7EB5] hover:bg-[#246a98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D7EB5] text-lg font-medium transition-all duration-200"
                        >
                            Submit Application
                        </motion.button>
                    </form>

                    {/* File type note */}
                    <div className="px-8 pb-6">
                        <p className="text-center text-gray-500 text-sm">
                            Supported file types: PDF, DOC, DOCX | Maximum file size: 5MB
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default JobApplicationForm;