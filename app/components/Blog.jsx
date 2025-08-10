"use client"
import React from "react";
import { SiBlogger } from "react-icons/si";

const Blog = () => {
  const blogs = [
    { id: 1, title: "How to Build a Responsive Website", description: "Learn the basics of creating a website that works on all devices.", image: "/8.webp" },
    { id: 2, title: "Understanding React Hooks", description: "A beginner-friendly guide to useState, useEffect, and more.", image: "/i1.webp" },
    { id: 3, title: "Next.js for Beginners", description: "Get started with server-side rendering and static site generation.", image: "/i2.webp" },
    { id: 4, title: "Tailwind CSS Tips", description: "Style your apps faster with utility-first CSS.", image: "/i3.webp" },
    { id: 5, title: "JavaScript ES2025 Features", description: "A sneak peek at what's coming in JS.", image: "/i4.webp" },
    { id: 6, title: "React Server Components", description: "How RSCs are changing React development.", image: "/i1.webp" },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-[24px] font-bold">Blog Section</h2>
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
