import { Skeleton } from '@/components/ui/skeleton';
import React, { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi';

const SkeletonProductDescriptionMobile = () => {
  const [isSelected, setIsSelected] = useState<string[]>(['Product Details']) // default value display 

  // Array containing objects that map labels to corresponding product details.
  // This structure allows dynamic rendering of product information based on the selected label.
  const productInformation = [
    {
      "label": "Product Details",
    },
    {
      "label": "Ingredient",
    },
    {
      "label": "What Makes It Advance",
    },
    {
      "label": "How To Apply",
    }
  ]

  const removeValue = (data: string) => {
    const updatedArray = isSelected.filter((item) => item !== data);
    
    if (updatedArray.length !== isSelected.length) {
      setIsSelected(updatedArray);
    }
  };

  return (
    <div className="laptop-s:hidden tablet-s:px-10 tablet-m:px-20">
      <section className="mt-[32px] flex flex-col  w-full bg-white ">
     
          <div className='bg-white'>
            {/* label */}
            <div className= "flex flex-col gap-y-2 border-t border-stone-300 py-4 px-2 bg-white" >  
              {/* label */}
              <div className='flex items-center gap-x-2 justify-between w-full'>
                <div className="text-pink-800 text-sm font-semibold leading-tight">{"Product Details"}</div>
                <div>
                  <Skeleton className='h-5 w-5 bg-pink-800'/>
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col gap-y-2 w-full px-1 pl-2 text-neutral-950 text-xs font-normal leading-normal bg-white">
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
                <Skeleton className='h-2 w-full'/>
              </div>
            </div>

          </div>
          
          {/* more labels */}
          <div className="flex items-center gap-x-2 justify-between w-full border-t border-stone-300 py-4 px-2">
            <div className={`w-[276px] text-neutral-950 text-sm font-semibold leading-tight`}>{"How To Apply"}</div>
            <div className='text-neutral-950 h-6 w-6 inline-flex justify-center items-center bg-white'>
              <Skeleton className='h-5 w-5 bg-neutral-600'/>
            </div>
          </div>
          <div className="flex items-center gap-x-2 justify-between w-full border-t border-stone-300 py-4 px-2">
            <div className={`w-[276px] text-neutral-950 text-sm font-semibold leading-tight`}>{"Ingredient"}</div>
            <div className='text-neutral-950 h-6 w-6 inline-flex justify-center items-center bg-white'>
              <Skeleton className='h-5 w-5 bg-neutral-600'/>
            </div>
          </div>
          <div className="flex items-center gap-x-2 justify-between w-full border-t border-stone-300 py-4 px-2">
            <div className={`w-[276px] text-neutral-950 text-sm font-semibold leading-tight`}>{"What Makes It Advance"}</div>
            <div className='text-neutral-950 h-6 w-6 inline-flex justify-center items-center bg-white'>
              <Skeleton className='h-5 w-5 bg-neutral-600'/>
            </div>
          </div>

      </section>
    </div>
  )
}

export default SkeletonProductDescriptionMobile