"use client"
import { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';

type SortFiltersProps = {
  displaySortFilterValue: string;
  setDisplaySortFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const SortFilters = ({ displaySortFilterValue, setDisplaySortFilterValue}: SortFiltersProps) => {

  const [isDropDown, setisDropDown] = useState(false)

  return (
    <div className="grow shrink basis-0 h-10 px-4 py-2 justify-start items-center gap-2 flex relative bg-white">
      {/* main display  */}
      <div 
        className="w-[152px] tablet-s:w-[190px] tablet-m:w-full laptop-s:w-[224px] laptop-s:h-[25px]  items-center flex cursor-pointer bg-transparent" 
        onClick={() => setisDropDown((prev) => !prev)} 
      >
        <div className="grow shrink basis-0 bg-transparent">
          <span className="text-neutral-950 text-xs tablet-m:text-base font-semibold tablet-m:font-bold tracking-tight capitalize leading-snug bg-transparent">sort</span>
          <span className="text-neutral-950 text-sm font-semibold capitalize leading-[25.20px] bg-transparent">: </span>
          <span className="text-neutral-950 text-xs tablet-m:text-sm font-normal capitalize leading-[14px] tablet-m:leading-[25.20px] bg-transparent">{ displaySortFilterValue }</span>
        </div>
        <div className={`${isDropDown ? "rotate-90":""} transition-all duration-500 ease-in-out w-3 h-3 tablet-m:w-6 tablet-m:h-6 relative inline-flex justify-center items-center cursor-pointer bg-transparent`}>
          <AiOutlineCaretRight className="bg-transparent"/>
        </div>
      </div>
      
      {/* inside content */}
      <div className={`${ isDropDown ? "visible-container":"hidden-container"} flex flex-col space-y-2 laptop:space-y-0 py-2 px-4 absolute top-[100%] left-0 z-10 w-full border bg-white cursor-pointer`}>
        <div
          onClick={() => {
            setDisplaySortFilterValue('recommended') 
            setisDropDown((prev) => !prev)
          }}
          className={`${displaySortFilterValue === 'recommended' ? 'text-pink-600':'text-neutral-950'} text-xs tablet:text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px] bg-transparent`}
        >
          recommended
        </div>
        <div
          onClick={() => {
            setDisplaySortFilterValue('price high to low')
            setisDropDown((prev) => !prev)
          }}
          className={`${displaySortFilterValue === 'price high to low' ? 'text-pink-600':'text-neutral-950'} text-xs tablet:text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px] bg-transparent`}
        >
          price high to low
        </div>
        <div
          onClick={() => {
            setDisplaySortFilterValue('price low to high')
            setisDropDown((prev) => !prev)
          }}
          className={`${displaySortFilterValue === 'price low to high' ? 'text-pink-600':'text-neutral-950'} text-xs tablet:text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px] bg-transparent`}
        >
          price low to high
        </div>
        <div
          onClick={() => {
            setDisplaySortFilterValue('latest arrival')
            setisDropDown((prev) => !prev)
          }}
          className={`${displaySortFilterValue === 'latest arrival' ? 'text-pink-600':'text-neutral-950'} text-xs tablet:text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px] bg-transparent`}
        >
          latest arrival
        </div>
      </div>
  </div>
  )
}

export default SortFilters