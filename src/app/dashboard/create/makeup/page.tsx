'use client'
import config from '@/config/config';
import useCategoryDataStore from '@/stores/categoryDataStore';
import { appendFormData } from '@/utils/helpers/appendFormData';
import { useState } from 'react'
import { useForm } from 'react-hook-form';


const CreateMakeupproduct = () => {
  
  const { categories, fetchCategories } = useCategoryDataStore();
  const [loading, setLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {

    // Create FormData object
    const formData = new FormData();
   
    // Append data using the function
    const data1 = appendFormData(formData, data, "makeup");
       
    try {
      setLoading(true)
      
      const result = await fetch(`${config.baseUri}/v1/makeup/create`, {
        method: "POST",
        body: formData,
      }) 

      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <>
      <h2 className='max-w-[500px] mx-auto mt-10'>Create Makeup Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start justify-end gap-y-2  max-w-[500px] mx-auto border px-5 py-5'>
        <div className='flex items-center gap-x-4'>
          <label htmlFor="title">Product Title</label>
          <input placeholder="Enter product title" id="title" {...register("title")} className='border rounded-md px-2 py-2'/>
          {/* <span className="text-red-400">{errors.firstName?.message}</span> */}
          {errors.title && <span>This field is required</span>}
        </div>
        <div>
          {/* <label htmlFor='slug'>Slug</label>
          <input id='slug' {...register("slug")} /> */}
        </div>
        <div className='flex items-center gap-x-4'>
          <div className='flex items-center justify-between'>
            <label htmlFor='tagline'>Tagline</label>
            <input id='tagline' placeholder='Enter product tagline' {...register("tagline")}className='border rounded-md px-2 py-2'/>
            {errors.tagline && <span>This field is required</span>}
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <label>Price</label>
          <input id="price" placeholder='Enter product price' {...register("price", {valueAsNumber: true})} type='number' className='border rounded-md px-2 py-2'/>
          {errors.price && <span>This field is required</span>}
        </div>
        <div className='flex items-center gap-x-4'>
          <label>Stock</label>
          <input id="stock" placeholder='Enter product stock' {...register("stock", {valueAsNumber: true})} type='number' className='border rounded-md px-2 py-2'/>
          {errors.stock && <span>This field is required</span>}
        </div>
        <div className='flex items-center gap-x-4'>
          <label>thumbnail</label>
          <input id="thumbnail" {...register("thumbnail")} type='file' className='border rounded-md px-2 py-2'/>
          {errors.thumbnail && <span>This field is required</span>}
        </div>
        <div className='flex items-center gap-x-4'>
          <label>images</label>
          <input id="images" {...register("images")} type='file' multiple className='border rounded-md px-2 py-2'/>
          {errors.images && <span>This field is required</span>}
        </div>
        <div className=''>
          <h2>Product Details :</h2>
          <div className='pl-14 flex flex-col gap-4'>
            <div className='flex items-center gap-x-4'>
              <label>Description</label>
              <textarea id="productDetails.description" {...register("productDetails.description")} className='border rounded-md px-2 py-2'></textarea>
              {errors['productDetails.description'] && <span>This field is required</span>}
            </div>
            <div className='flex items-center gap-x-4'>
              <label>Ingredients</label>
              <textarea id="productDetails.ingredients" {...register("productDetails.ingredients")} className='border rounded-md px-2 py-2'></textarea>
              {errors['productDetails.ingredients'] && <span>This field is required</span>}
            </div>
            <div className='flex items-center gap-x-4'>
              <label>How to Apply</label>
              <textarea id="productDetails.howToApply" {...register("productDetails.howToApply")} className='border rounded-md px-2 py-2'></textarea>
              {errors['productDetails.howToApply'] && <span>This field is required</span>}
            </div>
            <div className='flex items-center gap-x-4'>
              <label>Features</label>
              <textarea id="productDetails.features" {...register("productDetails.features")}className='border rounded-md px-2 py-2' ></textarea>
              {errors['productDetails.features'] && <span>This field is required</span>}
            </div>
          </div>
        </div>
    
        <div className='flex items-center gap-x-4'>
          <label>cheek Makeup Category</label>
          <select 
            id="categories.makeup.cheekMakeupCategory" 
            {...register("categories.makeup.cheekMakeupCategory")}
            className='border rounded-md px-2 py-2'
          >
            <option value="">Select a category</option>
            {categories.cheek?.map((category: any) => (
              <option key={category?._id} value={category?._id}>{category?.name}</option>
            ))}
          </select>
          {errors['categories.makeup.cheekMakeupCategory'] && <span>This field is required</span>}
        </div>
    
        <div className='flex items-center gap-x-4'>
          <label>lips Makeup Category</label>
          <select 
            id="categories.makeup.lipsMakeupCategory" 
            {...register("categories.makeup.lipsMakeupCategory")}
            className='border rounded-md px-2 py-2'
            >
            <option value="">Select a category</option>
            {categories.lips?.map((category: any) => (
              <option key={category?._id} value={category?._id}>{category?.name}</option>
            ))}
          </select>
          {errors['categories.makeup.lipsMakeupCategory'] && <span>This field is required</span>}
        </div>

        <div className='flex items-center gap-x-4'>
          <label>eyes Makeup Category</label>
          <select 
            id="categories.makeup.eyesMakeupCategory" 
            {...register("categories.makeup.eyesMakeupCategory")}
            className='border rounded-md px-2 py-2'
            >
            <option value="">Select a category</option>
            {categories.eyes?.map((category: any) => (
              <option key={category?._id} value={category?._id}>{category?.name}</option>
            ))}
          </select>
          {errors['categories.makeup.eyesMakeupCategory'] && <span>This field is required</span>}
        </div>

        <div className='flex items-center gap-x-4'>
          <label>featured Category</label>
          <select 
            id="categories.makeup.featuredCategory" 
            {...register("categories.makeup.featuredCategory")}
            className='border rounded-md px-2 py-2'
            >
            <option value="">Select a category</option>
            {categories.featuredMakeup?.map((category: any) => (
              <option key={category?._id} value={category?._id}>{category?.name}</option>
            ))}
          </select>
          {errors['categories.makeup.featuredCategory'] && <span>This field is required</span>}
        </div>
        {/* Repeat similar input fields for other categories */}
        { !loading && (
          <button type="submit" className='border px-4 py-4 rounded-xl'>Submit</button>
        )}
        { loading && (
          <button className='border px-4 py-4 rounded-xl'>loading ...</button>
        )}
      </form>
    </>
  );
}

export default CreateMakeupproduct