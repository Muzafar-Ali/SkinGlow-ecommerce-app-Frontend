import React from 'react'
import { Skeleton } from '../../ui/skeleton'
import { TbCurrencyDollar } from 'react-icons/tb'

const SkeletonProductDisplayDesktop = () => {
  return (
    <div className='hidden laptop-s:flex justify-between gap-x-6 laptop-m:gap-x-8 h-[550px] mt-2 w-full relative'>
      <section className="flex">
        {/* small images starts */}
        <div className='inline-flex flex-col gap-6 cursor-pointer'>
          <Skeleton className='h-[78px] w-[78px]'/>
          <Skeleton className='h-[78px] w-[78px]'/>
          <Skeleton className='h-[78px] w-[78px]'/>
          <Skeleton className='h-[78px] w-[78px]'/>
          <Skeleton className='h-[78px] w-[78px]'/>
        </div>
        {/* small images ends */}
      </section>

      {/* large image starts */}
      <section className='max-w-[58%]'> 
        <Skeleton className='w-[500px] laptop-m:w-[650px] laptop-l:w-[760px] h-full'/>
      </section>

      <section className='flex flex-1 flex-col gap-y-8 min-w-[340px]'>
        <Skeleton className="h-8 w-3/4" />
        <div className='flex flex-col gap-y-4'>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className='inline-flex items-center gap-2'>
            <Skeleton className='h-4 w-20'/>
            <div className="opacity-[0.6]">|</div>
            <Skeleton className='h-4 w-20'/>
            <div className=" opacity-[0.6]">|</div>
            <Skeleton className='h-4 w-20'/>
          </div>
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="w-full text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] flex items-center -space-x-[4px]">
          <Skeleton className='h-8 w-10'/>
        </div>
        <div className='flex items-center justify-between space-x-2 mt-8'>
          <Skeleton className='w-[48%] h-[45px] bg-pink-900 rounded-none'/>
          <Skeleton className='w-[48%] h-[45px] bg-pink-900 rounded-none'/>
        </div>

        {/* value proposition start */}
        <div className="h-auto w-full p-4 mt-[16px] bg-red-50 flex-col justify-start items-start gap-x-4 gap-y-6 inline-flex">

          <div className="self-stretch justify-start items-center gap-4 flex">
            <Skeleton className='h-2 w-full'/>
          </div>
            
          <div className="self-stretch justify-start items-start gap-x-4 inline-flex">
            <Skeleton className='h-2 w-full'/>
          </div>

          <div className="self-stretch justify-start items-start gap-x-4 inline-flex">
            <Skeleton className='h-2 w-full'/>
          </div>
        </div>
        {/* value proposition ends */}
      </section>
    </div>
    
  )
}

export default SkeletonProductDisplayDesktop