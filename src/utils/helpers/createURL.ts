import { BestSellerType } from "../types";

export const createURL = (product: BestSellerType) => {
    let category;
    if(product.categories.skincare) category = "skincare" 
    if(product.categories.makeup) category = "makeup"

    return `/product-${category}/${product?.slug}`
  };