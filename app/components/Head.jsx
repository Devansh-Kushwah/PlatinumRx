"use client";
import React from "react";
import Image from "next/image";

const Head = () => {
  return (
    <div className="bg-white w-full  py-8">
      <div className="max-w-7xl mx-auto px-0 gap-2 flex flex-col sm:flex-row items-center justify-center gap-0">
        
        {/* First Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src="/thumbnail.png"
            alt="Thumbnail"
            width={480}
            height={200}
            className="w-full h-auto object-cover rounded-none"
          />
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src="/pr.png"
            alt="PR Logo"
            width={480}
            height={340}
            className="w-full h-auto object-cover rounded-none"
          />
        </div>

      </div>
    </div>
  );
};

export default Head;
