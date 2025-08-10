"use client";
import React from "react";
import { IoChatbubblesSharp } from "react-icons/io5";

const Custom = () => {
  const customers = [
    { id: 1, name: "John Doe | 55", feedback: "This service is amazing! Highly recommend to everyone.", image: "/c1.webp" },
    { id: 2, name: "Sarah Johnson | 44", feedback: "Great experience, friendly team and fast results.", image: "/c2.webp" },
    { id: 3, name: "Michael Lee | 49", feedback: "Top-notch quality and excellent support.", image: "/c3.webp" },
    { id: 4, name: "Emma Williams | 64", feedback: "Exceeded my expectations, will use again.", image: "/c4.webp" },
    { id: 5, name: "David Smith | 84", feedback: "They made the whole process so easy and stress-free.", image: "/c5.webp" },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="flex items-center gap-2 mb-6">
          <IoChatbubblesSharp className="text-3xl text-blue-500" />
          <h2 className="text-2xl font-bold">Hear from our happy customers</h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center p-4"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{customer.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{customer.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Custom;



   

/*"use client";
import React from "react";
import { IoChatbubblesSharp } from "react-icons/io5";

const Custom = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe | 55",
      feedback: "This service is amazing! Highly recommend to everyone.",
      image: "/c1.webp",
    },
    {
      id: 2,
      name: "Sarah Johnson | 44 ",
      feedback: "Great experience, friendly team and fast results.",
      image: "/c2.webp",
    },
    {
      id: 3,
      name: "Michael Lee | 49 ",
      feedback: "Top-notch quality and excellent support.",
      image: "/c3.webp",
    },
    {
      id: 4,
      name: "Emma Williams | 64 ",
      feedback: "Exceeded my expectations, will use again.",
      image: "/c4.webp",
    },
    {
      id: 5,
      name: "David Smith | 84 ",
      feedback: "They made the whole process so easy and stress-free.",
      image: "/c5.webp",
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="flex items-center gap-2 mb-6">
          <IoChatbubblesSharp className="text-3xl text-blue-500" />
          <h2 className="text-2xl font-bold">Hear from our happy customers</h2>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:overflow-visible overflow-x-auto scrollbar-hide">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center p-4 min-w-[250px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-0"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{customer.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{customer.feedback}</p>
            </div>
          ))}
        </div>
      </div>

     
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Custom;
*/