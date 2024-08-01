import { CombinedSingleProductType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

type SearchCardProps = {
  title: string | undefined;
  thumbnail: string | undefined;
  description: string | undefined;
}

const SearchCard = ({ title, thumbnail, description }: SearchCardProps) => {
  return (
    <div className="w-[100px] tablet-m:w-[150px] h-[175px] tablet-m:h-[236px] pb-2 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 inline-flex">
      
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
      </div>

    </div>
  )
}

export default SearchCard