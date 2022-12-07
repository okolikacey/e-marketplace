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

type priceProp = {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
  state?: "New" | "Used" | "Refurbished";
  company: string;
};

type descriptionProp = {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  state?: "New" | "Uesd" | "Refurbished";
  company: string;
};

export type productsType = {
  product: priceProp | descriptionProp;
};
