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
  <div className="flex gap-4 w-full px-[8%] py-[1.25%]"> 
    <div className="w-[53%] mx-auto" >
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
    <div className="w-[47%] flex flex-col gap-2">
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
  </div>

  );
};

export default Header;
