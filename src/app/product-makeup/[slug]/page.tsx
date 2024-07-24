"use client"
import ProductDescriptionDesktop from '@/components/ProductDetails/ProductDescriptionDesktop';
import ProductDescriptionMobile from '@/components/ProductDetails/ProductDescriptionMobile';
import ProductDisplayDesktop from '@/components/ProductDetails/ProductDisplayDesktop';
import ProductDisplayMobile from '@/components/ProductDetails/ProductDisplayMobile';
import YouMayLike from '@/components/ProductDetails/YouMayLike';
import Wrapper from '@/components/Wrapper'
import { CombinedSingleProductType } from '@/utils/types';
import { useParams } from 'next/navigation';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useEffect, useState } from 'react'

const ProductaDetailsMakeup = () => {
  const BASEURL = process.env.NEXT_PUBLIC_BASEURI;
  const { slug } = useParams()
  const [product, setProduct] = useState<CombinedSingleProductType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${BASEURL}/v1/makeup/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error(`Failed to fetch product: ${response.statusText}`)

        const data = await response.json();
        setProduct(data.makeupProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false); // Set isLoading to false after all processing
      }
    };

    fetchProduct();
  }, [slug]); // Dependency array: Only re-run when slug change

  
  return (
    <div>
      <Wrapper className='px-[20px] laptop-m:px-20'>
        <section className='flex flex-col gap-2 justify-start mt-[32px]'>
          <div className='flex justify-start items-center h-[45px] py-2'>
            <div className="text-zinc-600 text-[11px] mobile-m:text-xs tablet-m:text-sm laptop:text-base font-normal capitalize leading-none tablet-m:leading-7">Home</div>
            <MdOutlineArrowForwardIos className="w-3 tablet-m:w-4 h-3 tablet-m:h-4 text-zinc-600"/>
            <div className="text-zinc-600 text-[11px] mobile-m:text-xs tablet-m:text-sm laptop:text-base font-normal capitalize leading-none tablet-m:leading-7">skincare</div>
            <MdOutlineArrowForwardIos className="w-3 tablet-m:w-4 h-3 tablet-m:h-4 text-zinc-600"/>
            <div className="text-neutral-950 text-[11px] mobile-m:text-xs tablet-m:text-sm laptop:text-base font-semibold tablet-m:font-semibold laptop:font-bold capitalize tracking-tight tablet-m:leading-snug">{product[0]?.title}</div>
          </div>
        </section>

        <section> 
          { product?.map((product) => ( // using map here to receive images otherwise it will show empty thumbnail
            <div key={product?._id}>
              <ProductDisplayDesktop product={product}/>
            </div>
          ))}         

          {/* product display on mobile */}
          { product?.map((product) => ( // using map here to receive images otherwise it will show empty thumbnail
            <div key={product?._id}>
              <ProductDisplayMobile product={product}/>
            </div>
          ))}
        </section>

          {/* product description on desktop */}
        <section>
          { product?.map((product) => (
            <div key={product?._id}>
              <ProductDescriptionDesktop product={product}/>
            </div>
          ))}

          {/* product description on mobile */}
          { product?.map((product) => (
            <div key={product?._id}>
              <ProductDescriptionMobile product={product}/>
            </div>
          ))}
        </section>

        <section>
          { product?.map((product) => (
            <div key={product?._id}>
              <YouMayLike product={product}/>
            </div>
          ))}
        </section>
      </Wrapper>
    </div>
  )
}

export default ProductaDetailsMakeup