'use client'
import { useFetchCategories } from '@/hooks/useFetchCategories';
import { useState } from 'react'
import { useForm } from 'react-hook-form';


const CreateProduct = () => {
  
  const [cheekCategory, setCheekCategory] = useState([]);  
  const [eyeCategory, setEyeCategory] = useState([]);
  const [lipCategory, setLipCategory] = useState([]);
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // Filter out empty category values before sending to backend, because backend only accepts objectIds not empty ''
    const filteredData = {
      ...data,
      categories: Object.fromEntries(
        Object.entries(data.categories).filter(
          ([key, value]) => value !== '' // Check for non-empty strings
        )
      ),
    };
        
    try {
      setLoading(true)
      
      await fetch("http://localhost:4000/v1/makeup/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
      }) 
      
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useFetchCategories("http://localhost:4000/v1/makeup/category/lips/all", setLipCategory);
  useFetchCategories("http://localhost:4000/v1/makeup/category/eyes/all", setEyeCategory);
  useFetchCategories("http://localhost:4000/v1/makeup/category/cheek/all", setCheekCategory)
  useFetchCategories("http://localhost:4000/v1/category/featured/all", setFeaturedCategory)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start justify-end gap-y-2 mt-10 max-w-[500px] mx-auto border px-5 py-5'>
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
        <input id="price" placeholder='Enter product price' {...register("price")} className='border rounded-md px-2 py-2'/>
        {errors.price && <span>This field is required</span>}
      </div>
      <div className='flex items-center gap-x-4'>
        <label>images</label>
        <input id="images" {...register("images")} className='border rounded-md px-2 py-2'/>
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
            <input id="productDetails.ingredients" {...register("productDetails.ingredients")} className='border rounded-md px-2 py-2'/>
            {errors['productDetails.ingredients'] && <span>This field is required</span>}
          </div>
          <div className='flex items-center gap-x-4'>
            <label>How to Apply</label>
            <input id="productDetails.howToApply" {...register("productDetails.howToApply")}className='border rounded-md px-2 py-2' />
            {errors['productDetails.howToApply'] && <span>This field is required</span>}
          </div>
          <div className='flex items-center gap-x-4'>
            <label>Features</label>
            <input id="productDetails.features" {...register("productDetails.features")}className='border rounded-md px-2 py-2' />
            {errors['productDetails.features'] && <span>This field is required</span>}
          </div>
        </div>
      </div>
  
      <div className='flex items-center gap-x-4'>
        <label>cheek Makeup Category</label>
        <select 
          id="categories.cheekMakeupCategory" 
          {...register("categories.cheekMakeupCategory")}
          className='border rounded-md px-2 py-2'
        >
          <option value="">Select a category</option>
          {cheekCategory?.map((category: any) => (
            <option key={category?._id} value={category?._id}>{category?.name}</option>
          ))}
        </select>
        {errors['categories.cheekMakeupCategory'] && <span>This field is required</span>}
      </div>
  
      <div className='flex items-center gap-x-4'>
        <label>lips Makeup Category</label>
        <select 
          id="categories.lipsMakeupCategor" 
          {...register("categories.lipsMakeupCategor")}
          className='border rounded-md px-2 py-2'
        >
          <option value="">Select a category</option>
          {lipCategory?.map((category: any) => (
            <option key={category?._id} value={category?._id}>{category?.name}</option>
          ))}
        </select>
        {errors['categories.lipsMakeupCategor'] && <span>This field is required</span>}
      </div>

      <div className='flex items-center gap-x-4'>
        <label>eyes Makeup Category</label>
        <select 
          id="categories.eyesMakeupCategory" 
          {...register("categories.eyesMakeupCategory")}
          className='border rounded-md px-2 py-2'
        >
          <option value="">Select a category</option>
          {eyeCategory?.map((category: any) => (
            <option key={category?._id} value={category?._id}>{category?.name}</option>
          ))}
        </select>
        {errors['categories.eyesMakeupCategory'] && <span>This field is required</span>}
      </div>
      <div className='flex items-center gap-x-4'>
        <label>featured Category</label>
        <select 
          id="categories.featuredCategory" 
          {...register("categories.featuredCategory")}
          className='border rounded-md px-2 py-2'
        >
          <option value="">Select a category</option>
          {featuredCategory?.map((category: any) => (
            <option key={category?._id} value={category?._id}>{category?.name}</option>
          ))}
        </select>
        {errors['categories.featuredCategory'] && <span>This field is required</span>}
      </div>
      {/* Repeat similar input fields for other categories */}
      { !loading && (
        <button type="submit" className='border px-4 py-4 rounded-xl'>Submit</button>
      )}
      { loading && (
        <button className='border px-4 py-4 rounded-xl'>loading ...</button>
      )}
    </form>
  );
}

export default CreateProduct