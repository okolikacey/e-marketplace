import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Card from "./_child/Card";
import Product from "./_child/Product";

import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { prodCatDATA } from "../data/sample";

function ProductCategories() {
  return (
    <Card>
      {/* TO-DO add manual slider */}
      <div className="mt-3 mb-10 text-xl px-4">
        <b>
          Browse through major <span className="text-cgreen">Product Categories</span>
        </b>
      </div>
      <div className="flex flex-row items-center my-4">
        <div className="w-1/7">
          <div
            onClick={() => console.log("forward")}
            className="bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center prev cursor-pointer"
          >
            <IoIosArrowBack />
          </div>
        </div>
        <Swiper
          slidesPerView={8}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          modules={[Navigation]}
        >
          {prodCatDATA.map((product) => (
            <SwiperSlide>
              <Product key={product.id} image={product.image} name={product.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-1/7">
          <div className="bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center basis-1 next cursor-pointer">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProductCategories;
