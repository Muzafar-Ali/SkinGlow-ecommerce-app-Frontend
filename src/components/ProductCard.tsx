"use client"
import Image from 'next/image'
import { TbCurrencyDollar } from 'react-icons/tb';
import { bestSellerType, MakeupProductType, skinCareProductType } from '@/utils/types';

interface ProductCardProps {
  product: bestSellerType | MakeupProductType | skinCareProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {

 return (
  <div className='flex flex-col justify-start items-center gap-y-2 tablet-m:gap-y-4 border border-neutral-200 pb-2 relative bg-background_custom '>
    {/* <div className="h-[345px] tablet:h-full relative"></div> */}
    <Image
      src={product?.thumbnail}
      alt={product?.title}
      width={1000}
      height={384}
      className='w-full h-[250px] tablet-m:h-[384px] object-cover'
    />

    <div className='flex flex-col gap-y-2 justify-start tablet-m:justify-center items-start px-2 self-stretch'>
      <div className='text-pink-800 font-semibold tablet-m:font-bold text-sm tablet-m:text-base line-clamp-1 leading-tight tablet-m:leading-snug capitalize self-stretch'>{product?.title}</div>

      <div className='text-neutral-950 font-normal text-xs tablet-m:text-sm line-clamp-2 leading-none tablet-m:leading-snug capitalize self-stretch'>{product?.productDetails.description}</div>
      <div className='flex items-center font-semibold tablet:font-normal text-neutral-950 text-sm tablet-m:text-lg leading-tight tablet:leading-loose -space-x-0.5 capitalize'>
        <TbCurrencyDollar className='w-[15px] h-[15px] tablet-m:w-[20px] tablet-m:h-[20px]' />
        <span>{product?.price}</span>
      </div>
    </div>

  </div>
  )
}

export default ProductCard
