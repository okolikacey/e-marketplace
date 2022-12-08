import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { descriptionProp, priceProp, productsType } from "../../types/commonTypes";
import { productsPropType } from "../../types/propTypes";
import Button from "./Button";

function Product2(props: productsPropType) {
  const { id, image, name, state, company, description, price } = props.product;
  const route = useRouter();

  return (
    <div className="flex flex-col w-[260px]">
      <div
        className={`bg-gray-100 ${
          route.pathname === "/" ? "h-[240px]" : "h-[170px]"
        } rounded-lg flex items-center justify-center my-3 relative`}
      >
        <Image src={image} alt="Image of item" fill={route.pathname === "/" ? false : true} />
        <span
          className={`${
            state === "New" ? "bg-cgreen" : state === "Refurbished" ? "bg-cblack" : "bg-red"
          } absolute top-3 right-4 text-white px-3 text-sm`}
        >
          {state}
        </span>
      </div>
      <div className="flex flex-col h-[180px] justify-center text-center border-2 rounded-lg p-3 border-green-500">
        <b className="text-base">{name}</b>

        <span className={`${price ? "text-cgreen" : "text-[8px]"}`}>{price || description}</span>
        <span>{company}</span>
        <Button text="View Details" />
      </div>
    </div>
  );
}

export default Product2;
