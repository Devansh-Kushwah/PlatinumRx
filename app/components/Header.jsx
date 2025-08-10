"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

const Header = () => {
  const images = [
    "/banner1.avif",
    "/Ki.png",
    "/Ki.png"
  ];

  return (
    <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
      <SwiperSlide>
        <div className="flex gap-2 p-4 pl-20 pr-24 ml-12 mr-20  mx-auto w-full max-w-[1250px]">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src={images[0]}
              alt="Left"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Two Images */}
          <div className="flex flex-col flex-1 gap-2">
            <img
              src={images[1]}
              alt="Right Top"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src={images[2]}
              alt="Right Bottom"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
