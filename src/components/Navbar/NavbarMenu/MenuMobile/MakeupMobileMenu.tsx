"use client"
import { useFetchCategories } from '@/hooks/useFetchCategories';
import { CategoryType } from '@/utils/types';
import { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';
import Link from 'next/link';
import config from '@/config/config';

type MakeUpMobileMenuProps = {
  isLips: boolean;
  isCheek: boolean;
  isEye: boolean;
  isSelected: string[];
  setIsLips: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCheek: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEye: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<React.SetStateAction<string[]>>
  setIsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MakeUpMobileMenu = ({ 
isSelected,
setIsDropDown,
setIsCheek,
isCheek,
setIsLips,
isLips,
setIsEye,
isEye,
}: MakeUpMobileMenuProps) => {

  const [cheekCategory, setCheekCategory] = useState<CategoryType[]>([]);
  const [eyeCategory, setEyeCategory] = useState<CategoryType[]>([]);
  const [lipCategory, setLipCategory] = useState<CategoryType[]>([]);
  const [featuredCategory, setFeaturedCategory] = useState<CategoryType[]>([]);
  
  useFetchCategories(`${config.baseUri}/v1/makeup/category/lips/all`, setLipCategory);
  useFetchCategories(`${config.baseUri}/v1/makeup/category/eyes/all`, setEyeCategory);
  useFetchCategories(`${config.baseUri}/v1/makeup/category/cheek/all`, setCheekCategory)
  useFetchCategories(`${config.baseUri}/v1/makeup/category/featured/all`, setFeaturedCategory)
  
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
          { cheekCategory?.map((item, index) => (
            <div 
            key={index}
            onClick={() => setIsDropDown(false)}
            className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isCheek ? 'inline-flex':'hidden'}`}
            >
              <Link href={`/makeup/category/${item.slug}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item.name}</Link>
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
          { lipCategory?.map((item, index) => (
            <div 
              key={index}
              onClick={() => setIsDropDown(false)}
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isLips ? 'inline-flex':'hidden'}`}
            >
              <Link href={`/makeup/category/${item.slug}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item.name}</Link>
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
          { eyeCategory?.map((item, index) => (
            <div 
              key={index}
              onClick={() => setIsDropDown(false)}
              className={`pl-16 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full ${isEye ? 'inline-flex':'hidden'} transition-all duration-500 ease-in-out`}
            >
              <Link href={`/makeup/category/${item.slug}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent capitalize">{item.name}</Link>
            </div> 
          ))}
        </div>
        {/* eye categories select ends */}
      </div>
      
      {/* featured categories starts */}
      <div>
        { featuredCategory?.map((item, index) => (
          <div 
          key={index}
            onClick={() => setIsDropDown(false)}
            className={`pl-10 h-10 px-2 py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 w-full inline-flex transition-all duration-500 ease-in-out`}
          >
            <Link href={`/makeup/category/${item.slug}`} className="grow shrink basis-0 text-neutral-700 text-sm font-normal leading-tight bg-transparent">{item.name}</Link>
          </div> 
        ))}
      </div>
      {/* featured categories ends */}

    </div>
  )
}

export default MakeUpMobileMenu