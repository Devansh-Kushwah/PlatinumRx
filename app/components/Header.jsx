"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Pagination, EffectCreative } from 'swiper/modules';

const Header = () => {
  const images = [
    "https://platinumrx.gumlet.io/assets/banner1.webp?w=1920&q=75",
    "https://platinumrx.gumlet.io/assets/banner4.webp?w=1920&q=75",
    "https://platinumrx.gumlet.io/assets/banner2.webp?w=1920&q=75",
    "https://platinumrx.gumlet.io/assets/banner3.webp?w=1920&q=75",
  ];

  const rightImages = [
        "/Ki.png",
    "https://www.platinumrx.in/_next/static/media/UploadPrescription.fa9fd3da.png"
  ]

  return (
  <div className="flex gap-4 w-full px-[8%] py-[1.25%] flex-col md:flex-row "> 
    <div className="w-full md:w-[53%] mx-auto" >
      <Swiper
        className="slidesContainer"
        effect='creative'
        creativeEffect={{
          prev: { translate: [0, 0, -400] },
          next: { translate: ['100%', 0, 0] },
        }}
        modules={[Pagination, EffectCreative]}
        loop={true}
        slidesPerView={1}
        spaceBetween={25}      
        speed={1000}
        updateOnWindowResize={true}
        observer={true}
        observeParents={true}
        pagination={{
          clickable: true,
        }}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index}  className="eachslide">
            <img
              src={slide}
              alt={`images`}
              className="w-[100%]"
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="hidden md:flex w-[47%] flex-col gap-2">
      <img
        src={rightImages[0]}
        alt="Right Top"
        className="w-auto h-full object-cover rounded-lg"
      />
      <img
        src={rightImages[1]}
        alt="Right Bottom"
        className="w-atuo h-full object-cover rounded-lg"
      />
    </div>
    <div className="md:hidden w-full">
        <div className="bg-white border border-[#d8d8d8] rounded-lg">
          {/* Top Row - Order with Prescription */}
          <div className="px-3 py-2 flex bg-[#ffefef] rounded-md items-center justify-between">
            <div className="">
              <h3 className="font-bold text-black text-sm">Order with Prescription</h3>
            </div>
            <button className="bg-[#fc5a5a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-sm font-medium">Upload</span>
            </button>
          </div>
          
          {/* Bottom Row - Call Us */}
          <div className="flex items-center justify-between px-3 py-2">
            <p className="text-gray-500 text-sm">or Call us on +91 96069 73756</p>
            <button className="bg-[#fc5a5a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">Call Us</span>
            </button>
          </div>
        </div>
      </div>
  </div>

  );
};

export default Header;
