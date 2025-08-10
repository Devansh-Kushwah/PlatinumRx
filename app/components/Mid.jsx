"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCartPlus } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const products = [
  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "/med.avif",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF",
  },
  {
    category: "Metoprolol Succinate 47.5mg",
    type: "Regular",
    image: "/med1.avif",
    title: "Tazloc Beta 50 50/40mg Tablet",
    brand: "USV Ltd.",
    pack: "Strip of 10 tablets",
    price: 209.9,
  },
  {
    category: "Fexofenadine 120mg + Montelukast 10mg",
    type: "Recommended",
    image: "/med2.avif",
    title: "Telcave MT 40/50mg Tablet",
    brand: "Alkem",
    pack: "Strip of 10 tablets",
    price: 148.5,
    discount: "50% OFF",
  },
  {
    category: "Thyroxine 12.5mcg",
    type: "Regular",
    image: "/med1.avif",
    title: "Thyroup 12.5mcg Tablet 120s",
    brand: "Lupin Ltd.",
    pack: "Bottle of 120 tablets",
    price: 198.9,
  },
  {
    category: "Azithromycin 500mg",
    type: "Recommended",
    image: "/med.avif",
    title: "Azip 500mg Tablet 3s",
    brand: "Cipla",
    pack: "Strip of 3 tablets",
    price: 61.8,
    discount: "22% OFF",
  },
];

export default function Mid() {
  return (
    <div className="p-4">
      {/* Container with equal left/right space */}
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-4">
          <IoShieldCheckmarkSharp className="text-3xl text-[#fc5a5a] " />
          <h2 className="text-2xl sm:text-3xl font-bold">
            The PlatinumRx Advantage
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper hide-scrollbar"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <div className="bg-[#fc5a5a] text-white text-sm font-semibold px-2 py-1">
                  {product.category}
                </div>
                <div className="px-2 py-1 text-sm font-medium text-black">
                  {product.type}
                </div>
                <div className="flex justify-center py-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24"
                  />
                </div>
                <div className="px-3 text-sm">
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-blue-500 font-bold">{product.brand}</p>
                  <p className="text-gray-500">{product.pack}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-lg">₹{product.price}</span>
                    {product.discount && (
                      <span className="text-green-600 text-sm">
                        {product.discount}
                      </span>
                    )}
                  </div>
                </div>
                <button className="bg-[#fc5a5a]  hover:bg-[#fc5a5a]  text-white w-full flex items-center justify-center gap-2 py-2 mt-2">
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #fc5a5a ;
          background: white;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}


/*

"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCartPlus } from "react-icons/fa";

const products = [
  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "/med.avif",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
  },
  {
    category: "Metoprolol Succinate 47.5mg",
    type: "Regular",
    image:  "/med1.avif",
    title: "Tazloc Beta 50 50/40mg Tablet",
    brand: "USV Ltd.",
    pack: "Strip of 10 tablets",
    price: 209.9
  },
  {
    category: "Fexofenadine 120mg + Montelukast 10mg",
    type: "Recommended",
    image: "/med2.avif",
    title: "Telcave MT 40/50mg Tablet",
    brand: "Alkem",
    pack: "Strip of 10 tablets",
    price: 148.5,
    discount: "50% OFF"
  },
  {
    category: "Thyroxine 12.5mcg",
    type: "Regular",
    image: "/med1.avif",
    title: "Thyroup 12.5mcg Tablet 120s",
    brand: "Lupin Ltd.",
    pack: "Bottle of 120 tablets",
    price: 198.9
  },
  {
    category: "Azithromycin 500mg",
    type: "Recommended",
    image: "med.avif",
    title: "Azip 500mg Tablet 3s",
    brand: "Cipla",
    pack: "Strip of 3 tablets",
    price: 61.8,
    discount: "22% OFF"
  }
];

export default function Mid() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">The PlatinumRx Advantage</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
              <div className="bg-[#fc5a5a] text-white text-sm font-semibold px-2 py-1">
                {product.category}
              </div>
              <div className="px-2 py-1 text-sm font-medium text-black">
                {product.type}
              </div>
              <div className="flex justify-center py-2">
                <img src={product.image} alt={product.title} className="h-24" />
              </div>
              <div className="px-3 text-sm">
                <p className="font-semibold">{product.title}</p>
                <p className="text-blue-500 font-bold">{product.brand}</p>
                <p className="text-gray-500">{product.pack}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-lg">₹{product.price}</span>
                  {product.discount && (
                    <span className="text-green-600 text-sm">{product.discount}</span>
                  )}
                </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white w-full flex items-center justify-center gap-2 py-2 mt-2">
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

*/