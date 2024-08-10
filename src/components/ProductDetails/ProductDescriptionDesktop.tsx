import { CombinedSingleProductType } from "@/utils/types"
import { useState } from "react"
import { MdOutlineArrowForwardIos } from "react-icons/md"


const ProductDescriptionDesktop = ({ product }: { product: CombinedSingleProductType}) => {

  
  const [isReadLess, setIsReadLess] = useState(true) // State to toggle between showing full or summarized product information.
  const [isSelected, setIsSelected] = useState<string>();
  const [isLabelSelected, setIsLableSelected] = useState<string>('Product Details') // default value display

  
  // Array containing objects that map labels to corresponding product details.
  // This structure allows dynamic rendering of product information based on the selected label.
  const productInformation = [
    {
      "label": "Product Details",
      "content": product?.productDetails.description
    },
    {
      "label": "How To Apply",
      "content": product?.productDetails.howToApply
    },
    {
      "label": "Ingredient",
      "content": product?.productDetails.ingredients
    },
    {
      "label": "What Makes It Advance",
      "content": product?.productDetails.features
    },
  ] as const
  
  const selectedLabel = productInformation?.filter((item) => item?.label === isLabelSelected)
  
  const maxCharacters = 300; 
  
  const getContent = (item: string) => {
    if (isReadLess) {
      return item?.slice(0, maxCharacters) + (item?.length > maxCharacters ? ' ...' : '');
    }
    return '';
  };

  return (
    <div className='hidden laptop-s:flex flex-col mb-20'>
      {/* Description headings starts */}
      <section className='flex items-center justify-between w-full mt-[32px] py-2'>
        {/* Product Details */}
        <div 
          className={`${isLabelSelected === "Product Details" ? "text-pink-800 border-b-2 border-pink-800":"text-zinc-600"} text-lg font-bold leading-7 cursor-pointer`}
          onClick={() => setIsLableSelected("Product Details") }  
        >
          { productInformation[0].label }
        </div>

        {/* How To Apply */}
        <div 
          className={`${isLabelSelected === "How To Apply" ? "text-pink-800 border-b-2 border-pink-800":"text-zinc-600"} text-lg font-bold leading-7 cursor-pointer`}
          onClick={() => setIsLableSelected("How To Apply") }  
          >
          { productInformation[1].label }
        </div>
        
        {/* Ingredient */}
        <div 
          className={`${isLabelSelected === "Ingredient" ? "text-pink-800 border-b-2 border-pink-800":"text-zinc-600"} text-lg font-bold leading-7 cursor-pointer`}
          onClick={() => setIsLableSelected("Ingredient") }  
          >
          { productInformation[2].label }
        </div>

        {/* What Makes It Advance */}
        <div 
          className={`${isLabelSelected === "What Makes It Advance" ? "text-pink-800 border-b-2 border-pink-800":"text-zinc-600"} text-lg font-bold leading-7 cursor-pointer`}
          onClick={() => setIsLableSelected("What Makes It Advance") }  
          >
          { productInformation[3].label }
        </div>
      </section>
      {/* Description headings ends */}
      
      {/* Description content starts */}
      <section className='flex flex-col gap-y-4 py-6 px-4 w-full'>
        { selectedLabel?.map((item, index) => (
          <div key={index}>
            <div className="max-w-[1192px] text-pink-800 text-lg font-bold leading-7">{item?.label}</div>
            <div className="max-w-[1192px] markdown text-neutral-950 text-base font-normal capitalize leading-loose">
              {/* <ReactMarkdown> */}
                { isReadLess ? getContent(item?.content!) : item?.content}
              {/* </ReactMarkdown> */}
            </div>
            
            <button 
              onClick={() => setIsReadLess(false)}
              className={`${isReadLess ? 'visible':'hidden'} inline-flex items-center justify-start gap-x-2`}
            >
              <span className="text-pink-800 text-base font-normal capitalize leading-7">Read More</span>
              <div className="text-pink-800">
                <MdOutlineArrowForwardIos className="w-6 h-6" />
              </div>
            </button>

            <button 
              onClick={() => setIsReadLess(true)}
              className={`${isReadLess ? 'hidden':'visible'} inline-flex items-center justify-start gap-x-2`}
            >
              <span className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</span>
              <div className="text-pink-800 rotate-180">
                <MdOutlineArrowForwardIos className="w-6 h-6" />
              </div>
            </button>
          </div>
        ))}
      </section>
      {/* Description content ends */}

    </div>
  )
}

export default ProductDescriptionDesktop