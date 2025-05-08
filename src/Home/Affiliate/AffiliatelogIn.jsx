import React, { useState } from "react";
import { useLoginAffiliateMutation } from "../../app/features/apiSlice";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const AffiliatelogIn = () => {
  const [loginAffiliate] = useLoginAffiliateMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginAffiliate(formData);

      toast.success("Login successful!");
      localStorage.setItem("affiliateToken", response.data.data.token);
      navigate("/affiliate-dashboard");
      window.location.reload();
    } catch (error) {
      toast.error(error?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#246A99] to-[#48a1e9] flex flex-col justify-center items-center text-white px-4 py-8 lg:px-12">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center">
          Welcome to Our Affiliate Program
        </h1>
        <p className="text-base lg:text-lg mb-6 lg:mb-8 text-center px-2">
          Join our community of successful affiliates and start earning today.
          We offer competitive commissions and outstanding support.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-8">
        <div className="max-w-md w-full space-y-6 lg:space-y-8">
          <div>
            <h2 className="mt-2 lg:mt-6 text-center text-2xl lg:text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Access your affiliate dashboard
            </p>
          </div>

          <form
            className="mt-6 lg:mt-8 space-y-4 lg:space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#066FB7] focus:border-[#066FB7] text-sm"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#066FB7] focus:border-[#066FB7] text-sm"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#066FB7] focus:ring-[#066FB7] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm font-medium text-[#066FB7] hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#066FB7] hover:bg-[#055a94] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#066FB7]"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Not registered yet?{" "}
                <a
                  href="/affiliate-signup"
                  className="font-medium text-[#066FB7] hover:text-indigo-500 transition-colors duration-200"
                >
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
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

export default AffiliatelogIn;
