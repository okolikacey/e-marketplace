import { StaticImageData } from "next/image";

export type optionType = {
  id: number;
  isActive: boolean;
  name: string;
};

export type filterType = {
  id: number;
  sectionName: string;
  options: optionType[];
};

export interface priceProp {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
  description?: undefined;
  state?: "New" | "Used" | "Refurbished";
  company: string;
}

export interface descriptionProp {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  price?: undefined;
  state?: "New" | "Uesd" | "Refurbished";
  company: string;
}

export type productsType = priceProp | descriptionProp;
