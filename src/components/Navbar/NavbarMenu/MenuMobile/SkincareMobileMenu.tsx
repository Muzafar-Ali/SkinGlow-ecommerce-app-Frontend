import { category, collection, featured, skin_condition } from '@/lib/data/filterCategories'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'


type SkincareMobileMenuProps = { 
  isSelected: string[],
  setIsSelected: React.Dispatch<React.SetStateAction<string[]>> 
  isCategoryOpen: boolean,
  setIsCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isSkinConditionCategoryOpen: boolean,
  setIsSkinConditionCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isCollectionOpen: boolean,
  setIsCollectionOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

const SkincareMobileMenu:FC<SkincareMobileMenuProps> = ({ 
  isSelected, 
  setIsSelected,
  isCategoryOpen,
  setIsCategoryOpen,
  isSkinConditionCategoryOpen,
  setIsSkinConditionCategoryOpen,
  isCollectionOpen,
  setIsCollectionOpen,
  setIsDropDown
}) => {
  
  return (
    <div className={`${isSelected?.includes(('Women Skincare')) ? 'inline-block':'hidden'}`}>
      <div>
        {/* shop all categories starts */}
        <Link 
          href={`/skincare`} 
          onClick={() => setIsDropDown(false)} 
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'
        >
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">Shop all skincare</div>
        </Link> 
        {/* shop all categories ends */}

        {/* skincondition categories select starts */}
        <div 
          onClick={() => setIsSkinConditionCategoryOpen((prev) => !prev)}
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">skin condition</div>
          <AiOutlineCaretRight className={`${isSkinConditionCategoryOpen ? "rotate-90": ""} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div> 
        <div>
          { skin_condition.map((item, index) => (
            <div 
              key={index}
              onClick={() => setIsDropDown(false)} 
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isSkinConditionCategoryOpen ? 'inline-flex':'hidden'}`}
            >
              <Link href={`/skincare/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</Link>
            </div> 
          ))}
        </div>
        {/* skincondition categories select ends */}

        {/* category select starts */}  
        <div
          onClick={() => setIsCategoryOpen((prev) => !prev)} 
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'
          >
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">By Category</div>
          <AiOutlineCaretRight className={`${isCategoryOpen ? "rotate-90" : ""} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div> 
        <div>
          { category?.map((item, index) => (
            <div 
              key={index}
              onClick={() => setIsDropDown(false)} 
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isCategoryOpen ? 'inline-flex':'hidden'}`}
            >
              <Link href={`/skincare/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</Link>
            </div> 
          ))}
        </div>
        {/* category select ends */}

        {/* collection select starts */}
        <div
          onClick={() => setIsCollectionOpen((prev) => !prev)} 
          className='pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex w-full'
          >
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight bg-transparent">Collection</div>
          <AiOutlineCaretRight className={`${isCollectionOpen ? "rotate-90" : ""} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div> 
        <div>
          { collection?.map((item, index) => (
            <Link
              href={`/skincare/${encodeURIComponent(item.toLowerCase())}`}
              key={index}
              onClick={() => setIsDropDown(false)}  
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isCollectionOpen? 'inline-flex':'hidden'} transition-all duration-500 ease-in-out`}
            >
              <div className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</div>
            </Link> 
          ))}
        </div>
        {/* collection select ends */}
      </div>

      {/* featured categories starts */}
      <div>
        { featured?.map((item, index) => (
          <div 
            key={index}
            onClick={() => setIsDropDown(false)} 
            className={`pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full inline-flex transition-all duration-500 ease-in-out`}
          >
            <Link href={`/skincare/${item}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item}</Link>
          </div> 
        ))}
      </div>
      {/* featured categories ends */}

    </div>
  )
}

export default SkincareMobileMenu