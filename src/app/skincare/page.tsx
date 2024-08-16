'use client'
import AppliedFiltersDisplay from "@/components/Makeup/AppliedFiltersDisplay";
import SortFilters from "@/components/Makeup/MakeupFilterOptions/sortFilters";
import SkeletonFilterOptions from "@/components/Makeup/SkeletonMakeup/SkeletonFilterOptions";
import SkeletonMakeupPage from "@/components/Makeup/SkeletonMakeup/SkeletonMakeupPage";
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



const SkincareProductPage = ( { categoryTitle }: {categoryTitle?: string} ) => {

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


  
  // This mechanism allows for dynamic filtering of products based on the user's selection from navbar menu,
  // enabling a more personalized shopping experience.
  useEffect(() => {

    if(categoryTitle){
      
      const category = skincareCategories.map((item) => item.slug)
      const skin_condition = skinConditionCategories.map((item) => item.slug)
      const featured = featuredCategories.map((item) => item.slug)
      
      if(category?.includes(categoryTitle)){
        const categoryId = skincareCategories.find((item) => item?.slug === categoryTitle)
        setCategoryFilters([categoryId?._id.toLowerCase().split(' ').join('-')!])
      }

      if(skin_condition?.includes(categoryTitle)){
        const skinConditionId = skinConditionCategories.find((item) => item?.slug === categoryTitle)
        setSkinConditionFilters([skinConditionId?._id.toLowerCase().split(' ').join('-')!])
      }


      if(featured?.includes(categoryTitle)){
        const featuredId = featuredCategories.find((item) => item?.slug === categoryTitle)
        setFeaturedFilters([featuredId?._id.toLowerCase().split(' ').join('-')!])
      }
    }
    

  },[categoryTitle, skincareCategories, skinConditionCategories, skinConditionCategories])


  // state used for applied filters to display and remove
  const originalCategoryFilters = skincarePriceFilters;
  const originalSkinFilters = skinConditionFilters;
  const originalPriceFilters = skincarePriceFilters;
  const originalFeaturedFilters = featuredFilters;

  const appliedFilters = [...skincareCategoryFilters, ...skinConditionFilters, ...featuredFilters];

  // Clears filters from the applied filters state and their original states.
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
  
  // Handles changes to makeup filter selections, allowing users to add or remove filters based on their preferences from the available filter options.
  const handleSkincareFiltersChange = ( filterType: string, filtersValue: string ) => {

        /**
     * Processes changes to the 'skincare' filter based on the provided filter value.
     * 
     * - If the filter value already exists in the current list of 'skincare' filters, it is removed to avoid duplication.
     * - If the filter value does not exist in the list, it is added to allow for a broader search or to update the filter criteria.
     * 
     * This conditional handling ensures that the 'skincare' filter list remains relevant and accurate to the user's current preferences,
     * optimizing the product display based on the selected filter values.
     */
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
      if(featuredFilters?.includes(filtersValue)){
        setFeaturedFilters(featuredFilters.filter((value) => value !== filtersValue))
      }else{
        setFeaturedFilters([...featuredFilters, filtersValue])
      }
    }
    
    if(filterType === 'price'){
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
  }, [])

  // Fetch categories for each type of makeup
  useFetchCategories(`${config.baseUri}/v1/skincare/category/skincare/all`, setSkincareCategories);
  useFetchCategories(`${config.baseUri}/v1/skincare/category/skincondition/all`, setSkinConditionCategories);
  useFetchCategories(`${config.baseUri}/v1/skincare/category/featured/all`, setFeaturedCategories)

  // function to display products based on filter Selection
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

      {/* Left side filter option */}
      <section className='flex justify-between gap-[24px] w-full'>
        { skincareCategories.length === 0 && 
          skinConditionCategories.length === 0 && 
          featuredCategories.length === 0 && <SkeletonFilterOptions page={"skincare"}/>
        }
        
        { skincareCategories.length > 0 && 
          skinConditionCategories.length > 0 && 
          featuredCategories.length > 0 && (
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
          )
        }

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
        { filteredProducts?.length === 0 && <SkeletonMakeupPage />}

        { filteredProducts?.length > 0 &&  <SkincareProduct products = {filteredProducts} />}
      </section>
    </Wrapper>
  )
}

export default SkincareProductPage