import { CombinedSingleProductType } from "@/utils/types"
import { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TbCurrencyDollar } from "react-icons/tb";
import { useCart } from "@/store/store";
import Image from "next/image"
import SvgSeparator from "../SVG/Separator";
import SvgGift from "../SVG/Gift";
import SvgAdvice from "../SVG/Advice";


const ProductDisplayDesktop = ({ product }: { product: CombinedSingleProductType}) => {
  
  const addtoCart = useCart((state) => state.addToCart);

  const [largeImage, setLargeImage] = useState<string>();
  const [isSelected, setIsSelected] = useState<string>();
  const [showBranchesStock, setShowBranchesStock] = useState<boolean>(false)
  const [category, setCategory] = useState<string>();

  useEffect(() => {
    if (product?.categories?.makeup?.cheekMakeupCategory?.name) {
      setCategory(product?.categories?.makeup?.cheekMakeupCategory.name);
    } else if (product?.categories?.makeup?.eyesMakeupCategory?.name) {
      setCategory(product?.categories?.makeup?.eyesMakeupCategory.name);
    } else if (product?.categories?.makeup?.lipsMakeupCategory?.name) {
      setCategory(product?.categories?.makeup?.lipsMakeupCategory.name);
    } else if (product?.categories?.skincare?.skinCareCategory?.name) {
      setCategory(product?.categories?.skincare?.skinCareCategory?.name);
    }
  },[])

  if (category?.endsWith('s')) {
    // Remove "s" from the end of category name
    const newName = category.slice(0, -1); // Removes the last character
    setCategory(newName);
  }

  return (
    <div className='hidden laptop-s:flex justify-between gap-6 h-[550px] mt-2 relative'>
      <section className="flex">
        {/* small images starts */}
        <div className='inline-flex flex-col gap-6 cursor-pointer'>
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
                className='h-[78px] w-full'
              />
            </div>
          ))}
        </div>
        {/* small images ends */}
      </section>

      {/* large image starts */}
      <div className='max-w-[58%]'> 
        <Image
          src={`${largeImage ? largeImage : product?.thumbnail}`}
          width={1000}
          height={1000}
          alt={product?.title!}
          className='h-full'
        />
      </div>
      {/* large image ends */}

      <section className='flex flex-col gap-y-4 min-w-[340px]'>
        <div className="w-full text-brand text-[32px] font-bold capitalize leading-[44.80px]">{product?.title}</div>
        <div className='flex flex-col gap-y-2'>
          <div className="w-full text-neutral-950 text-base font-bold capitalize leading-snug">{product?.tagline}</div>
          <div className="w-full text-neutral-950 text-base font-bold capitalize leading-snug">{category}</div>
          <div className='inline-flex items-center gap-2'>
            <div className="text-zinc-600 leading-[25.20px]">all types of skin</div>
            <div className="opacity-[0.6]">|</div>
            <div className="text-zinc-600 leading-[25.20px]">am or pm</div>
            <div className=" opacity-[0.6]">|</div>
            <div className="text-zinc-600 leading-[25.20px]">brightening</div>
          </div>
          <div className="w-full text-zinc-500 text-base font-bold capitalize leading-snug">Formulated with 92% natural-origin ingredients</div>
        </div>
        <div className="w-full text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] flex items-center -space-x-[4px]">
          <TbCurrencyDollar size={28} />
          <span>{product?.price}</span>
        </div>
        <div className='flex items-center justify-between space-x-2 mt-8'>
          <button 
            onClick={() => addtoCart({...product, quantity: 1, itemPrice: product?.price})}
            className="w-[48%] h-[45px] px-4 py-2 bg-pink-900 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out"
            >
            <div className="w-8 h-8 relative text-white flex items-center justify-center">
              <PiShoppingCartSimpleBold className="w-6 h-6 "/>
            </div>
            <p className="text-white text-base font-normal capitalize leading-7">Add to Bag</p>
          </button>
          <button 
            onClick={() => setShowBranchesStock(true)}
            className="w-[48%] h-[45px] px-1 laptop-m:px-4 py-2 bg-pink-900 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out"
          >
            <div className="w-8 h-8 relative text-white flex items-center justify-center">
              <MdOutlineLocationOn className="w-6 h-6 "/>
            </div>
            <p className="text-white text-base font-normal capitalize leading-[18px]">check in branches stock</p>
          </button>
        </div>

        {/* value proposition start */}
        <div className="h-auto w-full p-4 mt-[16px] bg-red-50 flex-col justify-start items-start gap-4 inline-flex">

          <div className="self-stretch justify-start items-center gap-4 flex">
            <SvgGift/>
            <div className="grow shrink basis-0 text-rose-900 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive 2 free samples when you spend $100</div>
          </div>
            
          <div className="self-stretch justify-start items-start gap-x-4 inline-flex">
            <SvgSeparator/>
            <div className="grow shrink basis-0 text-rose-900 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive $2 when you return 5 empty containers</div>
          </div>

          <div className="self-stretch justify-start items-start gap-x-4 inline-flex">
            <SvgAdvice/>
            <div className="grow shrink basis-0 text-rose-900 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive free 1-2-1 expert advice in branches</div>
          </div>
        </div>
        {/* value proposition ends */}

        {/* <section className={`${showBranchesStock ? 'visible':'hidden'} absolute z-10 top-0 left-0 shadow-2xl`}>
          <CheckBranchStockDesktop
            setShowBranchesStock={setShowBranchesStock}
          />
        </section> */}
      </section>

    </div>
  )
}

export default ProductDisplayDesktop