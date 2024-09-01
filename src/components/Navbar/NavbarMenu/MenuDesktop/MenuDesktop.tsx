"use client";
import { cn } from "@/lib/utils";
import { menuData } from "@/utils/menuData";
import { useEffect, useState } from "react";
import SkincarepMenuDesktop from "./SkincarepMenuDesktop";
import MakeupMenuDesktop from "./MakeupMenuDesktop";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import config from "@/config/config";
import { CategoryType, SkinCareProductType } from "@/utils/types";
import useCategoryDataStore from "@/stores/categoryDataStore";

const MenuDesktop = () => {

  const { categories, loading, error, fetchCategories } = useCategoryDataStore();

  const [dropdownStates, setDropdownStates] = useState(menuData?.map(() => false));
  const [selectedItem, setSelectedItem] = useState('');
  const [collection, setCollection] = useState<SkinCareProductType[]>([]);
  
  useEffect(() => {
    const getCollection = async () => {
      try {
        const response = await fetch(`${config.baseUri}/v1/skincare/collection`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCollection(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getCollection();
    fetchCategories();
    
  }, []);

  const handleMouseEnter = (index: number) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = true;
    setDropdownStates(newDropdownStates);
  };

  const handleMouseLeave = () => {
    setDropdownStates(menuData?.map(() => false));
  };

  const handleLinkClick = () => {
    setDropdownStates(menuData?.map(() => false));
  };

  return (
    <div className='flex justify-between items-center gap-5 laptop-m:gap-10 h-[42px] mt-[64px] mb-[24px]'>
      {menuData.map((items, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => setSelectedItem(items.slug)}
          className={cn(
            selectedItem === items.slug ? "text-brand" : "text-neutral-900",
            "h-[58px] capitalize text-base font-bold leading-snug hover:text-brand cursor-pointer py-2 px-1"
          )}
        >
          <div className="px-2">
            {items.name}
          </div>
          <SkincarepMenuDesktop
            dropdownStates={dropdownStates}
            index={index}
            menuCategory={items.slug}
            handleLinkClick={handleLinkClick}
            featuredCategorySkincare={categories.featuredSkincare}
            skinCareCategory={categories.skincare}
            skinConditionCategory={categories.skinCondition}
            collection={collection}
          />
          <MakeupMenuDesktop
            dropdownStates={dropdownStates}
            index={index}
            menuCategory={items.slug}
            handleLinkClick={handleLinkClick}
            featuredCategoryMakeup={categories.featuredMakeup}
            cheekCategory={categories.cheek}
            eyeCategory={categories.eyes}
            lipsCategory={categories.lips}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuDesktop;
