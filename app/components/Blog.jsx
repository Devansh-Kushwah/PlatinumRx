/* import React from "react";
import { SiBlogger } from "react-icons/si";
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Build a Responsive Website",
      description: "Learn the basics of creating a website that works on all devices.",
      image: "/8.webp",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      description: "A beginner-friendly guide to useState, useEffect, and more.",
      image: "/i1.webp",
    },
    {
      id: 3,
      title: "Next.js for Beginners",
      description: "Get started with server-side rendering and static site generation.",
      image: "/i2.webp",
    },

     {
      id: 4,
      title: "Next.js for Beginners",
      description: "Get started with server-side rendering and static site generation.",
      image: "/i3.webp",
    }, {
      id: 5,
      title: "Next.js for Beginners",
      description: "Get started with server-side rendering and static site generation.",
      image: "/i4.webp",
    },
     {
      id: 6,
      title: "Next.js for Beginners",
      description: "Get started with server-side rendering and static site generation.",
      image: "/i1.webp",
    },

  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <SiBlogger />
        <h2 className="text-2xl font-bold mb-6">
            Blog Section</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
*/
"use client"
import React from "react";
import { SiBlogger } from "react-icons/si";

const Blog = () => {
 const blogs = [
  {
    id: 1,
    title: "Understanding Hypertension: Causes and Treatment",
    description:
      "Explore the causes of high blood pressure and the latest treatment options.",
    image: "/8.webp",
  },
  {
    id: 2,
    title: "The Role of Antibiotics in Modern Medicine",
    description:
      "Learn how antibiotics work and their impact on bacterial infections.",
    image: "/i1.webp",
  },
  {
    id: 3,
    title: "Managing Diabetes: Tips for a Healthy Lifestyle",
    description:
      "Discover effective ways to manage blood sugar levels through diet and exercise.",
    image: "/i2.webp",
  },
  {
    id: 4,
    title: "Vaccines: How They Protect Us from Disease",
    description:
      "An overview of vaccines, how they work, and why immunization matters.",
    image: "/i3.webp",
  },
  {
    id: 5,
    title: "Mental Health Awareness: Recognizing Anxiety and Depression",
    description:
      "Understand the symptoms and coping strategies for common mental health conditions.",
    image: "/i4.webp",
  },
  {
    id: 6,
    title: "Basics of Cardiology: Understanding Heart Diseases",
    description:
      "Learn about common heart conditions and preventive measures for a healthy heart.",
    image: "/i5.webp",
  },
];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <SiBlogger className="text-3xl text-[#fc5a5a]" />
          <h2 className="text-2xl font-bold">Blog Section</h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="min-w-[300px] sm:min-w-[320px] md:min-w-[350px] bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar with Tailwind CSS */}
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

export default Blog;
