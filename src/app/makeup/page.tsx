"use client"
import AppliedFiltersDisplay from '@/components/Makeup/AppliedFiltersDisplay'
import FilterOptionsDesktop from '@/components/Makeup/FilterOptionsDesktop'
import SortFilters from '@/components/Makeup/MakeupFilterOptions/sortFilters'
import MakeupFilterOptionsMobile from '@/components/Makeup/MakeupFilterOptionsMobile'
import MakeupProducts from '@/components/Makeup/MakeupProducts'
import SkeletonMakeup from '@/components/Makeup/SkeletonMakeup'
import Wrapper from '@/components/Wrapper'
import { useFetchCategories } from '@/hooks/useFetchCategories'
import { filterOutProductsMakeup } from '@/utils/helpers/filterOutProductsMakeup'
import { CategoryType, MakeupProductType } from '@/utils/types'
import { Suspense, useEffect, useState } from 'react'
import { MdOutlineArrowForwardIos, MdTune } from 'react-icons/md'

const MakeupProductPage = () => {
  const BASEURL = process.env.NEXT_PUBLIC_BASEURI;
  
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
  
  // when user slects category in navigation bar, this function segreates category and auto selects and save in 
  // particular category for further filter
  // useEffect(() => {

  //   if(categoryTitle){
      
  //     if(cheek?.includes(categoryTitle)){
  //       setCheekFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }
      
  //     if(lips?.includes(categoryTitle)){
  //       setLipsFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }
      
  //     if(eyes?.includes(categoryTitle)){
  //       setEyesFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }

  //     if(featuredMakeup?.includes(categoryTitle)){
  //       setFeaturedFilters([categoryTitle.toLowerCase().split(' ').join('-')])
  //     }
  //   }
    
  // },[categoryTitle])

  // state used for applied filters to display and remove
  const originalCheekFilters = cheekFilters;
  const originalSkinFilters = lipsFilters;
  const originalMakeupPriceFilters = makeupPriceFilters;
  const originalEyesFilters = eyesFilters;
  const originalFeaturedFilters = featuredFilters;

  const appliedFilters = [...cheekFilters, ...lipsFilters, ...eyesFilters, ...featuredFilters];

  // Function to remove a filter from appliedFilters and its respective variable
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
  
   
  // Function to handle filter selection changes (add, remove)
  const handleMakeupFiltersChange = ( filterType: string, filtersValue: string ) => {

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
        const res = await fetch(`${BASEURL}/v1/makeup/all`,{
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
  }, [BASEURL])

  // Fetch categories for each type of makeup
  useFetchCategories(`${BASEURL}/v1/makeup/category/lips/all`, setLipsCategories);
  useFetchCategories(`${BASEURL}/v1/makeup/category/eyes/all`, setEyesCategories);
  useFetchCategories(`${BASEURL}/v1/makeup/category/cheek/all`, setCheekCategories)
  useFetchCategories(`${BASEURL}/v1/makeup/category/featured/all`, setFeaturedCategories)
  
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

      <section className='flex justify-between gap-[24px] w-full'>
        {/* Left side filter option */}
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
        { filteredProducts?.length === 0 && <SkeletonMakeup />}

        { filteredProducts?.length > 0 &&
          <MakeupProducts products = {filteredProducts} />
        }

        {/* <Suspense fallback={<SkeletonMakeup/>}>
          <MakeupProducts products={filteredProducts} />
        </Suspense> */}
        {/* Rigth side product cards ends*/}
      </section>
    </Wrapper>
  )
}

export default MakeupProductPage