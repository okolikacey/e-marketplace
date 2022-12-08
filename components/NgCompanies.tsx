import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Card from "./_child/Card";

import Company from "./_child/Company";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css/navigation";
import { ngCompaniesDATA } from "../data/sample";

function NgCompanies() {
  return (
    <Card cardStyle="bg-clightgreen">
      {/* TO-DO add manual slider */}
      <div className="mt-3 mb-10 text-xl px-4">
        <b>Oil and Gas Companies in Nigeria</b>
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
          className="w-6/7"
          slidesPerView={5}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          modules={[Navigation]}
        >
          {ngCompaniesDATA.map((company) => (
            <SwiperSlide>
              <Company key={company.id} image={company.image} />
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

export default NgCompanies;
