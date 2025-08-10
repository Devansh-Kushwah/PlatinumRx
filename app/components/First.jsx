/*

import { FiX } from "react-icons/fi";
//import appleIcon from "@/assets/apple-icon.png";
//import playstoreIcon from "@/assets/playstore-icon.png";
import { FaTimes, FaApple, FaGooglePlay } from "react-icons/fa";
const First = () => {
  return (
    <div className="bg-[#fc5a5a] px-4 py-2 relative">
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="font-medium">Flat ₹100 OFF on First app order</span>
        <span className="text-primary-foreground/80">|</span>
        <span>
          Use Code: <span className="font-bold">APP100</span>
        </span>
        <span className="text-primary-foreground/80">|</span>

        <div className="flex items-center gap-2">
          <span className="font-medium">Download Now</span>
          <div className="flex gap-1">
          <FaApple/>
            <img
              src='/Icon.png'
              alt="Get it on Google Play"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>

    
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded hover:bg-primary-foreground/20 transition"
        aria-label="Close promo bar"
      >
        <FiX className="h-4 w-4" />
      </button>
    </div>
  );
};

export default First;
*/
"use client";
import { useState } from "react";
import { FaTimes, FaApple } from "react-icons/fa";
import Image from "next/image";
export default function First() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-[#fc5a5a] text-white py-2 px-3 relative text-sm sm:text-base hidden md:block">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-6xl mx-auto text-center sm:text-left flex-wrap">
        
        <span className="font-medium">Flat ₹100 OFF on First app order</span>
        <span className="hidden sm:inline opacity-80">|</span>

        <span>
          Use Code: <span className="font-bold">APP100</span>
        </span>
        <span className="hidden sm:inline opacity-80">|</span>

        <button className="flex items-center gap-2 px-3 py-1 bg-white hover:bg-white/30 text-black border border-white/30 rounded text-sm transition">
          <span className="font-medium">Download Now</span>
          <FaApple className="w-4 h-4" />
          <Image src='/Icon.png' alt="" width={4} height={4}   className="w-4 h-4" />
        </button>

      </div>

      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-white/20 p-1 rounded"
        onClick={() => setIsVisible(false)}
      >
        <FaTimes className="w-4 h-4" />
      </button>
    </div>
  );
}

