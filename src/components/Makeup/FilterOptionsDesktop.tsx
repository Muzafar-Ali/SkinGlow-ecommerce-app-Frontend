import CheekFilter from './MakeupFilterOptions/CheekFilter'
import EyesFilter from './MakeupFilterOptions/EyesFilter';
import LipsFilter from './MakeupFilterOptions/LipsFilter';
import FeaturedFilterMakeup from './MakeupFilterOptions/FeaturedFilterMakeup';
import PriceFilterMakeup from './MakeupFilterOptions/PriceFilterMakeup';
import { CategoryType } from '@/utils/types';

type FilterOptionsDesktopProps = {
  cheekCategories: CategoryType[];
  lipCategories: CategoryType[];
  eyeCategories: CategoryType[];
  featuredCategories: CategoryType[];
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
}

const FilterOptionsDesktop = (
  {
  cheekCategories, 
  lipCategories, 
  eyeCategories, 
  featuredCategories, 
  cheekFilters, 
  lipsFilters, 
  eyesFilters, 
  featuredFilters, 
  makeupPriceFilters, 
  isOutOfStock, 
  setIsOutOfStock, 
  clearFilters, 
  handleMakeupFiltersChange

  }: FilterOptionsDesktopProps) => {

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

export default FilterOptionsDesktop