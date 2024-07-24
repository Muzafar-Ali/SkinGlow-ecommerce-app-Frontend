import React from "react";
import Wrapper from "../../Wrapper";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/utils/data";

const OurBlogsDesktop = () => {
  return (
    <Wrapper className="mt-20 px-20">
      <div className="hidden tablet-m:flex flex-col relative">
        <h2 className="text-center text-neutral-950 text-2xl font-bold capitalize leading-[33.60px]">
          Our Blogs
        </h2>
        <Link
          href={`/blogs`}
          className="flex justify-center items-center gap-2 h-12 px-4 py-2 absolute top-8 right-0"
        >
          <span className="text-pink-800 hover:text-red-950 transition-all duration-300 ease-in-out text-base font-semibold capitalize leading-7">
            view all blogs
          </span>
        </Link>
        {/* blogs section for Tablet view starts */}
        <div className="grid grid-cols-2 gap-x-6 mt-[32px] laptop-s:hidden">
          {blogs?.slice(0, 2).map((blog) => (
            <Link
              href={`/blogs/${"How to get clear skin fast"}`}
              className="py-6"
              key={blog?.id}
              >
              <div className="flex flex-col gap-y-4">
                <Image
                  src={blog?.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className=""
                  />
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-neutral-950 text-lg laptop-s:text-xl font-bold leading-7">{blog?.title}</h2>
                    <div className="flex justify-start items-center gap-2 h-4">
                      <div className="text-zinc-600 text-xs font-semibold tracking-wide">{blog?.category}</div>
                      <div className="text-zinc-600 origin-top">|</div>
                      <div className="text-zinc-600 text-xs font-semibold tracking-wide">{blog?.author}</div>
                      <div className="text-zinc-600 origin-top">|</div>
                      <div className="text-zinc-600 text-xs font-semibold tracking-wide">{blog?.posted}</div>
                    </div>
                  </div>
                  <p className="text-neutral-950 text-sm laptop-s:text-base font-normal capitalize leading-7 text-ellipsis overflow-hidden whitespace-nowrap">{blog?.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* blogs section for Tablet view ends */}

        {/* blogs section for Laptop view starts */}
        <div className="hidden laptop-s:grid grid-cols-3 gap-x-6 mt-[32px]">
          {blogs?.slice(0, 3).map((blog) => (
            <Link
            href={`/blogs/${"How to get clear skin fast"}`}
            className="py-6"
            key={blog?.id}
            >
              <div className="flex flex-col gap-y-4">
                <Image
                  src={blog?.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className=""
                  />
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-neutral-950 text-lg laptop-s:text-xl font-bold leading-7 line-clamp-1">{blog?.title}</h2>
                    <div className="flex justify-start items-center gap-2 h-4">
                      <div className="text-zinc-600 text-xs font-semibold tracking-wide">{blog?.category}</div>
                      <div className="text-zinc-600 origin-top">|</div>
                      <div className="text-zinc-600 text-xs font-semibold tracking-wide">{blog?.author}</div>
                      <div className="text-zinc-600 origin-top">|</div>
                      <div className="text-zinc-600 text-xs font-semibold tracking-wide">{blog?.posted}</div>
                    </div>
                  </div>
                  <p className="text-neutral-950 text-sm laptop-s:text-base font-normal capitalize leading-7 text-ellipsis overflow-hidden whitespace-nowrap">{blog?.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* blogs section for Laptop view ends */}

       
      </div>
    </Wrapper>
  );
};

export default OurBlogsDesktop;
