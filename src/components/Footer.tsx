'use client'
import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { MdOutlineCall, MdOutlineLocationOn } from 'react-icons/md'
import { FaFacebookF, FaRedditAlien, FaTiktok } from 'react-icons/fa'
import { SiPinterest } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import SvgBunny from './SVG/Bunny'
import SvgLeaf from './SVG/Leaf'
import SvgWheat from './SVG/Wheat'
import SvgRecycle from './SVG/Recycle'

const Footer = () => {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <div className='max-w-[1520px] mx-auto mt-[50px] laptop-s:mt-[32px] '>
      <section className='bg-red-50 py-[16px] tablet-m:py-[24px] px-[20px] tablet-m:px-[54px] laptop-s:px-[81px] laptop-l:px-[108px] grid grid-cols-2 laptop-s:grid-cols-4 gap-y-[16px] gap-x-[6px] laptop-s:gap-4 w-full '>
        <div className='inline-flex justify-start items-center gap-[6px] tablet-m:gap-4 bg-red-50'>
          <div className='w-6 tablet-m:w-10 h-6 tablet-m:h-10'>
            <SvgBunny/>
          </div>
          <p className='text-rose-900 text-xs tablet-m:text-sm laptop-s:text-base font-normal capitalize leading-none tablet-m:leading-7 bg-red-50'>No tests on animals</p>
        </div>
        <div className='inline-flex justify-start items-center gap-[6px] tablet-m:gap-4 bg-red-50 '>
          <div className='w-6 tablet-m:w-10 h-6 tablet-m:h-10'>
            <SvgLeaf/>
          </div>
          <p className='text-rose-900 text-xs tablet-m:text-sm laptop-s:text-base font-normal capitalize leading-none tablet-m:leading-7 bg-red-50'>No animal-derived ingredients</p>
        </div>
        <div className='inline-flex justify-start items-center gap-[6px] tablet-m:gap-4 bg-red-50 '>
          <div className='w-6 tablet-m:w-10 h-6 tablet-m:h-10'>
            <SvgWheat/>    
          </div>
          <p className='text-rose-900 text-xs tablet-m:text-sm laptop-s:text-base font-normal capitalize leading-none tablet-m:leading-7 bg-red-50'>No gluten, or gluten by products</p>
        </div>
        <div className='inline-flex justify-start items-center gap-[6px] tablet-m:gap-4 bg-red-50 '>
          <div className='w-6 tablet-m:w-10 h-6 tablet-m:h-10'>
            <SvgRecycle/>
          </div>
          <p className='text-rose-900 text-xs tablet-m:text-sm laptop-s:text-base font-normal capitalize leading-none tablet-m:leading-7 bg-red-50'>Recyclable packaging</p>
        </div>
      </section>

      <section className='bg-rose-950 py-[24px] tablet-m:py-[48px] laptop-s:py-[80px] inline-flex flex-col laptop-s:flex-row justify-between gap-[24px] tablet-m:gap-[60px] laptop-l:gap-[100px] px-[20px] tablet-m:px-[54px] laptop-s:px-[80px] laptop-l:px-[108px] mx-auto w-full'>
        <div className='inline-flex flex-col items-start'>
          <h2 className="text-start  text-white text-base tablet-m:text-2xl font-bold capitalize leading-snug tablet-m:leading-[33.60px] mb-[16px]">How can we Help?</h2>
          <div className='inline-flex flex-col justify-center items-start gap-2  '>
            <Link href={'/branches'} className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Skinglow branches</Link>
            <Link href={'/blogs'} className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Blog</Link>
            <p className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Contact Us</p>
            <p className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>FAQ</p>
            <p className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Our Brand</p>
          </div>
        </div>
        <div className='inline-flex flex-col items-start'>
          <h2 className="text-center text-white text-base tablet-m:text-2xl font-bold capitalize leading-snug tablet-m:leading-[33.60px] mb-[16px]">Products</h2>
          <div className='inline-flex flex-col justify-center items-start gap-2  '>
            <Link href={'/makeup'} className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Women Make up</Link>
            <Link href={'/skincare'}className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Women Skincare</Link>
            <Link href={'/gifts-sets'} className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Gifts & Sets</Link>
          </div>
        </div>
        <div className='bg-rose-950 inline-flex flex-col items-start laptop-s:max-w-[450px] laptop-l:max-w-[600px]'>
          <h2 className="text-center text-white text-base tablet-m:text-2xl font-bold capitalize leading-snug tablet-m:leading-[33.60px] mb-[16px]">keep in touch with Skinglow</h2>
          <div className='inline-flex flex-col justify-center items-start gap-2 w-full '>
            <p className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 w-full'>Join the Skinglow newsletter and be first to hear about news, offers and skincare advice</p>
            <div className='inline-flex flex-col laptop-s:flex-row items-baseline gap-4 w-full bg-red-950 relative'>
              <input
                type='email'
                placeholder='Email Address'
                className='bg-rose-950 border px-2 border-stone-300 h-10 tablet-m:h-12 w-full laptop-s:w-[80%] text-stone-300 text-sm tablet-m:text-lg font-normal leading-[25px] tablet-m:leading-9 outline-none'
              />
              {/* Desktop butoon */}
              <button className='hidden laptop-s:block text-white border-2 border-white opacity-60 min-w-1/6 max-w-full capitalize h-12 px-4'> subscribe </button>
            </div>
            <div className='relative inline-flex gap-2 tablet-m:gap-4 max-laptop-s:mt-[16px]'>
              <input 
                type="text" 
                name="" 
                id="" 
                className={`${isActive ?'bg-white ring-inset ring-1 ring-black ':''} w-4 h-4 rounded-sm border-2 hover:border-[3px] border-white cursor-pointer bg-transparent`}
                onClick={() => setIsActive((prev) => !prev)}
              />
              <p className='text-white text-xs tablet-m:text-sm font-normal capitalize leading tablet-m:leading-[25.20px]'>By submitting your email, you agree to receive advertising emails from Skinglow. Please review our Privacy Policy, which includes our Financial Incentive Notice for CA residents.</p>
            </div>
            {/* Mobile button */}
            <button className='laptop-s:hidden text-white border-2 border-white opacity-60 w-full capitalize h-12 px-4'>
              subscribe 
            </button>
          </div>
        </div>
        
      </section>

      <section className='bg-stone-900 px-[20px] tablet-m:px-[54px] laptop-s:px-[108px] py-4 laptop-s:py-3 flex flex-col tablet-m:flex-row justify-between items-start tablet-m:items-center'>
        <div className='inline-flex flex-col tablet-m:flex-row items-center bgr'>
          <button className='inline-flex items-center justify-between gap-2 py-2 tablet-m:py-5 tablet-m:px-4'>
            <MdOutlineLocationOn className="w-6 h-6 text-[#fa58a6] "/>
            <h2 className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Dr. Richardson, California</h2>
          </button>
          {/* line in between */}
          <div className="w-6 h-[0px] -rotate-90 border border-pink-500 hidden laptop-s:block"></div>
          <button className='inline-flex items-center justify-between gap-2 py-2 tablet-m:py-5 tablet-m:px-4'>
            <MdOutlineCall className="w-6 h-6 text-[#fa58a6]  rotate-12"/>
            <h2 className='text-white text-sm tablet-m:text-base font-normal capitalize leading-tight tablet-m:leading-7 '>Dr. Richardson, California</h2>
          </button>
        </div>

        {/* social media icons */}
        <div className='inline-flex items-center gap-5 bg-stone-900 max-tablet-m:mt-4'>
          <Link href={'#'}>
            <button className='w-6 laptop-s:w-10 h-6 laptop-s:h-10 inline-flex justify-center items-center'>
              <BsInstagram className="w-6 h-6 text-[#fa58a6] cursor-pointer hover:text-pink-300"/>
            </button>
          </Link>
            <Link href={'#'}>
              <button className='w-6 laptop-s:w-10 h-6 laptop-s:h-10 inline-flex justify-center items-center'>
                <FaFacebookF className="w-6 h-6 text-[#fa58a6] cursor-pointer hover:text-pink-300"/>
              </button>
            </Link>
            <Link href={'#'}>
              <button className='w-6 laptop-s:w-10 h-6 laptop-s:h-10 inline-flex justify-center items-center'>
                <FaXTwitter className="w-6 h-6 text-[#fa58a6] cursor-pointer hover:text-pink-300"/>
              </button>
            </Link>
            <Link href={'#'}>
              <button className='w-6 laptop-s:w-10 h-6 laptop-s:h-10 inline-flex justify-center items-center'>
                <SiPinterest className="w-6 h-6 text-[#fa58a6] cursor-pointer hover:text-pink-300"/>
              </button>
            </Link>
            <Link href={'#'}>
              <button className='w-6 laptop-s:w-10 h-6 laptop-s:h-10 inline-flex justify-center items-center'>
                <FaRedditAlien className="w-6 h-6 text-[#fa58a6] cursor-pointer hover:text-pink-300"/>
              </button>
            </Link>
            <Link href={'#'}>
              <button className='w-6 laptop-s:w-10 h-6 laptop-s:h-10 inline-flex justify-center items-center'>
                <FaTiktok className="w-6 h-6 text-[#fa58a6] cursor-pointer hover:text-pink-300"/>
              </button>

            </Link>
        </div>
      </section>

      <section className='flex flex-col tablet-m:flex-row items-start tablet-m:items-center justify-between px-[20px] tablet-m:px-[54px] laptop-s:px-[108px] bg-stone-950 h-14'>
        <div className="w-[257px] h-6 justify-start items-center gap-2 inline-flex">
          <div className=" text-white" >&#169;</div>
          <div className="text-stone-300 text-xs font-semibold tracking-wide">2023 Skinglow. All Rights Reserved.</div>
        </div>

        <div className="h-[22px] justify-start items-start gap-6 inline-flex">
          <div className="text-stone-300 text-xs font-normal capitalize leading-snug">Terms & Conditions</div>
          <div className="text-stone-300 text-xs font-normal capitalize leading-snug">Privacy Policy</div>
        </div>
      </section>
    </div>
  )
}

export default Footer






