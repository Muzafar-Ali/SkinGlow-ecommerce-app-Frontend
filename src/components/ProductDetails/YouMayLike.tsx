"use client";
import { useEffect, useState } from "react";
import { CombinedSingleProductType } from "@/utils/types";
import Link from "next/link";
import ButtonGroup from "../ButtonGroup";
import ProductCard from "../ProductCard";
import config from "@/config/config";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const YouMayLike = ({ product }: { product: CombinedSingleProductType}) => {

  const [similarProducts, setSimilarProducts] = useState<CombinedSingleProductType[]>([]);  
  const [categoryName, setCategoryName] = useState<string>();
  const [mainCategory, setMainCategory] = useState<string>();
  const similarProduct = similarProducts.filter((item) => item.slug != product?.slug) // Skip product on main display
  
  
  useEffect(()=> {
    const fetchSimilarProducts = async (product: CombinedSingleProductType) => {
      const category = 
      product?.categories?.makeup?.cheekMakeupCategory || 
      product?.categories?.makeup?.eyesMakeupCategory ||
      product?.categories?.makeup?.lipsMakeupCategory ||
      product?.categories?.skincare?.skinCareCategory;
      
      let subCategory;
      let mainCategoryInside;

      if (category?.name) {
 
        if (category.name.endsWith('s')) {
          setCategoryName(category.name);
        } else {
          setCategoryName(category.name + 's');
        }
      }       

      if ( product?.categories?.makeup?.cheekMakeupCategory ){
        subCategory = "cheek";
        mainCategoryInside = "makeup";
        setMainCategory("makeup");
      }
      if ( product?.categories?.makeup?.lipsMakeupCategory ){
        subCategory = "lips";
        mainCategoryInside = "makeup";
        setMainCategory("makeup");
      }
      if ( product?.categories?.makeup?.eyesMakeupCategory ){
        subCategory = "eyes";
        mainCategoryInside = "makeup";
        setMainCategory("makeup");
      }
      if ( product?.categories?.skincare?.skinCareCategory ){
        subCategory = "skincare";
        mainCategoryInside = "skincare";
        setMainCategory("skincare");
      }

      try {
        const response = await fetch(`${config.baseUri}/v1/${mainCategoryInside}/category/${subCategory}/${category?.slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) throw new Error(`Failed to fetch similar products: ${response.statusText}`);

        const data = await response.json();
        const similarProducts = data.category?.flatMap((item: any) => item.products) || [];

        setSimilarProducts(similarProducts);
      } catch (error) {
        console.error('Error fetching similar products:', error);
      }
    }

    fetchSimilarProducts(product);

  },[])

  
  const responsive = {
    laptopLarge: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    laptop: {
      breakpoint: { max: 1439, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1023, min: 600 },
      items: 3,
    },
    mobileLarge: {
      breakpoint: { max: 599, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };


  return (
    <div className="w-full max-w-[1520px] mx-auto relative py-6 bg-red-50 mt-[32px] tablet-s:mt-6 laptop-s:pb-20 laptop-s:mb-40">
      <div className="text-black text-xl tablet-s:text-2xl font-bold text-center mb-4 tablet-s:mb-[32px] capitalize leading-[33.60px]">
        <span className='text-pink-800 text-xl tablet-s:text-2xl'>{categoryName}</span> you may like
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        swipeable={true}
        draggable={true}
        itemClass="px-[5px] tablet-s:px-[10px]"
        containerClass="mx-[25px] mobile-m:mx-[30px] mobile-l:mx-[35px] tablet-s:mx-[40px] tablet-m:mx-[60px] laptop-s:mx-[80px] laptop-m:mx-[90px] laptop-l:mx-[100px] py-2"
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {similarProduct?.map((product) => (
          <Link href={`/product-${mainCategory}/${product?.slug}`} key={product?._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default YouMayLike;
