import React, { useState, useEffect } from "react";
import { FaUser, FaMapMarkerAlt, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUpdateAffiliateProfileMutation, useGetAffiliateDashboardQuery } from "../../app/features/apiSlice";
import { toast } from 'react-hot-toast';
import userProfile from "../../assets/images/userProfile.png";

const AffiliateEditProfile = () => {
  const navigate = useNavigate();
  const [updateProfile, { isLoading }] = useUpdateAffiliateProfileMutation();
  const { data: dashboardData } = useGetAffiliateDashboardQuery();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    profile_image: "",
  });

  useEffect(() => {
    if (dashboardData) {
      setFormData({
        name: dashboardData.name || "",
        address: dashboardData.address || "",
        image: dashboardData.profile_image || userProfile
      });
    }
  }, [dashboardData]);
  useEffect(() => {
    return () => {
      // Cleanup function to revoke object URL
      if (formData.image && formData.image.startsWith("blob:")) {
        URL.revokeObjectURL(formData.image);
      }
    };
  }, [formData.image]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
// Add this after the handleInputChange function
const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Create a URL for preview
    const imageUrl = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
      profile_image: file, // Store the actual file for submission
    }));
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile(formData).unwrap();
      if (response.success) {
        toast.success('Profile updated successfully!');
        navigate("/affiliate-dashboard");
      } else {
        toast.success(response.message || 'Update failed');
        
      }
    } catch (error) {
      toast.error( "Failed to update profile");
      // console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-8 mb-6 text-white">
          <div className="flex flex-col items-center">
          <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white/30 overflow-hidden">
                <img
                  src={formData.image || userProfile}
                  // src={userProfile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <FaCamera className="text-blue-600 text-xl" />
                <input
                  type="file"
                  id="profileImage"
                  name="profile_image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <h2 className="text-2xl font-bold mt-4">Edit Your Profile</h2>
            <p className="text-blue-100">Update your personal information</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-gray-700 font-medium block mb-1">
                  Full Name
                </label>
                <div className="flex items-center border-2 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all duration-300 hover:border-blue-300">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="flex-1 outline-none text-gray-700"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Address Input */}
              <div className="space-y-2">
                <label className="text-gray-700 font-medium block mb-1">
                  Address
                </label>
                <div className="flex items-center border-2 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-colors">
                  <FaMapMarkerAlt className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="flex-1 outline-none text-gray-700"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
              
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-[#0570B9] text-white rounded-xl px-8 py-3 font-medium transition-all duration-300 hover:bg-[#0461a1] transform hover:scale-[1.02]"
              >
                {isLoading ? "Saving..." : "Save Changes"}
                
              </button>
              <button
                type="button"
                className="flex-1 border-2 border-gray-300 text-gray-600 rounded-xl px-8 py-3 font-medium hover:bg-gray-50 transition-all duration-300 hover:border-gray-400 transform hover:scale-[1.02]"
                onClick={() => navigate("/affiliate-dashboard")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffiliateEditProfile;
