"use client"
import { CategoryType } from '@/utils/types';
import React, { useState } from 'react'
import { AiOutlineCaretRight, AiFillCaretDown } from 'react-icons/ai';

type SkinConditionFilterProps = {
  skinConditionCategories: CategoryType[] 
  skinConditionFilters: string[];
  handleSkincareFiltersChange: (filetrTyp: string, value: string) => void;
}

const SkinConditionFilter = ({ skinConditionCategories, skinConditionFilters, handleSkincareFiltersChange}: SkinConditionFilterProps) => {
  
  const [isDropDown, setIsDropDown] = useState<boolean>(true)
  
  return (
    <div className='border-b border-neutral-200 p-4 bg-white'>
      <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white '
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug bg-transparent">Skin Condition</h2>
        <div className={`${isDropDown ? 'rotate-0':'rotate-180'} flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out bg-transparent`}>
          <AiFillCaretDown className={`w-4 h-4 bg-transparent`}/>
        </div>
      </div>

      <div className={`${isDropDown ? 'visible-container' :'hidden-container'} flex flex-col gap-y-2 mt-2 bg-white`}>
        { skinConditionCategories?.map((item, index) => (
          <div 
            className='inline-flex items-center gap-x-2 bg-white' 
            key={index}
          >
            <div 
              className={`${skinConditionFilters?.includes((item?._id.toLowerCase()).split(' ').join('-')) ? "bg-neutral-950 ring-2 ring-white ring-inset":"bg-white"} w-4 h-4 border-2 hover:scale-125 border-neutral-950 rounded-sm cursor-pointer`}
              onClick={() => handleSkincareFiltersChange('skinCondition', (item?._id.toLowerCase()).split(' ').join('-'))}
            />
            <div className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px] bg-white">{ item.name }</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkinConditionFilter