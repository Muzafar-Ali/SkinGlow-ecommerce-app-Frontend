'use client'
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr';

interface AppliedFiltersDisplayProps {
  appliedFilters: string[];
  clearFilters: (removeFilter: string) => void;

}

const AppliedFiltersDisplay:React.FC<AppliedFiltersDisplayProps> = ({ appliedFilters, clearFilters }) => {
  
  return (
    <div className={`${ appliedFilters?.length === 0 ? 'hidden-container':'visible-container max-laptop-s:p-0 p-4'} flex flex-col gap-[16px] justify-start items-start max-laptop-s:bg-transparent bg-white relative max-laptop-s:w-full`}>
      <div className="text-neutral-950 text-sm tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug bg-transparent">Applied filters desktop</div>
      <div className=' flex max-laptop-s:flex-row max-laptop-s:flex-wrap flex-col gap-2 max-laptop-s:bg-transparent bg-white'>
        { appliedFilters?.map((value,index) => (
            <div
              key={index} 
              className="inline-flex items-center justify-start gap-2 py-1 px-2 border border-neutral-200 max-laptop-s:bg-transparent bg-white"
            >
              <div className="text-neutral-950 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] bg-transparent">{value}</div>
              <div className='max-laptop-s:bg-transparent bg-white'>
                <GrFormClose className="w-[18px] h-[18px] cursor-pointer bg-transparent" onClick={() => clearFilters(value)} />

              </div>
              
            </div>
          ))
        }

        <button 
          onClick={() => clearFilters('all')}
          className=" h-12 py-2 justify-center items-center gap-2 inline-flex bg-white"
        >
          <div className="max-laptop-s:absolute max-laptop-s:-top-[3px] max-laptop-s:right-0 text-pink-800 text-sm tablet:text-base font-normal capitalize leading-normal tablet:leading-7 bg-transparent">clear all filters</div>
        </button>
      </div>
    </div>
  )
}

export default AppliedFiltersDisplay

