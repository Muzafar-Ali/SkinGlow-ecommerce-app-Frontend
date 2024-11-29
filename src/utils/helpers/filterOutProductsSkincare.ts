import { SkinCareProductType } from "../types";


export const filterOutProductsSkincare = (
    appliedFilters: string[], 
    products: SkinCareProductType[], 
    isOutOfStock?: boolean, 
    displaySortFilterValue?:string, 
    categoryFilters?: string[],
    skinConditionFilters?: string[],
    featuredFilters?: string[],
    priceFilters?: string[],
    categoryWords?: string[],
  ): SkinCareProductType[] =>  {
   
    let filteredProducts = products?.filter((product) => {

      const skinCategory = product?.categories?.skincare?.skinCareCategory;
      let skinCategories = [skinCategory]

      const skinConditionCategory = product?.categories?.skincare?.skinConditionCategory;
      let skinConditionCategories = [skinConditionCategory]
      
      const featuredCategory = product?.categories?.skincare?.featuredCategory;
      let featuredCategories = [featuredCategory]
      
      const productPrice = product?.price;
      const productTitle = product.title.toLowerCase();

      if (categoryWords && categoryWords.length > 1 && !categoryWords.some((categoryWord) => {
        return productTitle.includes(categoryWord);
      })) {
          return false;
      }

      if ( categoryFilters && categoryFilters.length > 0 && !skinCategories?.some((category) => {
        const categoryTitle = category as unknown as string;        
        return categoryFilters.includes(categoryTitle);
      })) {
        return false;
      }

      if (skinConditionFilters && skinConditionFilters.length > 0 && !skinConditionCategories?.some((category) => {
        const skinConditionTitle = category as unknown as string;   
        return skinConditionFilters.includes(skinConditionTitle);
      })){
        return false;
      }

      if (featuredFilters && featuredFilters.length > 0 && !featuredCategories?.some((category) => {
        const marketingCategoryTitle = category as unknown as string;   
        return featuredFilters.includes(marketingCategoryTitle);
      })){
        return false;
      }
      
      if (displaySortFilterValue === 'latest arrival' && !featuredCategories?.some((category) => {
        const featuredCategoryId = category as unknown as string;  
        return featuredCategoryId === '6692f5b5912b28665afef6fd';
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
      if (priceFilters && priceFilters.length > 0 && !priceFilters.some((priceRange) => isPriceInRange(productPrice, priceRange))) {
        return false;
      }
      // Price filter logic end
      
      
      return true;
    });
    

    // if (!isOutOfStock) {
    //     filteredProducts = filteredProducts.filter((item: any) => {
    //     return !item.attributes?.outofstock; 
    //   });
    // }
  
    // Sort products based on price if displaySortFilterValue is selected
    if (displaySortFilterValue === 'price high to low') {
      filteredProducts = filteredProducts.sort((a: any, b: any) => b.price - a.price);
    } else if (displaySortFilterValue === 'price low to high') {
      filteredProducts = filteredProducts.sort((a: any, b: any) => a.price - b.price);
    }
    
  
    return filteredProducts;
  };

