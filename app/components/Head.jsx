import React from "react";
import Image from "next/image";

const Head = () => {
  return (
    <div className="bg-white w-full py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-8">
        {/* First Image */}
        <Image
          src="/thumbnail.png"
          alt="Thumbnail"
          width={400} // Bigger width
          height={250} // Bigger height
          className="object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />

        {/* Second Image */}
        <Image
          src="/pr.png"
          alt="PR Logo"
          width={400} // Bigger width
          height={250} // Bigger height
          className="object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Head;
