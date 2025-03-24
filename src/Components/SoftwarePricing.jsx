import React from 'react'

const SoftwarePricing = () => {
return (
    <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Software Pricing Plans
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    Choose the perfect plan for your needs
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Basic Plan */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative hover:border-2 border-[#2D7EB5]">
                    <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                    <p className="mt-4 text-gray-600">For small projects</p>
                    <p className="mt-8">
                        <span className="text-4xl font-extrabold">$200</span>
                        <span className="text-gray-600">/month</span>
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">6 Months Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Permitted for one domain</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Whatsapp Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Free Installation cpanel</span>
                        </li>
                    </ul>
                    <button className="mt-8 w-[80%] bg-[#2D7EB5] text-white rounded-md py-2 hover:bg-blue-700 transition-colors absolute bottom-5 left-10">
                        Get Started
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow hover:border-2 border-[#2D7EB5]">
                    <h3 className="text-2xl font-bold text-gray-900">Advance</h3>
                    <p className="mt-4 text-gray-600">For growing businesses</p>
                    <p className="mt-8">
                        <span className="text-4xl font-extrabold">$350</span>
                        <span className="text-gray-600">/month</span>
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Life Time Update</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Permitted for one domain</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">For personal project</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Email Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Skype Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Anydesk Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Whatsapp Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Free Installation cpanel</span>
                        </li>
                    </ul>
                    <button className="mt-8 w-full bg-[#2D7EB5] text-white rounded-md py-2 hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow hover:border-2 border-[#2D7EB5]">
                    <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                    <p className="mt-4 text-gray-600">For large organizations</p>
                    <p className="mt-8">
                        <span className="text-4xl font-extrabold">$500</span>
                        <span className="text-gray-600">/month</span>
                    </p>
                    <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Life Time Update</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Permitted for one domain</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">For personal project</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Email Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Skype Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Anydesk Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Whatsapp Support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="ml-2">Free Installation cpanel</span>
                        </li>
                    </ul>
                    <button className="mt-8 w-full bg-[#2D7EB5] text-white rounded-md py-2 hover:bg-blue-700 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default SoftwarePricing