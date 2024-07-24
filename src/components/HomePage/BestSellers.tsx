"use client";
import Link from "next/link";
import ButtonGroup from "../ButtonGroup";
import ProductCard from "../ProductCard";
import Wrapper from "../Wrapper";
import { useEffect, useState } from "react";
import { BestSellerType } from "@/utils/types";
import { createURL } from "@/utils/helpers/createURL";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSellers = () => {
  const BASEURL = process.env.NEXT_PUBLIC_BASEURI;

  const [bestSeller, setBestSeller] = useState<BestSellerType[]>([]);
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
      breakpoint: { max: 76, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    // Fetch best sellers products
    const fetchBestSellers = async () => {
      try {
        setIsLoading(true)
        const bestSellersProducts = await Promise.all([
          fetch(`${BASEURL}/v1/makeup/category/featured/best-seller`),
          fetch(`${BASEURL}/v1/skincare/category/featured/best-seller`),
        ]);

        // Handle successful response
        const data = await Promise.all(
          bestSellersProducts.map(async (response) => response.json())
        );
        const products = data.flatMap(
          (item) => item.bestSellerProducts.products
        );
        setBestSeller(products);
      } catch (error) {
        // Handle errors during fetching
        console.error("Error fetching best sellers:", error);
      
      } finally {
        setIsLoading(false)
      }
    };

    fetchBestSellers();
  }, []);


  return (
    <Wrapper className="py-12">
      <div className="text-neutral-950 text-xl tablet-s:text-2xl font-bold text-center mb-4 tablet-s:mb-[32px] capitalize leading-[33.60px]">
        Our Best Sellers
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
        {bestSeller?.map((product) => (
          <Link href={createURL(product)} key={product?._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default BestSellers;
