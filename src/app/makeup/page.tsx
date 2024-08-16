"use client"
import AppliedFiltersDisplay from '@/components/Makeup/AppliedFiltersDisplay'
import FilterOptionsDesktop from '@/components/Makeup/FilterOptionsDesktop'
import SortFilters from '@/components/Makeup/MakeupFilterOptions/sortFilters'
import MakeupFilterOptionsMobile from '@/components/Makeup/MakeupFilterOptionsMobile'
import MakeupProducts from '@/components/Makeup/MakeupProducts'
import SkeletonFilterOptions from '@/components/Makeup/SkeletonMakeup/SkeletonFilterOptions'
import SkeletonMakeupPage from '@/components/Makeup/SkeletonMakeup/SkeletonMakeupPage'
import Wrapper from '@/components/Wrapper'
import config from '@/config/config'
import { useFetchCategories } from '@/hooks/useFetchCategories'
import { filterOutProductsMakeup } from '@/utils/helpers/filterOutProductsMakeup'
import { CategoryType, MakeupProductType } from '@/utils/types'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdOutlineArrowForwardIos, MdTune } from 'react-icons/md'


const MakeupProductPage = ( { categoryTitle }: {categoryTitle?: string} ) => {
  
  const [products, setProducts] = useState<MakeupProductType[]>([])

  const [isMobileDropDown, setIsMobileDropDown] = useState(false)
  const [isOutOfStock, setIsOutOfStock] = useState(true)
  const [displaySortFilterValue, setDisplaySortFilterValue] = useState<string>('recommended')
  
  // State variables for storing categories to display 
  const [cheekCategories, setCheekCategories] = useState<CategoryType[]>([])
  const [lipCategories, setLipsCategories] = useState<CategoryType[]>([])
  const [eyeCategories, setEyesCategories] = useState<CategoryType[]>([])
  const [featuredCategories, setFeaturedCategories] = useState<CategoryType[]>([])
  
  // State variables for storing selected filters for each category
  const [cheekFilters, setCheekFilters] = useState<string[]>([])
  const [lipsFilters, setLipsFilters] = useState<string[]>([])
  const [eyesFilters, setEyesFilters] = useState<string[]>([])
  const [featuredFilters, setFeaturedFilters] = useState<string[]>([])
  const [makeupPriceFilters, setMakeupPriceFilters] = useState<string[]>([])
  
  // This mechanism allows for dynamic filtering of products based on the user's selection from navbar menu,
  // enabling a more personalized shopping experience.
  useEffect(() => {

    if(categoryTitle){

      const cheek = cheekCategories.map((item) => item.slug)
      const lips = lipCategories.map((item) => item.slug)
      const eyes = eyeCategories.map((item) => item.slug)
      const featuredMakeup = featuredCategories.map((item) => item.slug)
      
      if(cheek?.includes(categoryTitle)){
        const cheekId = cheekCategories.find((item) => item?.slug === categoryTitle)       
        setCheekFilters([cheekId?._id.toLowerCase().split(' ').join('-')!])
      }
      
      if(lips?.includes(categoryTitle)){
        const lipsId = lipCategories.find((item) => item?.slug === categoryTitle)
        setLipsFilters([lipsId?._id.toLowerCase().split(' ').join('-')!])
      }

      if(eyes?.includes(categoryTitle)){
        const eyesId = eyeCategories.find((item) => item?.slug === categoryTitle)
        setEyesFilters([eyesId?._id.toLowerCase().split(' ').join('-')!])
      }

      if(featuredMakeup?.includes(categoryTitle)){
        const featuredId = featuredCategories.find((item) => item?.slug === categoryTitle)
        setFeaturedFilters([featuredId?._id.toLowerCase().split(' ').join('-')!])
      }
    }
    
  },[categoryTitle, cheekCategories, lipCategories, eyeCategories, featuredCategories])

  // state used for applied filters to display and remove
  const originalCheekFilters = cheekFilters;
  const originalSkinFilters = lipsFilters;
  const originalMakeupPriceFilters = makeupPriceFilters;
  const originalEyesFilters = eyesFilters;
  const originalFeaturedFilters = featuredFilters;

  const appliedFilters = [...cheekFilters, ...lipsFilters, ...eyesFilters, ...featuredFilters];

  // Clears filters from the applied filters state and their original states.
  const clearFilters = (removeFilter: string) => {

    if (removeFilter === 'all') {
      setCheekFilters([]);   
      setLipsFilters([]);       
      setMakeupPriceFilters([]);      
      setEyesFilters([]);
      setFeaturedFilters([]);   
    }

    if (originalCheekFilters?.includes(removeFilter)) {
      setCheekFilters(cheekFilters.filter(filter => filter !== removeFilter));
    }
    if (originalSkinFilters?.includes(removeFilter)) {
      setLipsFilters(lipsFilters.filter(filter => filter !== removeFilter));
    }
    if (originalMakeupPriceFilters?.includes(removeFilter)) {
      setMakeupPriceFilters(makeupPriceFilters.filter(filter => filter !== removeFilter));
    }
    if (originalEyesFilters?.includes(removeFilter)) {
      setEyesFilters(eyesFilters.filter(filter => filter !== removeFilter));
    }
    
    if (originalFeaturedFilters?.includes(removeFilter)) {
      setFeaturedFilters(featuredFilters.filter(filter => filter !== removeFilter));
    }
  };
  
   
  // Handles changes to makeup filter selections, allowing users to add or remove filters based on their preferences from the available filter options.
  const handleMakeupFiltersChange = ( filterType: string, filtersValue: string ) => {

    /**
     * Processes changes to the 'cheek' filter based on the provided filter value.
     * 
     * - If the filter value already exists in the current list of 'cheek' filters, it is removed to avoid duplication.
     * - If the filter value does not exist in the list, it is added to allow for a broader search or to update the filter criteria.
     * 
     * This conditional handling ensures that the 'cheek' filter list remains relevant and accurate to the user's current preferences,
     * optimizing the product display based on the selected filter values.
     */
    if(filterType === 'cheek'){
      // If it does exist, remove it from the list to prevent duplicates
      if(cheekFilters?.includes(filtersValue)){
        setCheekFilters(cheekFilters.filter((value) => value !== filtersValue))
      }else{
        // If it doesn't exist, add the new filter value to the list
        setCheekFilters([...cheekFilters, filtersValue])
      }
    }

    if(filterType === 'lips'){
      if(lipsFilters?.includes(filtersValue)){
        setLipsFilters(lipsFilters.filter((value) => value !== filtersValue))
      }else{
        setLipsFilters([...lipsFilters, filtersValue])
      }
    }
    
    if(filterType === 'eyes'){
      if(eyesFilters?.includes(filtersValue)){
        setEyesFilters(eyesFilters.filter((value) => value !== filtersValue))
      }else{
        setEyesFilters([...eyesFilters, filtersValue])
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
      if(makeupPriceFilters?.includes(filtersValue)){
        setMakeupPriceFilters(makeupPriceFilters.filter((value) => value !== filtersValue))
      }else{
        setMakeupPriceFilters([...makeupPriceFilters, filtersValue])
      }
    }

  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${config.baseUri}/v1/makeup/all`,{
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
  useFetchCategories(`${config.baseUri}/v1/makeup/category/lips/all`, setLipsCategories);
  useFetchCategories(`${config.baseUri}/v1/makeup/category/eyes/all`, setEyesCategories);
  useFetchCategories(`${config.baseUri}/v1/makeup/category/cheek/all`, setCheekCategories)
  useFetchCategories(`${config.baseUri}/v1/makeup/category/featured/all`, setFeaturedCategories)
  
  // function to display products based on filter Selection
  const filteredProducts: MakeupProductType[] = filterOutProductsMakeup(
    appliedFilters, 
    products, 
    isOutOfStock, 
    displaySortFilterValue, 
    cheekFilters,
    lipsFilters,
    eyesFilters,
    featuredFilters,
    makeupPriceFilters,
  )
console.log('cheekCategories', cheekCategories);

  return (
    <Wrapper className='px-[20px] w-full'>
      <section className='flex flex-col gap-2 justify-start mt-[32px] w-full'>
        <div className='flex justify-start items-center h-[45px] py-2'>
          <div className="text-zinc-600 text-sm laptop-s:text-base font-normal capitalize leading-7">Home</div>
          <MdOutlineArrowForwardIos className="w-4 h-4 text-zinc-600"/>
          <div className="text-neutral-950 text-sm laptop-s:text-base font-semibold laptop:font-bold capitalize leading-snug">makeup</div>
        </div>
        <div className='flex items-center gap-2 h-[45px]'>
          <span className="text-neutral-950 text-xl laptop-s:text-[32px] font-bold capitalize leading-[44.80px]">makeup</span>
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

        { cheekCategories.length === 0 && 
          lipCategories.length === 0 && 
          eyeCategories.length === 0 && 
          featuredCategories.length === 0 && <SkeletonFilterOptions page={"makeup"}/>
        }

        { cheekCategories.length > 0 && 
          lipCategories.length > 0 && 
          eyeCategories.length > 0 && 
          featuredCategories.length > 0 && (
          <FilterOptionsDesktop
            cheekCategories={cheekCategories}
            lipCategories={lipCategories}
            eyeCategories={eyeCategories}
            featuredCategories={featuredCategories}
            appliedFilters={appliedFilters}
            cheekFilters={cheekFilters}
            lipsFilters={lipsFilters}
            eyesFilters={eyesFilters}
            featuredFilters={featuredFilters}
            makeupPriceFilters={makeupPriceFilters}
            isOutOfStock={isOutOfStock}
            setIsOutOfStock={setIsOutOfStock}
            clearFilters={clearFilters}
            handleMakeupFiltersChange={handleMakeupFiltersChange}
          />
        )}
        
        <div className={`${isMobileDropDown ? 'visible-container':'hidden-container'} absolute top-0 left-0 z-10 flex laptop-s:hidden w-full`}>
          <MakeupFilterOptionsMobile
            cheekCategories={cheekCategories}
            lipCategories={lipCategories}
            eyeCategories={eyeCategories}
            featuredCategories={featuredCategories}
            appliedFilters={appliedFilters}
            cheekFilters={cheekFilters}
            lipsFilters={lipsFilters}
            eyesFilters={eyesFilters}
            featuredFilters={featuredFilters}
            makeupPriceFilters={makeupPriceFilters}
            isOutOfStock={isOutOfStock}
            setIsOutOfStock={setIsOutOfStock}
            clearFilters={clearFilters}
            handleMakeupFiltersChange={handleMakeupFiltersChange}
            setIsMobileDropDown={setIsMobileDropDown}
          />
        </div>

        {/* Rigth side product cards starts*/}
        { filteredProducts?.length === 0 && <SkeletonMakeupPage />}

        { filteredProducts?.length > 0 && <MakeupProducts products = {filteredProducts} />}

        {/* Rigth side product cards ends*/}
      </section>
    </Wrapper>
  )
}

export default MakeupProductPage