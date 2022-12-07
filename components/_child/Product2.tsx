import Image, { StaticImageData } from "next/image";
import React from "react";
import { productsType } from "../../types/commonTypes";
import Button from "./Button";

function Product2(props: productsType) {
  const { id, image, name, state, company, ...args } = props.product;

  return (
    <div className="flex flex-col w-[260px]">
      <div className="bg-gray-100 h-[240px] rounded-lg flex items-center justify-center my-3 relative">
        <Image src={image} alt="Image of item" />
        <span
          className={`${
            state === "New" ? "bg-cgreen" : state === "Used" ? "bg-red-600" : "bg-cblack"
          } absolute top-3 right-4 text-white px-3 text-sm`}
        >
          {state}
        </span>
      </div>
      <div className="flex flex-col h-[180px] justify-center text-center border-2 rounded-lg p-3 border-green-500">
        <b className="text-base">{name}</b>

        <span className={`${args.price ? "text-cgreen" : "text-[8px]"}`}>
          {args.price || args.description}
        </span>
        <span>{company}</span>
        <Button text="View Details" />
      </div>
    </div>
  );
}

export default Product2;
