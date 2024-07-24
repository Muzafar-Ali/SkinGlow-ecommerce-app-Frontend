"use client"
import { useState } from 'react'
import { CategoryType } from '@/utils/types'
import SkinCondition from './SkincareFilterOptions/SkinConditionFilter'
import FeaturedFilter from './SkincareFilterOptions/FeaturedFilter'
import AppliedFiltersDisplay from './SkincareFilterOptions/AppliedFiltersDisplay'
import PriceFilterSkincare from './SkincareFilterOptions/PriceFilter'
import SkincareCategoryFilter from './SkincareFilterOptions/SkincareCategoryFilter'

export type SkincareFilterOptionsDesktop = {
  appliedFilters: string[];
  skincareCategoryFilters: string[];
  skinConditionFilters: string[];
  featuredFilters: string[];
  skincarePriceFilters: string[];
  isOutOfStock: boolean;
  setIsOutOfStock: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilters: (removeFilter: string) => void;
  handleSkincareFiltersChange: (filterType: string, filtersValue: string) => void;
  skincareCategories: CategoryType[];
  skinConditionCategories: CategoryType[];
  featuredCategories: CategoryType[];
}

const SkincareFilterOptionsDesktop = (
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
}: SkincareFilterOptionsDesktop ) => {

  return (
    <div className='hidden laptop-s:flex flex-col w-[288px]'>
      {/* Clear filters starts */}
      <div className=''>
        <button 
          onClick={() => clearFilters('all')}
            className="h-12 py-2 justify-center items-center gap-2 inline-flex bg-white w-full"
          >
          <div className="max-laptop-s:absolute max-laptop-s:-top-[3px] max-laptop-s:right-0 text-pink-800 text-sm tablet-m:text-base font-normal capitalize leading-normal tablet-m:leading-7">clear all filters</div>
        </button>
      </div>
      {/* Clear filters ends */}

      {/* Out of stock starts*/}
      <div className='flex items-center justify-between gap-2 p-4 border-b border-t border-neutral-200 bg-white w-full'>
        <p className="text-neutral-950 text-base font-bold capitalize leading-snug">out of stock items</p>
        <div 
          className={`${isOutOfStock ? 'bg-pink-800 justify-end':'bg-zinc-600 justify-start'} w-12 h-6  flex items-center px-1 cursor-pointer transition-all duration-200 ease-in-out`}
          onClick={() => setIsOutOfStock((prev) => !prev)}
          >
          <div className='w-4 h-4 bg-white shadow'/>
        </div>
        {/* Out of stock ends*/}

      </div>

      <div>
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

export default SkincareFilterOptionsDesktop