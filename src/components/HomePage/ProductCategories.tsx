import Image from "next/image"
import Link from "next/link"

const ProductCategories = () => {
  const categoriesProduct:any = [
    {
      name: "Women Makeup",
      slug: "makeup",
      src: '/womenMakeUp.png'
    },
    {
      name: "Women Skincare",
      slug: "skincare",
      src: '/womenSkincare.png'
    },
    {
      name: "Gifts & Sets",
      slug: "gifts-sets",
      src: '/WomenGifts.png'
    },
       
  ]
  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="font-bold text-xl">Product Categories</h2>
      <div className="flex flex-row gap-x-2 mt-6 tablet-s:gap-x-4 laptop-s:gap-x-8 mx-5 tablet-s:mx-12 laptop-s:mx-64">
        {categoriesProduct.map((item: any, index: any) => (
          <Link href={item.slug} key={index} className="flex flex-col gap-y-2 tablet-s:gap-y-4">
            <Image src={item?.src} alt={item?.name} width={300} height={100}/>
            <h2 className="text-center text-xs font-normal tablet-s:text-lg text-neutral-950 capitalize leading-tight tablet-m:leading-loose min-w-[94px]">
              {item?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductCategories