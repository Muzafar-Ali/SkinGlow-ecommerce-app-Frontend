import { CombinedSingleProductType } from "@/utils/types";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TbCurrencyDollar } from "react-icons/tb";

const ProductDescriptionMobile = ({ product }: { product: CombinedSingleProductType}) => {
  
 
  const [isSelected, setIsSelected] = useState<string[]>(['Product Details']) // default value display 

    // Array containing objects that map labels to corresponding product details.
  // This structure allows dynamic rendering of product information based on the selected label.
  const productInformation = [
    {
      "label": "Product Details",
      "content": product?.productDetails.description
    },
    {
      "label": "Ingredient",
      "content": product?.productDetails.ingredients
    },
    {
      "label": "What Makes It Advance",
      "content": product?.productDetails.features
    },
    {
      "label": "How To Apply",
      "content": product?.productDetails.howToApply
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
      { productInformation?.map((data, index) => (
        <div key={index} className='bg-white'>
          <div 
            onClick={() => setIsSelected([...isSelected, data?.label]) }  
            className={`${isSelected.includes(data?.label) ? 'hidden':' visible'} flex items-center gap-x-2 justify-between w-full border-t border-stone-300 py-4 px-2`}
          >
            <div className={`w-[276px] text-neutral-950 text-sm font-semibold leading-tight`}>{data?.label}</div>
            <div className='text-neutral-950 h-6 w-6 inline-flex justify-center items-center bg-white'>
              <BiPlus className='h-5 w-5'/>
            </div>
          </div>
          <div className={`${isSelected.includes(data?.label) ? 'visible':'hidden'} flex flex-col gap-y-2 border-t border-stone-300 py-4 px-2 bg-white`}>  
            <div className='flex items-center gap-x-2 justify-between w-full'>
              <div className="text-pink-800 text-sm font-semibold leading-tight">{data?.label}</div>
              <div
                 onClick={() => removeValue(data?.label) }  
                className='text-pink-800 h-6 w-6 inline-flex justify-center items-center bg-white'
                >
                <BiMinus className='h-5 w-5'/>
              </div>
            </div>
            <div className="w-full px-1 pl-2 text-neutral-950 text-xs font-normal leading-normal bg-white">
              {/* <ReactMarkdown> */}
                {data?.content}
              {/* </ReactMarkdown> */}
            </div>
          </div>
        </div>
      ))}

    </section>
    
      </div>
  )
}

export default ProductDescriptionMobile