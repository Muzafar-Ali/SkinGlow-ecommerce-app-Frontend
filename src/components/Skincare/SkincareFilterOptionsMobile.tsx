                 'use client'
import React, { useState } from 'react'
import CategoryFilter from './SkincareFilterOptions/SkincareCategoryFilter'
import SkinCondition from './SkincareFilterOptions/SkinConditionFilter'
import FeaturedFilter from './SkincareFilterOptions/FeaturedFilter'
import PriceFilter from './SkincareFilterOptions/PriceFilter'
import AppliedFiltersDisplay from './SkincareFilterOptions/AppliedFiltersDisplay'
import { GrFormClose } from 'react-icons/gr';
import { SkincareFilterOptionsDesktop } from './SkincareFilterOptionsDesktop'
import SkincareCategoryFilter from './SkincareFilterOptions/SkincareCategoryFilter'
import PriceFilterSkincare from './SkincareFilterOptions/PriceFilter'

type SkincareFilterOptionsMobileProps = SkincareFilterOptionsDesktop & {
  setIsMobileDropDown: React.Dispatch<React.SetStateAction<boolean>>

}

const SkincareFilterOptionsMobile = (
  {
    appliedFilters,
    skincareCategoryFilters,
    skinConditionFilters,
    featuredFilters,
    skincarePriceFilters,
    isOutOfStock,
    setIsOutOfStock,
    clearFilters,
    handleSkincareFiltersChange,
    skincareCategories,
    skinConditionCategories,
    featuredCategories,
    setIsMobileDropDown
}: SkincareFilterOptionsMobileProps ) => {

  return (
    <div className='w-full'>

<div
        onClick={() => setIsMobileDropDown(false)} 
        className="w-full h-7 justify-between items-center py-[30px] inline-flex bg-white px-[20px]">
        <div className="text-neutral-950 text-xl font-bold leading-7">Filter</div>
        <div className="w-7 h-7 relative flex justify-between items-center">
          <GrFormClose className="w-7 h-7 border shadow"/>
        </div>
      </div>

      <div className='inline-flex items-center justify-between gap-2 p-4 border-b border-t border-neutral-200 bg-white w-full'>
        <p className="text-neutral-950 text-base font-bold capitalize leading-snug bg-transparent">out of stock items</p>
        <div 
          className={`${isOutOfStock ? 'bg-pink-800 justify-end':'bg-zinc-600 justify-start'} w-12 h-6  inline-flex items-center px-1 cursor-pointer transition-colors duration-200 ease-in-out`}
          onClick={() => setIsOutOfStock((prev) => !prev)}
        >
          <div className='w-4 h-4 bg-white shadow'/>
        </div>
      </div>

      <div className='flex flex-col'>
        <SkincareCategoryFilter
          skincareCategories={skincareCategories}
          skincareCategoryFilters={skincareCategoryFilters}
          handleSkincareFiltersChange={handleSkincareFiltersChange}
        />
        
        <SkinCondition
          skinConditionCategories={skinConditionCategories}
          skinConditionFilters={skinConditionFilters}
          handleSkincareFiltersChange={handleSkincareFiltersChange}
        />

        <FeaturedFilter
          featuredCategories={featuredCategories}
          featuredFilters={featuredFilters}
          handleSkincareFiltersChange={handleSkincareFiltersChange}
        />

        <PriceFilterSkincare
          skincarePriceFilters={skincarePriceFilters}
          handleSkincareFiltersChange={handleSkincareFiltersChange}
        />

      </div>
    </div>
  )
}

export default SkincareFilterOptionsMobile