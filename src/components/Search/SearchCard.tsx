import Image from 'next/image'
import React from 'react'
import { TbCurrencyDollar } from 'react-icons/tb';

type SearchCardProps = {
  title: string | undefined;
  thumbnail: string | undefined;
  description: string | undefined;
  price: number | undefined;
}

const SearchCard = ({ title, thumbnail, description, price }: SearchCardProps) => {
  return (
    <div className="w-[100px] tablet-m:w-[150px] h-[185px] tablet-m:h-[236px] pb-2 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 inline-flex">
      
      <div>
        <Image 
          src={thumbnail!}  
          alt={title!}
          width={200}
          height={200}
          className='w-[100px] h-[100px] tablet-m:w-[150px] tablet-m:h-[150px] object-cover rounded-md'
        />
      </div>

      <div>
        <p className="w-[90px] tablet-m:w-[134px] text-pink-800 text-xs tablet-m:text-sm font-normal capitalize leading-[25.20px]">
          <span className='line-clamp-1 bg-white'>{title}</span>
        </p>
        <p className="w-[90px] tablet-m:w-[134px] text-neutral-950 text-xs tablet-m:text-xs font-normal capitalize leading-snug">
          <span className='line-clamp-2 bg-white'>{description}</span>
        </p>
        <div className='flex items-center font-semibold tablet:font-normal text-neutral-950 text-xs tablet-m:text-sm leading-tight tablet:leading-loose -space-x-0.5 capitalize'>
          <TbCurrencyDollar className='w-[12px] h-[12px] tablet-m:w-[15px] tablet-m:h-[16px] tablet-m:mt-[2px]' />
          <span>{price}</span>
        </div>
      </div>

    </div>
  )
}

export default SearchCard