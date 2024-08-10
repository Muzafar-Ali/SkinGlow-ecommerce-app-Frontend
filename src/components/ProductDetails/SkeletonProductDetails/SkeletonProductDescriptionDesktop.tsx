import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const SkeletonProductDescriptionDesktop = () => {
  return (
    <div className='hidden laptop-s:flex flex-col mb-20'>
      {/* Description headings starts */}
      <section className='flex items-center justify-between w-full mt-[32px] py-2'>
        <div 
          className="text-pink-800 border-b-2 border-pink-800 text-lg font-bold leading-7 cursor-pointer"  
        >
          {"Product Details"}
        </div>
        <div 
          className="text-zinc-600 text-lg font-bold leading-7 cursor-pointer" >
          {"How To Apply"}
        </div>
        <div 
          className="text-zinc-600 text-lg font-bold leading-7 cursor-pointer">
          {"Ingredient"}
        </div>
        <div 
          className="text-zinc-600 text-lg font-bold leading-7 cursor-pointer">
          {"What Makes It Advance"}
        </div>
      </section>
      {/* Description headings ends */}
      
      {/* Description content starts */}
      <section className='flex flex-col gap-y-4 py-6 px-4 w-full'>
        <div className='flex flex-col gap-y-2'>
          {/* label */}
          <Skeleton className='h-6 w-48 bg-pink-800'/>
          {/* content */}
          <div className='flex flex-col gap-y-3'>
            <Skeleton className='h-3 w-full'/>
            <Skeleton className='h-3 w-full'/>
            <Skeleton className='h-3 w-full'/>
            <Skeleton className='h-3 w-full'/>

          </div>
          
          <button className="inline-flex items-center justify-start gap-x-2">
            {/* <span className="text-pink-800 text-base font-normal capitalize leading-7">Read More</span> */}
            <Skeleton/>
            {/* red more button */}
            <div className="flex flex-row items-center justify-between mt-5">
            <span className="text-pink-800 text-base font-normal capitalize leading-7">Read More</span>
              <MdOutlineArrowForwardIos className="w-6 h-6 text-pink-800" />
            </div>
          </button>

          </div>
      </section>
      {/* Description content ends */}

    </div>
  )
}

export default SkeletonProductDescriptionDesktop