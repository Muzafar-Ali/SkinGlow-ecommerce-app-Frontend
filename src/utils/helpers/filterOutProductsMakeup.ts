import { MakeupProductType } from "../types";


export const filterOutProductsMakeup = (
    appliedFilters: string[], 
    products: MakeupProductType[], 
    isOutOfStock?: boolean, 
    displaySortFilterValue?:string, 
    cheekFilters?: string[],
    lipsFilters?: string[],
    eyesFilters?: string[],
    featuredFilters?: string[],
    makeupPriceFilters?: string[],
    ): MakeupProductType[] =>  {

    
    let product: MakeupProductType[] = [];
    
    if( cheekFilters && cheekFilters.length > 0 ){
      const filterOutCheekProducts = () => {
        let filteredProducts = products.filter((product) => {
          const cheekCategory = product?.categories.makeup.cheekMakeupCategory;
          let cheekCategories = [cheekCategory]
          
          if (cheekFilters && cheekFilters.length > 0 && !cheekCategories?.some((category) => {
            const cheekCategoryTitle = category
            return cheekFilters.includes(cheekCategoryTitle);
          })){
            return false;
          }
        
          return true;
        });
        
        return filteredProducts;
      };

      const product1 = filterOutCheekProducts()
      product.push(...product1);
    }

    if( lipsFilters && lipsFilters.length > 0 ){
      const filterOutLipsProducts = () => {
        let filteredProducts = products.filter((product) => {
          const lipsCategory = product?.categories.makeup.lipsMakeupCategory;
          let lipsCategories = [lipsCategory]
    
          if (lipsFilters && lipsFilters.length > 0 && !lipsCategories?.some((category) => {
            const cheekCategoryTitle = category;
            return lipsFilters.includes(cheekCategoryTitle);
          })){
            return false;
          }
        
          return true;
        });
        
        return filteredProducts;
      };

      const product2 = filterOutLipsProducts()
      product.push(...product2);
    }
    
    if(eyesFilters && eyesFilters.length > 0){  
      const filterOutEyesProducts = () => {
        let filteredProducts = products.filter((product) => {
          const eyesCategory = product?.categories.makeup.eyesMakeupCategory;
          let eyesCategories = [eyesCategory]
    
          if (eyesFilters && eyesFilters.length > 0 && !eyesCategories?.some((category) => {
            const cheekCategoryTitle = category;
            return eyesFilters.includes(cheekCategoryTitle);
          })){
            return false;
          }
        
          return true;
        });
        
        return filteredProducts;
      }

      const product3 = filterOutEyesProducts()
      product.push(...product3);
    }
    
    const finalData = product.length > 0 ? product : products;

    // further filter out on the bases of price and sorting  value 
    let finalFilteredProducts = finalData?.filter((product) => {
      const featuredCategory = product?.categories.makeup.featuredCategory;
      const productPrice = product?.price;
      let featuredCategories = [featuredCategory];
      
      
      if (featuredFilters && featuredFilters.length > 0 && !featuredCategories?.some((category) => {
        const featuredCategoryId = category;
        return featuredFilters.includes(featuredCategoryId);
      })){
        return false;
      }
    
      if (displaySortFilterValue === 'latest arrival' && !featuredCategories?.some((category) => {
        const featuredCategoryId = category;
        return featuredCategoryId === '66622cba7d9a24090ad18458';
      })){
        return false;
      }

      // Price filter logic start
      // Function to convert a price range string to numerical values
      const convertToRange = (priceRange: string) => {
        const valueMap: { [key: string]: number[] } = {
          '50-150': [50, 150],
          '150-250': [150, 250],
          '250-350': [250, 350],
          '350-450': [350, 450],
          'over-450': [450, 99999],
        };
        
        return valueMap[priceRange] || [NaN, NaN];
      };
      
      // Function to check if the product price is within the selected price range
      const isPriceInRange = (productPrice: number, priceRange: string) => {
        const [lower, upper] = convertToRange(priceRange);
        return productPrice >= lower && productPrice <= upper;
      };
      
      // Check if the product matches the selected price filters
      if (makeupPriceFilters && makeupPriceFilters.length > 0 && !makeupPriceFilters.some((priceRange) => isPriceInRange(productPrice, priceRange))) {
        return false;
      }
      // Price filter logic end

      return true;
    })

    // if (!isOutOfStock) {
    //   finalFilteredProducts = finalFilteredProducts.filter((item) => {
    //     return !item.attributes.outofstock; 
    //   });
    // }

  // Sort products based on price if displaySortFilterValue is selected
  if (displaySortFilterValue === 'price high to low') {
    finalFilteredProducts = finalFilteredProducts.sort((a: any, b: any) => b.price - a.price);
  } else if (displaySortFilterValue === 'price low to high') {
    finalFilteredProducts = finalFilteredProducts.sort((a: any, b: any) => a.price - b.price);
  }
    
    return finalFilteredProducts; 

  } 
