import React from 'react'
import CheekFilter from './MakeupFilterOptions/CheekFilter'
import LipsFilter from './MakeupFilterOptions/LipsFilter'
import EyesFilter from './MakeupFilterOptions/EyesFilter'
import PriceFilterMakeup from './MakeupFilterOptions/PriceFilterMakeup'
import FeaturedFilterMakeup from './MakeupFilterOptions/FeaturedFilterMakeup'
import AppliedFiltersDisplay from './AppliedFiltersDisplay'
import { CategoryType } from '@/utils/types'

export type MakeupFilterOptionsDesktopProps = {
  appliedFilters: string[];
  cheekFilters: string[];
  lipsFilters: string[];
  eyesFilters: string[];
  featuredFilters: string[];
  makeupPriceFilters: string[];
  isOutOfStock: boolean;
  setIsOutOfStock: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilters: (removeFilter: string) => void;
  handleMakeupFiltersChange: (filterType: string, filtersValue: string) => void;
  cheekCategories: CategoryType[];
  lipCategories: CategoryType[];
  eyeCategories: CategoryType[];
  featuredCategories: CategoryType[];
}

const MakeupFilterOptionsDesktop = ({
  appliedFilters,
  cheekFilters,
  lipsFilters,
  eyesFilters,
  featuredFilters,
  makeupPriceFilters,
  isOutOfStock,
  setIsOutOfStock,
  clearFilters,
  handleMakeupFiltersChange,
  cheekCategories,
  lipCategories,
  eyeCategories,
  featuredCategories,
}: MakeupFilterOptionsDesktopProps ) => {

  return (
    <div className='w-[288px]'>
      
      {/* applied filter mobie screen only */}
      <AppliedFiltersDisplay
        appliedFilters={appliedFilters}
        clearFilters={clearFilters}
      />

      <div className='inline-flex items-center justify-between gap-2 p-4 border-b border-t border-neutral-200 bg-white w-full'>
        <p className="text-neutral-950 text-base font-bold capitalize leading-snug bg-transparent">out of stock items</p>
        <div 
          className={`${isOutOfStock ? 'bg-pink-800 justify-end':'bg-zinc-600 justify-start'} w-12 h-6  inline-flex items-center px-1 cursor-pointer transition-all duration-200 ease-in-out`}
          onClick={() => setIsOutOfStock((prev) => !prev)}
        >
          <div className='w-4 h-4 bg-white shadow'/>
        </div>
      </div>

      <div className='flex flex-col'>
        <CheekFilter
          cheekCategories={cheekCategories}
          cheekFilters={cheekFilters}
          handleMakeupFiltersChange={handleMakeupFiltersChange}
        />
        
        <LipsFilter
          lipCategories={lipCategories}
          lipsFilters={lipsFilters}
          handleMakeupFiltersChange={handleMakeupFiltersChange}
        />

        <EyesFilter
          eyeCategories={eyeCategories}
          eyesFilters={eyesFilters}
          handleMakeupFiltersChange={handleMakeupFiltersChange}
        />
        
        <FeaturedFilterMakeup
          featuredCategories={featuredCategories}
          featuredFilters={featuredFilters}
          handleMakeupFiltersChange={handleMakeupFiltersChange}
        />

        <PriceFilterMakeup
          makeupPriceFilters={makeupPriceFilters}
          handleMakeupFiltersChange={handleMakeupFiltersChange}
        />

      </div>
    </div>
  )
}

export default MakeupFilterOptionsDesktop