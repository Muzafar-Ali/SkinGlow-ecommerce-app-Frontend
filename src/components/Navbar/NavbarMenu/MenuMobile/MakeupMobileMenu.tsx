'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';

type MakeUpMobileMenuProps = {
  isMakeupAll: boolean;
  setIsMakeupAll: React.Dispatch<React.SetStateAction<boolean>>;
  isLips: boolean;
  setIsLips: React.Dispatch<React.SetStateAction<boolean>>;
  isCheek: boolean;
  setIsCheek: React.Dispatch<React.SetStateAction<boolean>>;
  isEye: boolean;
  setIsEye: React.Dispatch<React.SetStateAction<boolean>>;
  isSelected: string[];
  setIsSelected: React.Dispatch<React.SetStateAction<string[]>>
  isMakeupCategoryOpen: boolean;
  setIsMakeupCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}


const MakeUpMobileMenu = ({ 
  isMakeupAll,
  setIsMakeupAll,
  isLips,
  setIsLips,
  isCheek,
  setIsCheek,
  isEye,
  setIsEye,
  isMakeupCategoryOpen,
  setIsMakeupCategoryOpen,
  isSelected, 
  setIsSelected,
  setIsDropDown
}: MakeUpMobileMenuProps) => {
  
  return (
    <div className={`${isSelected?.includes(('women makeup')) ? 'inline-block':'hidden'}`}>
      
      <div>
        {/* shop all categories starts */}
        <Link 
          href={`/makeup`}
          onClick={() => setIsDropDown(false)}
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">Shop all makeup</div>
        </Link> 
        {/* shop all categories ends */}

        {/* cheek categories select starts */}
        <div 
          onClick={() => setIsCheek((prev) => !prev)}
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">cheek</div>
          <AiOutlineCaretRight className={`${isCheek ? "rotate-90": ""} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div> 
        <div>
          { cheek?.map((item, index) => (
            <div 
            key={index}
            onClick={() => setIsDropDown(false)}
            className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isCheek ? 'inline-flex':'hidden'}`}
            >
              <Link href={`/makeup/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</Link>
            </div> 
          ))}
        </div>
        {/* cheek categories select ends */}

        {/* lips categories select starts */}
        <div
          onClick={() => setIsLips((prev) => !prev)} 
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'
          >
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">Lips</div>
          <AiOutlineCaretRight className={`${isLips? "rotate-90" : ""} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div> 
        <div>
          { lips?.map((item, index) => (
            <div 
              key={index}
              onClick={() => setIsDropDown(false)}
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isLips ? 'inline-flex':'hidden'}`}
            >
              <Link href={`/makeup/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</Link>
            </div> 
          ))}
        </div>
        {/* lips categories select ends */}

        {/* eye categories select starts */}
        <div
          onClick={() => setIsEye((prev) => !prev)} 
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'
          >
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">Eye</div>
          <AiOutlineCaretRight className={`${isEye ? "rotate-90" : ""} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div> 
        <div>
          { eyes?.map((item, index) => (
            <div 
              key={index}
              onClick={() => setIsDropDown(false)}
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isEye ? 'inline-flex':'hidden'} transition-all duration-500 ease-in-out`}
            >
              <Link href={`/makeup/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</Link>
            </div> 
          ))}
        </div>
        {/* eye categories select ends */}
      </div>
      
      {/* featured categories starts */}
      <div>
        { featuredMakeup?.map((item, index) => (
          <div 
          key={index}
            onClick={() => setIsDropDown(false)}
            className={`pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full inline-flex transition-all duration-500 ease-in-out`}
          >
            <Link href={`/makeup/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent">{item}</Link>
          </div> 
        ))}
      </div>
      {/* featured categories ends */}

    </div>
  )
}

export default MakeUpMobileMenu