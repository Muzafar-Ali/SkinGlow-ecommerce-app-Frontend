'use client'
import { IoMdMenu } from "react-icons/io"
import Wrapper from "../Wrapper"
import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineSearch } from "react-icons/md"
import { useState } from "react"
import Logo from "./Logo"
import { GrLanguage } from "react-icons/gr"

import { PiShoppingCartSimpleBold } from "react-icons/pi"
import Link from "next/link"
import MobileMenu from "./NavbarMenu/MenuMobile/MobileMenu"
// import { useCart } from '@/store/store';


const NavbarMobile = () => {
  const [isDropDown, setIsDropDown] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isLanguageLocationOpen, setIsLanguageLocationOpen] = useState<boolean>(false)

  // const itemsCart = useCart((state) => state.cartItems);

  return (
    <div>
      <div className='laptop-s:hidden h-[64px] flex flex-row items-center justify-between border-b border-neutral-200 px-[20px] w-full max-w-[1440px] mx-auto relative'>
        
        {/* hamburer, close, search icons */}
        <div className='inline-flex justify-between items-center gap-3 mobile-l:gap-6 tablet-m:gap-10 laptop-s:gap-16 h-[90%]'>
          {/* hamburger menu */}
          <div className={`${isDropDown ?  'hidden':'visible' } mt-[32px] mb-[8px]`}
            onClick={() => setIsDropDown(true)} 
          >
            <IoMdMenu className='h-6 w-6'/>
          </div>
          {/* close icon */}
          <div className={`${isDropDown ? 'visible' : 'hidden'} mt-[32px] mb-[8px]`}
            onClick={() => setIsDropDown(false)}
          >
            <AiOutlineClose className="w-6 h-6"/>
          </div>
          {/* search icon */}
          <div className='inline-flex justify-center items-center cursor-pointer mt-[29px] mb-[11px]'
            onClick={() => setIsSearchOpen(true)} 
          >
            <MdOutlineSearch className="w-6 h-6"/>
          </div>
        </div>

        {/* logo */}
        <div className="w-20 h-[39px] mt-[11px] mb-[14px] inline-flex flex-col justify-center items-center relative">
          <div className="w-[75px] h-[75px] bg-pink-800 rounded-full blur-[180px] absolute" />
          <Logo/>
        </div>

        {/* Language & Cart */}
        <div className='inline-flex justify-between items-center gap-1 mt-[35px] mb-[12.5px] cursor-pointer'>
          <div 
            onClick={() => setIsLanguageLocationOpen(true)}
            className='flex items-center gap-1'
          >
            <GrLanguage className="w-4 h-4"/>
            <span className='text-neutral-950 text-sm font-normal capitalize leading-none'>US <span className='text-zinc-600 text-[10px] font-semibold capitalize leading-[14px]'>(ENG)</span></span>
          </div>
          
          <div className='inline-flex justify-center items-center p-2 gap-1 cursor-pointer relative'>
            <Link href={"/cart"}>
              <div className='bg-pink-900 rounded-full h-[14px] w-[14px] flex justify-center items-center absolute top-[0px] right-[4px]'>
                <span className='text-white text-xs'>{0}</span>
              </div>
              <PiShoppingCartSimpleBold className="w-4 h-4"/>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu */}
      {/* <MobileMenu
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
      /> */}
              
    </div>
  )
}

export default NavbarMobile