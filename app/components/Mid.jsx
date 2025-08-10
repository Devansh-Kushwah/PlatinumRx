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
    image: "https://via.placeholder.com/120x120.png?text=Glimpide",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
  },
  {
    category: "Metoprolol Succinate 47.5mg",
    type: "Regular",
    image: "https://via.placeholder.com/120x120.png?text=Beta+50",
    title: "Tazloc Beta 50 50/40mg Tablet",
    brand: "USV Ltd.",
    pack: "Strip of 10 tablets",
    price: 209.9
  },
  {
    category: "Fexofenadine 120mg + Montelukast 10mg",
    type: "Recommended",
    image: "https://via.placeholder.com/120x120.png?text=Telcave",
    title: "Telcave MT 40/50mg Tablet",
    brand: "Alkem",
    pack: "Strip of 10 tablets",
    price: 148.5,
    discount: "50% OFF"
  },
  {
    category: "Thyroxine 12.5mcg",
    type: "Regular",
    image: "https://via.placeholder.com/120x120.png?text=Thyroup",
    title: "Thyroup 12.5mcg Tablet 120s",
    brand: "Lupin Ltd.",
    pack: "Bottle of 120 tablets",
    price: 198.9
  },
  {
    category: "Azithromycin 500mg",
    type: "Recommended",
    image: "https://via.placeholder.com/120x120.png?text=Azip",
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
              <div className="bg-red-500 text-white text-sm font-semibold px-2 py-1">
                {product.category}
              </div>
              <div className="px-2 py-1 text-sm font-medium text-green-600">
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
