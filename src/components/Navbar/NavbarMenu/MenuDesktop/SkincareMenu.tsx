"use client"
import { cn } from '@/lib/utils';
import { useFetchCategories } from '@/hooks/useFetchCategories';
import { CategoryType, SkinCareProductType } from '@/utils/types';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

type SkincareDesktopMenuProps = {
  dropdownStates: boolean[]
  index: number;
  menuCategory: string;
  handleLinkClick: () => void;
}

const SkincarepMenuDesktop = ({ dropdownStates, index, menuCategory,  handleLinkClick }: SkincareDesktopMenuProps) => {
  const [featuredCategory, setFeaturedCategory] = useState<CategoryType[]>([]);
  const [skinCareCategory, setSkinCareCategory] = useState<CategoryType[]>([]);
  const [skinConditionCategory, setSkinConditionCategory] = useState<CategoryType[]>([]);
  const [collection, setCollection] = useState<SkinCareProductType[]>([]);
  
  const BASEURL = process.env.NEXT_PUBLIC_BASEURI;
  
  useFetchCategories(`${BASEURL}/v1/skincare/category/skincare/all`, setSkinCareCategory);
  useFetchCategories(`${BASEURL}/v1/skincare/category/skincondition/all`, setSkinConditionCategory);
  useFetchCategories(`${BASEURL}/v1/skincare/category/featured/all`, setFeaturedCategory)
 
  useEffect(() => {
    const getCollection = async () => {
      try {
        const response = await fetch(`${BASEURL}/v1/skincare/collection`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCollection(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getCollection();
  }, []);
  
  return (
    <div className={cn(
      dropdownStates[index] && menuCategory === "skincare" ? "block opacity-100 z-10 max-h-[365px] overflow-hidden":"block opacity-0 -z-10 overflow-hidden max-h-0",
      "absolute top-[106px] left-0 py-[16px] max-w-[1520px] border bg-background_custom px-5 laptop-m:px-20 transition-all duration-300 ease-in-out",
      "flex justify-between gap-[64px] w-full")
      }
    >
      {/* trending */}
      <div className='flex flex-col gap-1 capitalize'>
        {featuredCategory?.map((items) => (
          <Link
            href={`/skincare`}
            key={items._id}
            onClick={handleLinkClick}
          >
            <span className='text-neutral-950 text-base font-bold capitalize leading-snug hover:text-pink-800'>{ items.name }</span>
          </Link>
        ))}
      </div>

      {/* category */}
      <div className='flex flex-col gap-1 capitalize'>
        <h2 className='text-neutral-950 text-base font-bold capitalize leading-snug mb-2'>Category</h2>
          {skinCareCategory.map((items) => (
            <Link
              href={`/skincare`}
              key={items._id}
              onClick={handleLinkClick}
            >
              <span className='text-neutral-950 text-sm font-normal capitalize leading-[25.20px] hover:text-pink-800 hover:font-semibold'>{ items.name }</span>
            </Link>
          ))}
      </div>

      {/* skin Conditions */}
      <div className='flex flex-col gap-1 capitalize'>
        <h2 className='text-neutral-950 text-base font-bold capitalize leading-snug mb-2'>Skin Conditions</h2>
        {skinConditionCategory.map((items) => (
          <Link 
            href={`/skincare`}
            key={items._id}
            onClick={handleLinkClick}
          > 
            <span className='text-neutral-950 text-sm font-normal capitalize leading-[25.20px] hover:text-pink-800 hover:font-semibold'>{ items.name }</span>
          </Link>
        ))}
      </div>

      {/* collection */}
      <div className='flex flex-col gap-1 capitalize'>
        <h2 className='text-neutral-950 text-base font-bold capitalize leading-snug mb-2'>Collection</h2>
        {collection.map((item) => (
          <Link 
            href={`/skincare`}
            key={item._id}
            onClick={handleLinkClick}
          > 
            <span className='text-neutral-950 text-sm font-normal capitalize leading-[25.20px] hover:text-pink-800 hover:font-semibold'>
              { item.title }
            </span>
          </Link>
        ))}
      </div>
      
      {/* image portion */}
      <Link href={`/product/${('capture totale super potent rich creme').split(' ').join('-')}`}>
        <Image
          src='/navImage.png'
          alt='product image'
          width={288}
          height={184}
        />
        <h2 className='text-neutral-950 text-sm font-semibold leading-[25px]'>capture totale super potent rich cream</h2>
        <p className="w-72 text-neutral-950 text-xs font-normal capitalize leading-snug">Global age-defying rich cream - intense nourishment & revitalization</p>
      </Link>
    </div>
  );
};

export default SkincarepMenuDesktop;