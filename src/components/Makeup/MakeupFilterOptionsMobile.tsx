"use client"
import { GrFormClose } from 'react-icons/gr';
import CheekFilter from './MakeupFilterOptions/CheekFilter'
import LipsFilter from './MakeupFilterOptions/LipsFilter'
import EyesFilter from './MakeupFilterOptions/EyesFilter'
import PriceFilterMakeup from './MakeupFilterOptions/PriceFilterMakeup'
import { MakeupFilterOptionsDesktopProps } from './MakeupFilterOptionsDesktop';


type  MakeupFilterOptionsMobileProps = MakeupFilterOptionsDesktopProps & {
  setIsMobileDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

  const MakeupFilterOptionsMobile = ({
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
    setIsMobileDropDown
  }: MakeupFilterOptionsMobileProps ) => {

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
        <p className="text-neutral-950 text-base font-bold capitalize leading-snug">out of stock items</p>
        <div 
          className={`${isOutOfStock ? 'bg-pink-800 justify-end':'bg-zinc-600 justify-start'} w-12 h-6  inline-flex items-center px-1 cursor-pointer transition-colors duration-200 ease-in-out`}
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

        <PriceFilterMakeup
          makeupPriceFilters={makeupPriceFilters}
          handleMakeupFiltersChange={handleMakeupFiltersChange}
        />

      </div>
    </div>
  )
}

export default MakeupFilterOptionsMobile