import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import Link from 'next/link'

const SpecialOffer = () => {
  return (
    <>
      {/* Mobile screen */}
      <div className='tablet-m:hidden mt-[32px] flex flex-col items-center px-[20px]'>
        <h2 className="text-neutral-950 text-2xl mb-[16px] font-bold capitalize leading-[33.60px] bg-transparent">Special offers</h2>
      
        <div className='w-full'>
          <Image
            src={'/specialoffers.png'}
            alt=''
            width={1000}
            height={1000}
            className='w-full h-full'
          />
        </div>
        <div className='w-full mt-[12px] flex flex-col items-start gap-y-2 bg-transparent'>
          <h2 className="text-brand text-[32px] capitalize leading-[44.80px] bg-transparent hidden laptop:block">Save up to 50%</h2>
          <p className="text-neutral-950 text-sm font-semibold leading-tight bg-transparent">Mother&apos;s Day is coming!</p>
          <p className="text-neutral-950 text-sm font-normal leading-tight">
            visit your local SkinGlow branches to find out more about our special offers in make up and skincare products. 
          </p>
        </div>

        <button className="w-[152px] h-10 px-4 py-2 border border-brand justify-center items-center gap-2 inline-flex mt-[16px] hover:opacity-40 transition-all duration-200 ease-in-out">
          <div className="text-brand text-sm font-normal capitalize leading-normal">find branches</div>
        </button> 
      </div>

      {/* Desktop screen */}
      <div className='hidden w-full max-w-[1520px] mx-auto tablet-m:flex gap-x-[24px] laptop-s:gap-x-[48px] mt-20 bg-red-50 px-20 '>
        <div className='w-[49%]'>
          <Image
            src={'/specialoffers.png'}
            alt=''
            width={1000}
            height={1000}
            className='w-full h-full'
          />
        </div>
        <div className='w-[51%] tablet-m:mt-[13px] laptop-s:mt-[44px] laptop-s:mb-[40px] flex flex-col gap-y-2 laptop-l:gap-6'>
          <h2 className="text-neutral-950 text-xl laptop-s:text-2xl font-bold capitalize leading-[33.60px]">Special offers</h2>
          <h2 className="text-brand text-[28px] laptop-s:text-[32px] capitalize leading-[44.80px]">Save up to 50%</h2>
          <p className="text-neutral-950 text-sm laptop-s:text-base font-normal capitalize leading-7">
            Mother&apos;s Day is coming! 
            <br/>For everything she&apos;s given you, it&apos;s time to give back. Shower her with love, happiness, and the best of SkinGlow. 
          </p>
          <p className="text-brand text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize laptop-s:leading-snug">
            visit your local skinGlow branches to find out more about our special offers in make up and skincare products. 
          </p>
          <button className="w-[183px] h-12 px-4 py-2 bg-pink-800 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out ml-auto">
            <Link href={'/branches'} className="text-white text-base font-normal capitalize leading-7">find branches</Link>
          </button>
        </div>
      </div>

    </>
  )
}

export default SpecialOffer