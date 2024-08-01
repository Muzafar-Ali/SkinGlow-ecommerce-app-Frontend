'use client'
import CustomDot from "@/components/CarouselButtons/CustomDot";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/utils/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurBlogsMobile = () => {
  
  const responsive = {
    // laptopLarge: {
    //     breakpoint: { max: 3000, min: 1440 },
    //     items: 4,
    //     partialVisibilityGutter: 40,
    // },
    // laptop: {
    //     breakpoint: { max: 1439, min: 1024 },
    //     items: 4,
    //     partialVisibilityGutter: 40,
    // },
    // tablet: {
    //     breakpoint: { max: 1023, min: 768 },
    //     items: 2,
    // },
    tabletsSmall: {
        breakpoint: { max: 767, min: 600 },
        items: 2,
    },

    mobile: {
        breakpoint: { max: 425, min: 0 },
        items: 1,
    },
  };

   
  return (
    <Wrapper className='tablet-m:hidden h-full pb-[50px]'>
      <div className="text-neutral-950 text-xl font-bold text-center mb-4 capitalize leading-[33.60px]">
        Blogs
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        itemClass='px-[10px]'
        containerClass='mx-10px'
        showDots={true}
        renderDotsOutside={true}
        customDot={<CustomDot/>}
      >
       { blogs?.slice(0,4).map((blog) => (
          <Link href={`/blogs/${'How to get clear skin fast'}`} key={blog?.id}>
            <div>
              <Image
                src={blog?.image} 
                alt=''
                width={1000}
                height={346}
                className=''
              />
            </div>
            {/* text */}
            <div>
              <div className='flex flex-col gap-y-2'>
                <h2 className="text-neutral-950 text-base font-bold leading-snug">{blog?.title}</h2>
                <div className="h-4 justify-start items-center gap-2 inline-flex">
                  <div className="text-zinc-600 text-[10px] font-semibold leading-[14px]">{blog?.category}</div>
                  <div className="text-zinc-600 origin-top">|</div>
                  <div className="text-zinc-600 text-[10px] font-semibold leading-[14px]">{blog?.author}</div>
                  <div className="text-zinc-600 origin-top">|</div>
                  <div className="text-zinc-600 text-[10px] font-semibold leading-[14px]">{blog?.posted}</div>
                </div>
                <p className="text-neutral-950 text-xs font-normal leading-tight text-ellipsis overflow-hidden whitespace-nowrap">{ blog?.content}</p>
              </div>
            </div>
          </Link>
          ))
        }
      </Carousel>
      
      <div className="h-6 justify-center items-center gap-2 inline-flex mt-auto absolute top-[100%] left-[45%]">
        <Link href={`/blogs`} className="text-pink-800 text-sm font-normal leading-normal">view all</Link>
      </div>

    </Wrapper>
  )
}

export default OurBlogsMobile



