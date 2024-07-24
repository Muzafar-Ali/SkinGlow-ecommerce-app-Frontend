import SortFilters from "@/components/Skincare/SkincareFilterOptions/SortFilters";
import { ProductsType2 } from "./types/types";

export const filterOutProductsSkincare = (
    appliedFilters: string[], 
    products: ProductsType2[], 
    isOutOfStock?: boolean, 
    displaySortFilterValue?:string, 
    categoryFilters?: string[],
    skinConditionFilters?: string[],
    featuredFilters?: string[],
    priceFilters?: string[],
    categoryWords?: string[],
    ): ProductsType2[] =>  {
    
    let filteredProducts = products?.filter((product) => {
      const skinCategories = product?.attributes?.skincare_categories?.data;
      const skinCondition = product?.attributes?.skincondition_categories?.data;
      const marketingCategories = product?.attributes?.marketing_categories?.data;
      const productPrice = product?.attributes?.price;
      const productTitle = product.attributes.title.toLowerCase();

      if (categoryWords && categoryWords.length > 1 && !categoryWords.some((categoryWord) => {
        return productTitle.includes(categoryWord);
      })) {
          return false;
      }

      if ( categoryFilters && categoryFilters.length > 0 && !skinCategories?.some((category) => {
        const categoryTitle = category.attributes.slug;        
        return categoryFilters.includes(categoryTitle);
      })) {
        return false;
      }

      if (skinConditionFilters && skinConditionFilters.length > 0 && !skinCondition?.some((category) => {
        const skinConditionTitle = category.attributes.slug;
        return skinConditionFilters.includes(skinConditionTitle);
      })){
        return false;
      }

      if (featuredFilters && featuredFilters.length > 0 && !marketingCategories?.some((category) => {
        const marketingCategoryTitle = category.attributes.slug;
        return featuredFilters.includes(marketingCategoryTitle);
      })){
        return false;
      }
      
      if (displaySortFilterValue === 'latest arrival' && !marketingCategories?.some((category) => {
        const marketingCategoryTitle = category.attributes.slug;
        return marketingCategoryTitle === 'new';
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
    

    if (!isOutOfStock) {
        filteredProducts = filteredProducts.filter((item: any) => {
        return !item.attributes.outofstock; 
      });
    }
  
    // Sort products based on price if displaySortFilterValue is selected
    if (displaySortFilterValue === 'price high to low') {
      filteredProducts = filteredProducts.sort((a: any, b: any) => b.attributes.price - a.attributes.price);
    } else if (displaySortFilterValue === 'price low to high') {
      filteredProducts = filteredProducts.sort((a: any, b: any) => a.attributes.price - b.attributes.price);
    }
    
  
    return filteredProducts;
  };

