"use client"
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md';
import { CombinedSingleProductType, SearchProductType } from '@/utils/types';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import SearchCard from './SearchCard';
import algoliasearch from 'algoliasearch';
import config from '@/config/config';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


type SearchProps = {
  isSearchOpen: boolean;
//   isSuggestionOpen: boolean;
//   setIsSuggestionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!);
const index = searchClient.initIndex('skinglowSearch');

const Search = ({ 
  isSearchOpen,
  setIsSearchOpen, 
  // isSuggestionOpen, 
  // setIsSuggestionOpen, 
}: SearchProps) => {
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchProductType>([]);
  const [latest, setLatest] = useState<Set<CombinedSingleProductType>>(new Set());  
  
  useEffect(() => {
    const get = async () => {
      try {
        const res = await fetch(`${config.baseUri}/v1/makeup/all`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        
        const data = await res.json();
        setLatest(data.makeupProduct);
      } catch (error) {
        console.error('Makeup Products page error:', error);
      }
    }
    get();
  },[])
  

  // Close the search component when clicking outside of it
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (isSearchOpen && !target.closest('.search-container')) {
      setIsSearchOpen(false);
    }
  };

  // Delay search for 300 milli seconds
  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (searchQuery.trim() === '') {
        setResults([]);
        return;
      }
      const { hits } = await index.search(searchQuery);
          
      setResults(hits as SearchProductType);
    }, 300), // Adjust debounce delay as needed
  []);

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  // Effect to trigger search when query changes
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);


  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debouncedSearch(query);
  };

  useEffect(() => {
    // Add click event listener to the document body
    document.body.addEventListener('click', handleClickOutside);

    // Cleanup the event listener & debounce function on component unmount
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
      debouncedSearch.cancel(); // Ensure you cancel the debounce function
    };
  }, [isSearchOpen, debouncedSearch]);
 
  const responsive = {
    laptopLarge: {
        breakpoint: { max: 3000, min: 1440 },
        items: 5,
        partialVisibilityGutter: 40,
    },
    laptopMedium2: {
        breakpoint: { max: 1439, min: 1307 },
        items: 5,
        // partialVisibilityGutter: 40,
    },

    laptopMedium1: {
        breakpoint: { max: 1306, min: 1200 },
        items: 5,
        partialVisibilityGutter: 20,
    },
    laptopSmall: {
        breakpoint: { max: 1199, min: 1024 },
        items: 4,
        // partialVisibilityGutter: 40,
    },
    tabletMedium2: {
        breakpoint: { max: 1023, min: 840 },
        items: 5,
    },
    tabletMedium1: {
        breakpoint: { max: 839, min: 768 },
        items: 4,
    },
    tabletSmall2: {
        breakpoint: { max: 767, min: 701 },
        items: 6,
    },
    tabletSmall1: {
        breakpoint: { max: 700, min: 600 },
        items: 5,
    },
    mobileLarge: {
        breakpoint: { max: 599, min: 450 },
        items: 4,
    },

    mobilemedium: {
        breakpoint: { max: 449, min: 375 },
        items: 3,
    },
    mobileSmall2: {
        breakpoint: { max: 374, min: 350 },
        items: 3,
    },
    mobileSmall1: {
        breakpoint: { max: 351, min: 0 },
        items: 2,
    },
  };

  return (
    <main className={`${isSearchOpen ? "block opacity-100 z-20 search-container" : "block opacity-0 -z-20 "} absolute top-[60px] laptop-s:top-[100px] left-0  w-full px-[20px] laptop-s:px-[54px] laptop-l:px-[108px] pt-[16px] pb-[20px] transition-opacity duration-500 ease-in-out bg-white`}>
      {/* search section   */}
      <form onSubmit={handleSubmit} className=' w-full flex gap-x-2 px-4 items-center justify-between border-b border-zinc-500 '>
          <button type='submit' className='flex justify-center items-center text-zinc-500 cursor-pointer'>
            <MdOutlineSearch className="w-6 h-6 text-zinc-500"/>
          </button>
          <div className='w-full'>
            <input 
              type="text"
              value={query}
              placeholder="What are you looking for?" 
              className="w-full h-full p-2 rounded-md outline-none font-normal text-zinc-500 text-sm laptop-s:text-xl"
              onChange={handleInputChange}
            />
          </div>
      </form>

      {/* Rigth side Trending and Recent searches */}
      <section className='flex flex-col laptop-s:flex-row mt-[16px] laptop-s:mt-[24px]'>
        {/* Trending and recent seraches */}
        <div className={`flex flex-col laptop-s:gap-[16px] laptop-s:w-[30%]`}>
          {/* Trending */}
          <div className={`${!query ? "block":"hidden"} flex flex-col gap-2 laptop-s:gap-[16px]`}>
            <h2 className="text-neutral-950 text-base laptop-s:text-xl font-bold leading-snug laptop-s:leading-7">Trending Now</h2>
            <div className='flex flex-col gap-y-1'>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize leading-snug cursor-pointer" onClick={() => setQuery("advanced night repair")}>advanced night repair</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize leading-snug cursor-pointer" onClick={() => setQuery("eyebrows")}>eyebrows</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize leading-snug cursor-pointer" onClick={() => setQuery("sensitive skin")}>sensitive skin</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize leading-snug cursor-pointer" onClick={() => setQuery("lip balms and care")}>lip balms and care</p>
            </div>

            {/* Recent searches */}
            <h2 className="text-neutral-950 text-base laptop-s:text-xl font-bold leading-snug laptop-s:leading-7">Your Recent Searches</h2>
            <div className='flex flex-col gap-y-1'>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize leading-snug">facial serum</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize leading-snug">eye serum</p>
            </div>
          </div>

          {/* Suggestions */}
          <div className={`${query ? "block":"hidden"} flex flex-col gap-[16px]`}>
            <h2 className="text-neutral-950 text-base laptop-s:text-xl font-bold leading-snug laptop-s:leading-7">Suggestions</h2>
            <div className='flex flex-col gap-y-1'>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize cursor-pointer leading-snug" onClick={() => setQuery("anti aging")}
              >anti aging</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize cursor-pointer leading-snug" onClick={() => setQuery("blush")}
              >blush</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize cursor-pointer leading-snug" onClick={() => setQuery("travel size")}
              >travel size</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize cursor-pointer leading-snug" onClick={() => setQuery("premier and setting spray")}
              >premier and setting spray</p>
              <p className="text-neutral-700 text-sm laptop-s:text-base font-semibold laptop-s:font-bold capitalize cursor-pointer leading-snug" onClick={() => setQuery("serum")}
              >serum</p>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col gap-y-[16px] laptop-s:w-[70%] mt-[16px] laptop-s:mt-0'>
          <div className='flex justify-between items-center'>
            {results.length === 0 && query === '' &&
              <h2 className="text-neutral-950 text-base laptop-s:text-xl font-bold leading-snug laptop-s:leading-7">Popular products</h2>
            }
            <p className="text-pink-800 text-sm laptop-s:text-base font-bold capitalize leading-snug laptop-s:leading-7">
              {results.length > 0 && (
                <>
                  Showing <span className="font-bold underline">{results.length}</span> {results.length >= 2 ? "products": "product"} for <span className="italic">{query}</span>"
                </>
              )} 

              {results.length === 0 && query !='' &&  (
                <><span className={`${results.length === 0 ? 'text-neutral-950':'text-pink-800'}`}>No products found for </span><span className="italic">{query}</span>"</>
              )}
            </p>
          </div>
          
          <div className=''>
            { results.length === 0 && query === '' && (
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                itemClass='px-[5px] laptop-m:px-[10px]'
                containerClass='py-2'
                // centerMode={true} // centerMode={true} when you want to center items
              >
                { results.length === 0 && 
                Array.from(latest).map((product) => (
                  <Link href={`/product-${product.categories.makeup ? "makeup":"skincare"}/${product?.slug}`} key={product?._id} onClick={() => setIsSearchOpen(false)}>
                    <SearchCard 
                    title={product.title}
                    thumbnail={product.thumbnail}
                    description={product.productDetails?.description}
                    price={product.price}
                  />
                  </Link>
                )) }

              </Carousel>
            )}

            { results.length > 0 && (

            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={false}
              itemClass='px-[5px] laptop-m:px-[10px]'
              containerClass='py-2'
              // centerMode={true} // centerMode={true} when you want to center items
            >
              {  results.length >= 1 && 
                Array.from(results).map((product) => (
                <Link href={`/product-${product?.categories?.makeup ? "makeup":"skincare"}/${product?.slug}`} key={product?.objectID} onClick={() => setIsSearchOpen(false)}>
                  <SearchCard 
                  title={product.title}
                  thumbnail={product.thumbnail}
                  description={product.productDetails?.description}
                  price={product.price}
                />
                </Link>
              ))}

            </Carousel>
            )}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Search;
