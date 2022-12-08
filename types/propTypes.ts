import { type } from "os";
import { filterType, optionType, productsType } from "./commonTypes";

export type filterPropType = {
  data: filterType[];
};

export type filterItemPropType = {
  data: filterType;
};

export type filterOptionPropType = {
  data: optionType[];
  parentId: string;
};

export type productsPropType = {
  product: productsType;
};
