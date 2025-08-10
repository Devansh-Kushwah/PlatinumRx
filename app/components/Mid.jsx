"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCartPlus } from "react-icons/fa";
const whoIcon = "https://www.platinumrx.in/_next/static/media/whoIcon.887be8a6.png?w=256&q=80"

const products = [
  {
    Regular: {
    category: "Glimpide 2mg",
    type: "Regular",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }, 
    Recommended:  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }
  },
  {
    Regular: {
    category: "Glimpide 2mg",
    type: "Regular",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }, 
    Recommended:  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }
  },
  {
    Regular: {
    category: "Glimpide 2mg",
    type: "Regular",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }, 
    Recommended:  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }
  },
  {
    Regular: {
    category: "Glimpide 2mg",
    type: "Regular",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }, 
    Recommended:  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }
  },
  {
    Regular: {
    category: "Glimpide 2mg",
    type: "Regular",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }, 
    Recommended:  {
    category: "Glimpide 2mg",
    type: "Recommended",
    image: "https://platinumrx.gumlet.io/meds-prescription/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png?w=640&q=80",
    title: "Glimda 2mg Tablet 10s",
    brand: "Cipla",
    pack: "Strip of 10 tablets",
    price: 39,
    discount: "40% OFF"
    }
  },
];

export default function Mid() {
  return (
    <div className="px-[8%] py-[1.25%] bg-[#fff]">
          <h2 className="text-[24px] font-bold mb-3">
          The PlatinumRx Advantage</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="ounded-lg ">
            <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
              <div className="bg-red-500 text-white text-sm font-semibold px-2 py-1 text-center">
                {product.Recommended.category}
              </div>
              <div className="flex">
                <div className="p-2">
                  <div className="py-1 text-sm font-medium text-black-600">
                    {product.Regular.type}
                  </div>
                  <div className="flex justify-center bg-[#645df] py-2 w-[64px] border border-[#fafafa] rounded-lg object-contain">
                    <img src={product.Regular.image} alt={product.Regular.title} className="w-[64px] h-[64px] rounded-lg" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{product.Regular.title}</p>
                    <p className="text-blue-900 font-bold">{product.Regular.brand}</p>
                    <p className="text-gray-500">{product.Regular.pack}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-lg">₹{product.Regular.price}</span>
                      {product.Regular.discount && (
                        <span className="text-green-600 text-sm">{product.Regular.discount}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-[#f6fff3]">
                  <div className="py-1 text-sm font-medium text-green-600">
                    {product.Recommended.type}
                  </div>
                  <div className="flex justify-center bg-[#645df] py-2 border border-[#fafafa] rounded-lg object-contain">
                    <img src={product.Recommended.image} alt={product.Recommended.title} className="w-[64px] h-[64px] rounded-lg" />
                    <img src={whoIcon} alt="whoIcon" className="w-[60px] h-[21px] ml-[4px]" />
                  </div>
                  <div className="px-3 text-sm">
                    <p className="font-semibold">{product.Recommended.title}</p>
                    <p className="text-blue-900 font-bold">{product.Recommended.brand}</p>
                    <p className="text-gray-500">{product.Recommended.pack}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-green-600  text-lg">₹{product.Recommended.price}</span>
                      {product.Recommended.discount && (
                        <span className="bg-green-600 text-white px-[4px] py-[2px] text-sm rounded-sm">{product.Recommended.discount}</span>
                      )}
                    </div>
                  </div>
                  <button className="bg-[#fc5a5a] hover:bg-orange-600 text-white w-full flex items-center justify-center gap-2 py-2 mt-2 rounded-lg">
                     Add to Cart
                  </button>
                </div>
              </div>

          
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
