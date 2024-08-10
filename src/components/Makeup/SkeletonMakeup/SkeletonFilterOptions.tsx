import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const SkeletonFilterOptions = ({ page }:{ page: string }) => {
  return (
    <div className='hidden laptop-s:flex flex-col w-[288px]'>
      {/* Clear filters starts */}
      <div className=''>
        <button className="h-12 py-2 justify-center items-center gap-2 inline-flex bg-white w-full">
          <div className="max-laptop-s:absolute max-laptop-s:-top-[3px] max-laptop-s:right-0 text-pink-800 text-sm tablet-m:text-base font-normal capitalize leading-normal tablet-m:leading-7">clear all filters</div>
        </button>
      </div>
      {/* Clear filters ends */}

      {/* Out of stock starts*/}
      <div className='flex items-center justify-between gap-2 p-4 border-b border-t border-neutral-200 bg-white w-full'>
        <p className="text-neutral-950 text-base font-bold capitalize leading-snug">out of stock items</p>
        <Skeleton className='h-6 w-14 rounded-none bg-pink-800'/>

      </div>
      <div className='flex flex-col'>

      {/* Skincare Filter options starts */}
      {page === 'skincare' && (
        <div className='flex flex-col'>
          {/* Category */}
          <div className='border-b border-neutral-200 p-4 bg-white'>
            <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
              <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">category</h2>
              <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
                <AiFillCaretDown className={`w-4 h-4`}/>
              </div>
            </div> 

            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
          </div>

          {/* Skin condition */}
          <div className='border-b border-neutral-200 p-4 bg-white'>
            <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
              <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">skin condition</h2>
              <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
                <AiFillCaretDown className={`w-4 h-4`}/>
              </div>
            </div> 

            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
          </div>
        </div>      
      )}
      {/* Skincare Filter options ends */}

      {/* makeup filter oprions starts */}
      { page === 'makeup' && (
        <>
          {/* Cheeks */}
          <div className='border-b border-neutral-200 p-4 bg-white'>
            <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
              <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">cheek</h2>
              <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
                <AiFillCaretDown className={`w-4 h-4`}/>
              </div>
            </div> 

            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
          </div>

          {/* Lips */}
          <div className='border-b border-neutral-200 p-4 bg-white'>
            <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
              <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">lips</h2>
              <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
                <AiFillCaretDown className={`w-4 h-4`}/>
              </div>
            </div> 

            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
          </div>

          {/* Eyes*/}
          <div className='border-b border-neutral-200 p-4 bg-white'>
            <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
              <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">Eyes</h2>
              <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
                <AiFillCaretDown className={`w-4 h-4`}/>
              </div>
            </div> 

            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
            <div className="flex flex-col gap-y-2 mt-2 bg-white">
              <div className='inline-flex items-center gap-x-3 bg-white'>
                <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
                <Skeleton className='h-5 w-24'/>
              </div>
            </div> 
          </div>
        </>
      )}

        {/* Featured */}
        <div className='border-b border-neutral-200 p-4 bg-white'>
          <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
            <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">featured</h2>
            <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
              <AiFillCaretDown className={`w-4 h-4`}/>
            </div>
          </div> 

          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
        </div>

        {/* Price */}
        <div className='border-b border-neutral-200 p-4 bg-white'>
          <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white'>
            <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">price</h2>
            <div className="flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out">
              <AiFillCaretDown className={`w-4 h-4`}/>
            </div>
          </div> 

          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
          <div className="flex flex-col gap-y-2 mt-2 bg-white">
            <div className='inline-flex items-center gap-x-3 bg-white'>
              <Skeleton className='w-4 h-4 border-2 bg-white ring-2 ring-white ring-inset border-neutral-950 rounded-sm'/>
              <Skeleton className='h-5 w-24'/>
            </div>
          </div> 
        </div>
      </div>
      {/* Makeup Filter options ends */}

    </div>
  )
}

export default SkeletonFilterOptions

