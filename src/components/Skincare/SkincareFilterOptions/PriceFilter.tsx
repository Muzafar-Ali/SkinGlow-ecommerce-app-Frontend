"use client"
import { priceData } from '@/utils/data';
import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';

type PriceFilterSkincareProps = {
  skincarePriceFilters: string[];
  handleSkincareFiltersChange: (filetrTyp: string, value: string) => void;
}
const PriceFilterSkincare = ({ skincarePriceFilters, handleSkincareFiltersChange}: PriceFilterSkincareProps) => {

  const [isDropDown, setIsDropDown] = useState<boolean>(true)

  return (
    <div className='border-b border-neutral-200 p-4 bg-white'>
      <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white '
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        <h2 className="w-full text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug bg-transparent">price</h2>
        <div className={`${isDropDown ? 'rotate-0':'rotate-180'} flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out bg-transparent`}>
          <AiFillCaretDown className={`w-4 h-4 bg-transparent`}/>
        </div>
      </div>

      <div className={`${isDropDown ? 'visible-container' :'hidden-container'} flex flex-col gap-y-2 mt-2 bg-white`}>
        { priceData?.map((item, index) => (
          <div 
            className='inline-flex items-center gap-x-2 bg-white' 
            key={index}
          >
            <div 
              className={`${skincarePriceFilters?.includes(item) ? "bg-neutral-950 ring-2 ring-white ring-inset":"bg-white"} w-4 h-4 border-2 hover:scale-125 border-neutral-950 rounded-sm cursor-pointer`}
              onClick={() => handleSkincareFiltersChange('price',item)}
            />
            <div className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px] bg-white">{ item }</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceFilterSkincare;