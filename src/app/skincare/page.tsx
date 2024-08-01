'use client'
import AppliedFiltersDisplay from "@/components/Makeup/AppliedFiltersDisplay";
import SortFilters from "@/components/Makeup/MakeupFilterOptions/sortFilters";
import SkeletonMakeup from "@/components/Makeup/SkeletonMakeup";
import SkincareFilterOptionsDesktop from "@/components/Skincare/SkincareFilterOptionsDesktop";
import SkincareFilterOptionsMobile from "@/components/Skincare/SkincareFilterOptionsMobile";
import SkincareProduct from "@/components/Skincare/SkincareProduct";
import Wrapper from "@/components/Wrapper";
import config from "@/config/config";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { filterOutProductsSkincare } from "@/utils/helpers/filterOutProductsSkincare";
import { CategoryType, SkinCareProductType } from "@/utils/types";
import { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos, MdTune } from "react-icons/md";



const WomenSkinCare = () => {
  const [products, setProducts] = useState<SkinCareProductType[]>([])

  const [isMobileDropDown, setIsMobileDropDown] = useState(false)
  const [isOutOfStock, setIsOutOfStock] = useState(true)
  const [displaySortFilterValue, setDisplaySortFilterValue] = useState<string>('recommended')
  
  // State variables for storing categories to display 
  const [skincareCategories, setSkincareCategories] = useState<CategoryType[]>([])
  const [skinConditionCategories, setSkinConditionCategories] = useState<CategoryType[]>([])
  const [featuredCategories, setFeaturedCategories] = useState<CategoryType[]>([])
  
  // State variables for storing selected filters for each category
  const [skincareCategoryFilters, setCategoryFilters] = useState<string[]>([])
  const [skinConditionFilters, setSkinConditionFilters] = useState<string[]>([])
  const [skincarePriceFilters, setSkincarePriceFilters] = useState<string[]>([])
  const [featuredFilters, setFeaturedFilters] = useState<string[]>([])


  
  // // when user selects category in navigation bar, this function segreates category and auto selects and save in particular category for further filter
  // useEffect(() => {

  //   if(categoryTitle){
      
  //     if(skin_condition?.includes(categoryTitle)){
  //       setSkinConditionFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }
    
  //     if(category?.includes(categoryTitle)){
  //       setCategoryFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }
      
  //     if(featured?.includes(categoryTitle)){
  //       setFeaturedFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }
  //   }
    

  // },[categoryTitle])


  // state used for applied filters to display and remove
  const originalCategoryFilters = skincarePriceFilters;
  const originalSkinFilters = skinConditionFilters;
  const originalPriceFilters = skincarePriceFilters;
  const originalFeaturedFilters = featuredFilters;

  const appliedFilters = [...skincareCategoryFilters, ...skinConditionFilters, ...featuredFilters];

  // Function to remove a filter from appliedFilters and its respective variable
  const clearFilters = (removeFilter: string) => {

    if (removeFilter === 'all') {
      setCategoryFilters([]);   
      setSkinConditionFilters([]);       
      setSkincarePriceFilters([]);      
      setFeaturedFilters([]);   
    }

    if (originalCategoryFilters?.includes(removeFilter)) {
      setCategoryFilters(skincareCategoryFilters.filter(filter => filter !== removeFilter));
    }
    if (originalSkinFilters?.includes(removeFilter)) {
      setSkinConditionFilters(skinConditionFilters.filter(filter => filter !== removeFilter));
    }
    if (originalPriceFilters?.includes(removeFilter)) {
      setSkincarePriceFilters(skincarePriceFilters.filter(filter => filter !== removeFilter));
    }
    if (originalFeaturedFilters?.includes(removeFilter)) {
      setFeaturedFilters(featuredFilters.filter(filter => filter !== removeFilter));
    }
  };
  // write code for me for color filter 
  
    // Function to handle filter selection changes (add, remove)
  const handleSkincareFiltersChange = ( filterType: string, filtersValue: string ) => {

    if(filterType === 'skincare'){
      // If it does exist, remove it from the list to prevent duplicates
      if(skincareCategoryFilters?.includes(filtersValue)){
        setCategoryFilters(skincareCategoryFilters.filter((value) => value !== filtersValue))
      }else{
        setCategoryFilters([...skincareCategoryFilters, filtersValue])
      }
    }

    if(filterType === 'skinCondition'){
      // if filter value already exists then don't add the same value again
      if(skinConditionFilters?.includes(filtersValue)){
        setSkinConditionFilters(skinConditionFilters.filter((value) => value !== filtersValue))
      }else{
        // If it doesn't exist, add the new filter value to the list
        setSkinConditionFilters([...skinConditionFilters, filtersValue])
      }
    }
    
    if(filterType === 'featured'){
      // if filter value already exists then don't add the same value again
      if(featuredFilters?.includes(filtersValue)){
        setFeaturedFilters(featuredFilters.filter((value) => value !== filtersValue))
      }else{
        setFeaturedFilters([...featuredFilters, filtersValue])
      }
    }
    
    if(filterType === 'price'){
      // if filter value already exists then don't add the same value again
      if(skincarePriceFilters?.includes(filtersValue)){
        setSkincarePriceFilters(skincarePriceFilters.filter((value) => value !== filtersValue))
      }else{
        setSkincarePriceFilters([...skincarePriceFilters, filtersValue])
      }
    }

  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${config.baseUri}/v1/skincare/all`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        
        const data = await res.json();

        setProducts(data.makeupProduct);
      } catch (error) {
        console.error('Makeup Products page error:', error);
      }
    }
    fetchProducts()
  }, [config.baseUri])

  // Fetch categories for each type of makeup
  useFetchCategories(`${config.baseUri}/v1/skincare/category/skincare/all`, setSkincareCategories);
  useFetchCategories(`${config.baseUri}/v1/skincare/category/skincondition/all`, setSkinConditionCategories);
  useFetchCategories(`${config.baseUri}/v1/skincare/category/featured/all`, setFeaturedCategories)

  // function to display products based on filter Selection
  // const filteredProducts: skinCareProductType[] = products
  const filteredProducts: SkinCareProductType[] = filterOutProductsSkincare(
    appliedFilters, 
    products, 
    isOutOfStock, 
    displaySortFilterValue,
    skincareCategoryFilters,
    skinConditionFilters,
    featuredFilters,
    skincarePriceFilters,
  )

  // // function to display products based on filter Selection
  // const filteredProducts: ProductsType2[] = filterOutProductsSkincare(
  //   appliedFilters, 
  //   products, 
  //   isOutOfStock, 
  //   displaySortFilterValue, 
  //   categoryFilters,
  //   skinConditionFilters,
  //   featuredFilters,
  //   priceFilters,
  //   categoryWords
  // )

  return (
    <Wrapper className='px-[20px] w-full'>
      <section className='flex flex-col gap-2 justify-start mt-[32px] w-full'>
        <div className='flex justify-start items-center h-[45px] py-2'>
          <div className="text-zinc-600 text-sm laptop-s:text-base font-normal capitalize leading-7">Home</div>
          <MdOutlineArrowForwardIos className="w-4 h-4 text-zinc-600"/>
          <div className="text-neutral-950 text-sm laptop-s:text-base font-semibold laptop:font-bold capitalize leading-snug">skincare</div>
        </div>
        <div className='flex items-center gap-2 h-[45px]'>
          <span className="text-neutral-950 text-xl laptop-s:text-[32px] font-bold capitalize leading-[44.80px]">skincare</span>
          <span className="text-zinc-600 text-sm laptop-s:text-xl font-semibold laptop-s:font-bold leading-tight tablet:leading-7">({filteredProducts?.length})</span>
        </div>

          {/* visible on mobile screen only, applied filter  */}
          <div className='w-full laptop-s:hidden'>
          <AppliedFiltersDisplay
            appliedFilters={appliedFilters}
            clearFilters={clearFilters}
          />
        </div>
      </section>
      
      {/* Filter and sort heading */}
      <section className='flex justify-between gap-2 items-center w-full mt-[24px] pb-2'>
        <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] hidden laptop-s:inline-block">filter</h2>
      
        {/* Filter mobile starts*/}
        <div 
          onClick={() => setIsMobileDropDown((prev) => !prev)}
          className="laptop-s:hidden h-10 px-4 py-2 bg-white border border-neutral-200 justify-center items-center gap-2 flex flex-1 max-w-[200px]">
          <div className="w-4 h-4 relative ">
            <MdTune/>
          </div>
          <div className="text-neutral-950 text-xs tablet-m:text-base font-semibold tracking-tight">Filter </div>
        </div>
        {/* Filter mobile ends*/}

        {/* Sort and recommendation starts*/}
        <div className="h-full bg-white border border-neutral-200 justify-start items-start flex max-laptop-s:flex-1 max-w-[224px] laptop-s:max-w-[300px]">
          <SortFilters
            displaySortFilterValue={displaySortFilterValue} 
            setDisplaySortFilterValue={setDisplaySortFilterValue}
            />
        </div>
        {/* Sort and recommendation ends*/}
      </section>

      <section className='flex justify-between gap-[24px] w-full'>
        {/* Left side filter option */}
        <SkincareFilterOptionsDesktop
          skincareCategories={skincareCategories}
          skinConditionCategories={skinConditionCategories}
          featuredCategories={featuredCategories}
          appliedFilters={appliedFilters}
          skincareCategoryFilters={skincareCategoryFilters}
          skinConditionFilters={skinConditionFilters}
          featuredFilters={featuredFilters}
          skincarePriceFilters={skincarePriceFilters}
          isOutOfStock={isOutOfStock}
          setIsOutOfStock={setIsOutOfStock}
          clearFilters={clearFilters}
          handleSkincareFiltersChange={handleSkincareFiltersChange}
        />

        <div className={`${isMobileDropDown ? 'visible-container':'hidden-container'} absolute top-0 left-0 z-10 flex laptop-s:hidden w-full`}>
          <SkincareFilterOptionsMobile
            skincareCategories={skincareCategories}
            skinConditionCategories={skinConditionCategories}
            featuredCategories={featuredCategories}
            appliedFilters={appliedFilters}
            skincareCategoryFilters={skincareCategoryFilters}
            skinConditionFilters={skinConditionFilters}
            featuredFilters={featuredFilters}
            skincarePriceFilters={skincarePriceFilters}
            isOutOfStock={isOutOfStock}
            setIsOutOfStock={setIsOutOfStock}
            clearFilters={clearFilters}
            handleSkincareFiltersChange={handleSkincareFiltersChange}
            setIsMobileDropDown={setIsMobileDropDown}
          />
        </div>

        {/* Rigth side product cards starts*/}
        { filteredProducts?.length === 0 && <SkeletonMakeup />}

        { filteredProducts?.length > 0 &&
          <SkincareProduct products = {filteredProducts} />
        }

        {/* <Suspense fallback={<SkeletonMakeup/>}>
          <MakeupProducts products={filteredProducts} />
        </Suspense> */}
        {/* Rigth side product cards ends*/}
      </section>
    </Wrapper>
  )
}

export default WomenSkinCare