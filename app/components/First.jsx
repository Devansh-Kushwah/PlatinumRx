"use client";
import { useState } from "react";
import { FaTimes, FaApple } from "react-icons/fa";
import Image from "next/image";

export default function First() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-[#fc5a5a] text-white py-2 px-4 relative text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-6xl mx-auto text-center sm:text-left flex-wrap">
        <span className="font-medium">Flat ₹100 OFF on First app order</span>

        <span className="hidden sm:inline opacity-80 select-none">|</span>

        <span>
          Use Code: <span className="font-bold">APP100</span>
        </span>

        <span className="hidden sm:inline opacity-80 select-none">|</span>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-1 bg-white bg-opacity-90 hover:bg-opacity-75 text-black border border-white/30 rounded text-sm transition"
          aria-label="Download app"
        >
          <span className="font-medium">Download Now</span>
          <FaApple className="w-5 h-5" />
          <Image src="/Icon.png" alt="Google Play Store" width={20} height={20} />
        </button>
      </div>

      <button
        type="button"
        aria-label="Close promo bar"
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/30 transition"
      >
        <FaTimes className="w-5 h-5" />
      </button>
    </div>
  );
}
