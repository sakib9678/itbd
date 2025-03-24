// import React from "react";
// import SectionHeader from "./SectionHeader";
// import websiteIcon from "../assets/images/coding.png";

// const AllService = () => {
//   const services = [
//     {
//       title: "Website Development",
//       description:
//         "Professional website development services with modern technologies and responsive design.",
//       icon: websiteIcon,
//     },
//     {
//       title: "App Development",
//       description:
//         "Custom mobile application development for iOS and Android platforms.",
//       icon: websiteIcon,
//     },
//     {
//       title: "E-Commerce Solutions",
//       description:
//         "Complete e-commerce solutions with secure payment integration and inventory management.",
//       icon: websiteIcon,
//     },
//     {
//       title: "Online Training Programs",
//       description:
//         "Interactive online training programs with comprehensive learning materials.",
//       icon: websiteIcon,
//     },
//     {
//       title: "Business Investment Opportunities",
//       description:
//         "Strategic business investment consulting and opportunity analysis.",
//       icon: websiteIcon,
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-200">
//       <div className="container mx-auto px-4">
//         <SectionHeader
//           startTitle={"Best Services"}
//           title={"Our Business Consultation Factory"}
//           subTitle={"Provided Services"}
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//             >
//               {/* Icon and Title */}
//               <div className="flex flex-col items-center text-center mb-6">
//                 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
//                   <img src={service.icon} alt="" className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{service.description}</p>
//               </div>

//               {/* Button */}
//               <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
//                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center items-center mt-5">
//           <button className="h-10 w-36 bg-[#1D4ED8] text-white font-semibold rounded-lg p-2 hover:translate-y-2">
//             View All Service
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllService;
