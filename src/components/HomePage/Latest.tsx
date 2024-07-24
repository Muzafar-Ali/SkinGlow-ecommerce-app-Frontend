"use client";
import Link from "next/link";
import ButtonGroup from "../ButtonGroup";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import { BestSellerType } from "@/utils/types";
import { createURL } from "@/utils/helpers/createURL";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Latest = () => {
  const BASEURL = process.env.NEXT_PUBLIC_BASEURI;

  const [latest, setLatest] = useState<BestSellerType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const responsive = {
    laptopLarge: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    laptopSmall: {
      breakpoint: { max: 1439, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tabletLarge: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    tabletSmall: {
      breakpoint: { max: 767, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    // Fetch best sellers products
    const fetchLatest = async () => {
      try {
        setIsLoading(true);

        // Make multiple fetch requests
        const latestProducts = await Promise.all([
          fetch(`${BASEURL}/v1/makeup/category/featured/latest`),
          fetch(`${BASEURL}/v1/skincare/category/featured/latest`),
        ]);

        // Handle successful response
        const data = await Promise.all(
          latestProducts.map(async (response) => response.json())
        );
        
        const products = data.flatMap( (item) => item?.latestProducts?.products );
        
        setLatest(products);
      } catch (error) {
        // Handle errors during fetching
        console.error("Error fetching best sellers:", error);
        // You can display an error message to the user here
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatest();
  }, []);

  return (
    <div className="w-full max-w-[1520px] mx-auto relative py-6 bg-rose-950 tablet-s:mt-6">
      <div className="text-white text-xl tablet-s:text-2xl font-bold text-center mb-4 tablet-s:mb-[32px] capitalize leading-[33.60px]">
        Latest
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
        {latest?.map((product) => (
          <Link href={createURL(product)} key={product?._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Latest;
