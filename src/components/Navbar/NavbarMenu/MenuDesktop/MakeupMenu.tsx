"use client"
import { cn } from '@/lib/utils';
import { useFetchCategories } from '@/hooks/useFetchCategories';
import { CategoryType } from '@/utils/types';
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config/config';

interface MakeupDesktopMenuProps {
  dropdownStates: boolean[]
  index: number;
  menuCategory: string;
  handleLinkClick: () => void;
}

const MakeupMenuDesktop = ({ dropdownStates, index, menuCategory,  handleLinkClick }: MakeupDesktopMenuProps) => {

  const [cheekCategory, setCheekCategory] = useState<CategoryType[]>([]);
  const [eyeCategory, setEyeCategory] = useState<CategoryType[]>([]);
  const [lipCategory, setLipCategory] = useState<CategoryType[]>([]);
  const [featuredCategory, setFeaturedCategory] = useState<CategoryType[]>([]);
  
  useFetchCategories(`${config.baseUri}/v1/makeup/category/lips/all`, setLipCategory);
  useFetchCategories(`${config.baseUri}/v1/makeup/category/eyes/all`, setEyeCategory);
  useFetchCategories(`${config.baseUri}/v1/makeup/category/cheek/all`, setCheekCategory)
  useFetchCategories(`${config.baseUri}/v1/makeup/category/featured/all`, setFeaturedCategory)

  return (
    <div className={cn(
      dropdownStates[index] && menuCategory === "makeup" ? "block opacity-100 z-10 max-h-[365px] overflow-hidden":"block opacity-0 -z-10 overflow-hidden max-h-0",
      "absolute top-[106px] left-0 py-[16px] max-w-[1520px] border bg-background_custom px-5 laptop-m:px-20 transition-all duration-300 ease-in-out", 
      "flex justify-between gap-[64px] w-full")}
    >
      {/* featured cat */}
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

      {/* cheeks cat */}
      <div className='flex flex-col gap-1 capitalize'>
        <h2 className='text-neutral-950 text-base font-bold capitalize leading-snug mb-2'>Cheek</h2>
          {cheekCategory.map((items) => (
            <Link
              href={`/skincare`}
              key={items._id}
              onClick={handleLinkClick}
            >
              <span className='text-neutral-950 text-sm font-normal capitalize leading-[25.20px] hover:text-pink-800 hover:font-semibold'>{ items.name }</span>
            </Link>
          ))}
      </div>

      {/* eyes cat */}
      <div className='flex flex-col gap-1 capitalize'>
        <h2 className='text-neutral-950 text-base font-bold capitalize leading-snug mb-2'>Eyes</h2>
        {eyeCategory.map((items) => (
          <Link 
            href={`/skincare`}
            key={items._id}
            onClick={handleLinkClick}
          > 
            <span className='text-neutral-950 text-sm font-normal capitalize leading-[25.20px] hover:text-pink-800 hover:font-semibold'>{ items.name }</span>
          </Link>
        ))}
      </div>

      {/* lips cat */}
      <div className='flex flex-col gap-1 capitalize'>
        <h2 className='text-neutral-950 text-base font-bold capitalize leading-snug mb-2'>Lips</h2>
        {lipCategory.map((items) => (
          <Link 
            href={`/skincare`}
            key={items._id}
            onClick={handleLinkClick}
          > 
            <span className='text-neutral-950 text-sm font-normal capitalize leading-[25.20px] hover:text-pink-800 hover:font-semibold'>{ items.name }</span>
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

export default MakeupMenuDesktop;