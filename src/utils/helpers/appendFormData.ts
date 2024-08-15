
export const appendFormData = (formData: FormData, data: any, category:string) => {
  
    // Convert the FileList to an array of files
    const files = Array.from(data.images) as File[];
    const thumbnail = Array.from(data.thumbnail) as File[];
  
    //Append files 
    files.forEach((file, index) => formData.append('images', file));
    
    if (thumbnail.length > 0) {
      formData.append('thumbnail', thumbnail[0]);
    }
      
    // Append other data (title, tagline, price, etc.)
    formData.append('title', data.title);
    formData.append('tagline', data.tagline);
    formData.append('price', data.price);
    formData.append('stock', data.stock);
  
    // Append product details
    formData.append('productDetails[description]', data.productDetails.description);
    formData.append('productDetails[ingredients]', data.productDetails.ingredients);
    formData.append('productDetails[howToApply]', data.productDetails.howToApply);
    formData.append('productDetails[features]', data.productDetails.features);
    
    let filteredCategories = {};

    if(category === "skincare"){
      // Filter categories
      filteredCategories = Object.fromEntries(
        Object.entries(data.categories.skincare).filter(([key, value]) => value !== '')
      );
    }
    
    if(category === "makeup"){
      // Filter categories
      filteredCategories = Object.fromEntries(
        Object.entries(data.categories.makeup).filter(([key, value]) => value !== '')
      );
    }
    
    if(category === "makeup"){
      // Append filtered categories as a JSON string
      formData.append('categories', JSON.stringify({ makeup: filteredCategories }));
    }
    if(category === "skincare"){
      // Append filtered categories as a JSON string
      formData.append('categories', JSON.stringify({ skincare: filteredCategories }));
    }
    
  };
  