import React from "react";
import { FaWallet, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import userProfile from "../../assets/images/userProfile.png";
import { MdLogout, MdTrendingUp, MdTrendingDown } from "react-icons/md";
import {
  useGetAffiliateDashboardQuery,
  useGetAffiliateTransictionQuery,
} from "../../app/features/apiSlice";
import { PiMoneyWavyFill } from "react-icons/pi";

const AffiliateDashboard = () => {
  const navigate = useNavigate();
  const { data: dashboardData, isLoading } = useGetAffiliateDashboardQuery();
  const { data: transactionData, isLoading: trasactionLoading } =
    useGetAffiliateTransictionQuery();
  console.log(transactionData, "transactionData");
  const handleClick = () => {
    navigate("/affiliate-dashboard/edit-profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("affiliateToken");
    navigate("/affiliate-login");
    window.location.reload();
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#066FB7] to-blue-500 rounded-3xl shadow-lg p-8 mb-8 mt-5">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-36 h-36 rounded-full border-4 border-white/30 overflow-hidden">
                <img
                  src={
                    `https://login.ibrahimtechbd.com//${dashboardData?.affiliate?.profile_image}` ||
                    userProfile
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    {dashboardData?.affiliate?.name || "Loading..."}
                  </h1>
                  <p className="text-white/80 mt-2">
                    {dashboardData?.affiliate?.email || "Loading..."}
                  </p>
                  <p className="text-white/80 mt-1">
                    Member since{" "}
                    {new Date(
                      dashboardData?.affiliate?.created_at
                    ).toLocaleDateString("en-GB") || "Loading..."}
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleClick}
                    className="px-6 py-2.5 bg-white text-[#066FB7] rounded-full hover:bg-blue-50 transition-colors font-medium"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FaWallet className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Available Balance</p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      ৳{dashboardData?.affiliate?.balance || "0"}
                    </h3>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 font-medium text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <MdLogout className="text-xl" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Affiliate Income History Section */}
        <div className="space-y-6 mb-8">
          

          {/* Transaction Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Transaction History
                </h2>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>All time</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto p-5">
              <table className="w-full p-">
                <thead>
                  <tr className="bg-[#0570B9] text-white">
                    <th className="px-6 py-4 text-left text-xs font-semibold  uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold  uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold  uppercase tracking-wider">
                      Amount
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactionData?.transactions?.length > 0 ? (
                    transactionData.transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(transaction.date).toLocaleDateString("en-GB")}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(transaction.date).toLocaleTimeString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{transaction.description}</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="text-sm font-medium text-gray-900">
                            ৳{transaction.amount}
                          </div>
                        </td>
                        
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">
                        <div className="text-center py-8">
                          <h3 className="text-lg text-gray-400">No Transactions Found</h3>
                          <p className="text-sm text-gray-400 mt-1">Your transactions will appear here</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Showing {transactionData?.transactions?.length || 0} transactions</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">Previous</button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
