import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonProductDisplayMobile = () => {
  return (
    <div className='flex flex-col justify-between gap-6 h-auto w-full mt-2 tablet-s:px-10 tablet-m:px-20 laptop-s:hidden'>

      <section className='w-full flex flex-col gap-y-4'>
        {/* Title */}
        <Skeleton className="h-5 w-1/2 bg-pink-800"/>
        
        <div className='flex flex-col gap-y-4'>
          {/* Tagline */}
          <Skeleton className="h-3 w-full"/>

          <div className='inline-flex gap-x-2 items-center '>
            <Skeleton className='h-2 w-full'/>
            <div className="opacity-[0.6]">|</div>
            <Skeleton className='h-2 w-full'/>
            <div className=" opacity-[0.6]">|</div>
            <Skeleton className='h-2 w-full'/>
          </div>
          <Skeleton className='h-3 w-full'/>
        </div>
      </section>

      {/* large image starts */}
      <section className='w-full h-auto'> 
        <Skeleton className='h-[350px] w-full rounded-none'/>
      </section>

      {/* small images */}    
      <section className="flex">
        <div className='inline-flex flex-row gap-x-2 tablet-s:gap-x-6 w-full cursor-pointer'>
          <Skeleton className='h-[78px] w-[78px] rounded-none'/>
          <Skeleton className='h-[78px] w-[78px] rounded-none'/>
          <Skeleton className='h-[78px] w-[78px] rounded-none'/>
          <Skeleton className='h-[78px] w-[78px] rounded-none'/>
          {/* <Skeleton className='h-[78px] w-[78px]'/> */}
        </div>
      </section>
      
      {/* price */}
      <div className="w-full text-neutral-950 text-xl font-bold leading-7 flex items-center -space-x-[3px]">
        <Skeleton className='h-8 w-10'/>
      </div>
      
      {/* button add to cart*/}
      <div className="flex flex-col items-center">
        <Skeleton className='w-full h-[45px] bg-pink-900 rounded-none'/>
      </div>

      {/* value proposition */}
      <section className="h-auto w-full p-4 bg-red-50 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 flex">
          <Skeleton className='h-2 w-full'/>
        </div>
          
        <div className="self-stretch justify-start items-start gap-x-4 inline-flex">
          <Skeleton className='h-2 w-full'/>
        </div>

        <div className="self-stretch justify-start items-start gap-x-4 inline-flex">
          <Skeleton className='h-2 w-full'/>
        </div>
      </section>

    </div>
    
  )
}

export default SkeletonProductDisplayMobile