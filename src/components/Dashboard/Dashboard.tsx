"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
// import { SelectValue } from '@radix-ui/react-select'


const Dashboard = () => {
  const [productOptions, setProductOptions] = useState([
    {
      name: "Makeup",
      id: 1
    },
    {
      name: "Skincare",
      id: 2
    }
  ])

  const [makeupCategories, setMakeupCategories] = useState([
    {
      name: "cheek",
      id: 1
    },
    {
      name: "lips",
      id: 2
    },
    {
      name: "eyes",
      id: 3
    }
  ])

  const [skincareCategories, setSkincareCategories] = useState([
    {
      name: "skincare",
      id: 1
    },
    {
      name: "skin condition",
      id: 2
    },
  ])

  const [createBanners, setCreateBanners] = useState([
    {
      name: "category",
      id: 1
    },
    {
      name: "slider",
      id: 2
    },
  ])
  
  const router = useRouter();

  const handleChange = (value: string) => {
    const product = value.toLowerCase();
    console.log('product selected = ',product);
    
    if(product === "makeup"){
      router.push("/dashboard/create/makeup")
    }
    if(product === "skincare"){
      router.push("/dashboard/create/skincare")
    }
  }

  return (
    <div className='flex flex-col gap-4 bg-gray-200 rounded-xl py-2 px-2'>
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Create Product" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Products</SelectLabel>
        { productOptions.map((product) => (
          <SelectItem key={product.id} value={product.name}>{product.name}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Create categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Makeup</SelectLabel>
        { makeupCategories.map((product) => (
          <SelectItem key={product.id} value={product.name}>{product.name}</SelectItem>
        ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Skincare</SelectLabel>
        { skincareCategories.map((product) => (
          <SelectItem key={product.id} value={product.name}>{product.name}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Create Product" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>create Banners</SelectLabel>
        { createBanners.map((banner) => (
          <SelectItem key={banner.id} value={banner.name}>{banner.name}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
      {/* <select 
        id="product"
        className='border rounded-md py-2'
        onChange={handleChange} // Changed to just handleChange without handleSubmit
      >
        <option value="">Create Product</option>
          {productOptions.map((product) => (
          <option 
            key={product.id} 
            value={product.name}
          >
            {product.name}
          </option>
        ))}
      </select>
      <Link href={"/dashboard/category"}>Create Category</Link> */}
    </div>
  )
}

export default Dashboard
