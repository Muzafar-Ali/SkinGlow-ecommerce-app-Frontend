import { CombinedSingleProductType } from "@/utils/types"
import Image from "next/image"
import { useState } from "react";
import SvgGift from "../SVG/Gift";
import SvgSeparator from "../SVG/Separator";
import SvgAdvice from "../SVG/Advice";
import { TbCurrencyDollar } from "react-icons/tb";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "@/store/store";

const ProductDisplayMobile = ({ product }: { product: CombinedSingleProductType}) => {

  const addtoCart = useCart((state) => state.addToCart);

  const [largeImage, setLargeImage] = useState<string>();
  const [isSelected, setIsSelected] = useState<string>();
  const [showBranchesStock, setShowBranchesStock] = useState<boolean>(false)
  const [category, setCategory] = useState<string>();

  return (
    <section className='flex flex-col justify-between gap-6 h-auto w-full mt-2 laptop-s:hidden tablet-s:px-10 tablet-m:px-20'>

      <section className='w-full flex flex-col gap-y-4'>
        <div className="text-pink-800 text-2xl font-bold leading-[33.60px]">{product?.title}</div>
        
        <div className='flex flex-col gap-y-2'>
          <div className="w-full text-neutral-950 text-sm font-semibold leading-tight">{product?.tagline}</div>
          <div className='inline-flex gap-x-2 items-center'>
            <div className="text-zinc-600 text-xs font-normal leading-none">all types of skin</div>
            <div className="opacity-[0.6]">|</div>
            <div className="text-zinc-600 text-xs font-normal leading-none">am or pm</div>
            <div className=" opacity-[0.6]">|</div>
            <div className="text-zinc-600 text-xs font-normal leading-none">brightening</div>
          </div>
          <div className="w-full text-zinc-500 text-sm font-semibold leading-tight">Formulated with 92% natural-origin ingredients</div>
        </div>
      </section>

      {/* large image starts */}
      <section className='w-full h-auto'> 
        <Image
          src={`${largeImage ? largeImage : product?.thumbnail}`}
          width={1000}
          height={1000}
          alt={product?.title!}
          className='h-full'
          />
      </section>
      {/* large image ends */}

      {/* small images starts */}
      <section className='inline-flex flex-row tablet-s:gap-6 w-full cursor-pointer'>
        { product?.images?.map((image, index) => (
          <div
            key={index} 
            className={`${isSelected === image ? 'border-[3px] border-pink-300': 'border-[3px] border-pink-50'}`}
            onMouseEnter={() => {
              setLargeImage(image)                
              setIsSelected(image)
            }} 
          >
            <Image
              src={image}
              width={80}
              height={78}
              alt={product?.title}            
              className='h-[78px]'
            />
          </div>
        ))}
      </section>
      {/* small images ends */}

      <div className="w-full text-neutral-950 text-xl font-bold leading-7 flex items-center -space-x-[3px]">
        <TbCurrencyDollar size={20} />
        <span>{product?.price}</span>
      </div>
      <div className="flex flex-col items-center">

      {/* Add to cart button starts */}
      <button 
        onClick={() => addtoCart({...product, quantity: 1, onQuantityPrice: product?.price})}
        className="w-full h-[45px] px-4 py-2 mt-2 bg-pink-800 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out"
        >
        <div className="w-8 h-8 relative text-white flex items-center justify-center">
          <PiShoppingCartSimpleBold className="w-6 h-6"/>
        </div>
        <p className="text-white text-base font-normal capitalize leading-7">Add to Bag</p>
      </button>
      {/* Add to cart button ends */}

      </div>

      {/* value proposition start */}
      <section className="h-auto w-full p-4 bg-red-50 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 flex">
          <SvgGift/>
          <div className="grow shrink basis-0 text-rose-900 text-xs tablet-s:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive 2 free samples when you spend $100</div>
        </div>
        <div className="self-stretch justify-start items-center gap-4 flex">
          <SvgSeparator/>
          <div className="grow shrink basis-0 text-rose-900 text-xs tablet-s:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive $2 when you return 5 empty containers</div>
        </div>
        <div className="self-stretch justify-start items-center gap-4 flex">
          <SvgAdvice/>
          <div className="grow shrink basis-0 text-rose-900 text-xs tablet-s:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive free 1-2-1 expert advice in branches</div>
        </div>
      </section>
      {/* value proposition end */}

      <section className={`${showBranchesStock ? 'visible':'hidden'} absolute z-10 top-0 left-0 shadow-2xl`}>
        {/* <CheckBranchStockMobile
          setShowBranchesStock={setShowBranchesStock}
        /> */}
      </section>

    </section>
  )
}

export default ProductDisplayMobile