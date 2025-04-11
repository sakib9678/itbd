import React from 'react';

const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingCard = ({ plan }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow hover:border-2 border-[#2D7EB5] flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <p className="mt-4 text-gray-600">{plan.description}</p>
        <p className="mt-8">
          <span className="text-4xl font-extrabold">${plan.price}</span>
          <span className="text-gray-600">/month</span>
        </p>
        <ul className="mt-6 space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon />
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button 
        className={`mt-8 bg-[#2D7EB5] text-white rounded-md py-2 hover:bg-blue-700 transition-colors
          ${plan.name === 'Basic' ? 'w-4/5 mx-auto' : 'w-full'}`}
      >
        {plan.buttonText}
      </button>
    </div>
  );

const SoftwarePricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'For small projects',
      price: 200,
      features: [
        '6 Months Support',
        'Permitted for one domain',
        'Whatsapp Support',
        'Free Installation cpanel'
      ],
      buttonText: 'Get Started'
    },
    {
      name: 'Advance',
      description: 'For growing businesses',
      price: 350,
      features: [
        'Life Time Update',
        'Permitted for one domain',
        'For personal project',
        'Email Support',
        'Skype Support',
        'Anydesk Support',
        'Whatsapp Support',
        'Free Installation cpanel'
      ],
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      description: 'For large organizations',
      price: 500,
      features: [
        'Life Time Update',
        'Permitted for one domain',
        'For personal project',
        'Email Support',
        'Skype Support',
        'Anydesk Support',
        'Whatsapp Support',
        'Free Installation cpanel'
      ],
      buttonText: 'Get Started'
    }
  ];

  return (
    <div className="container mx-auto px-4 bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold animated-text2 sm:text-4xl">
            Software Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwarePricing;