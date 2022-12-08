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

export type priceProp = {
  id: number;
  image: StaticImageData;
  name: string;
  price?: string;
  state?: "New" | "Used" | "Refurbished";
  company: string;
};

export type descriptionProp = {
  id: number;
  image: StaticImageData;
  name: string;
  description?: string;
  state?: string;
  company: string;
};

export type productsType = priceProp | descriptionProp;
