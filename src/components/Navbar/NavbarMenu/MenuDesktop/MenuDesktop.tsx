"use client"
import { cn } from "@/lib/utils"
import { menuData } from "@/utils/menuData"
import { useState } from "react";
import SkincarepMenuDesktop from "./SkincareMenu";
import MakeupMenuDesktop from "./MakeupMenu";

const MenuDesktop = () => {
  const [dropdownStates, setDropdownStates] = useState(menuData?.map(() => false));
  const [selectedItem, setSelectedItem] = useState('');

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
          onClick={ () => setSelectedItem(items.slug)}
          className={cn(selectedItem === items.slug ? "text-brand" : "text-neutral-900",
          "h-[58px] capitalize text-base font-bold leading-snug hover:text-brand cursor-pointer py-2 px-1")}
        >
          <div className="px-2">
            {items.name}
          </div>

          <SkincarepMenuDesktop
            dropdownStates={dropdownStates}
            index={index}
            menuCategory={items.slug}
            handleLinkClick={handleLinkClick}
          />
          <MakeupMenuDesktop
            dropdownStates={dropdownStates}
            index={index}
            menuCategory={items.slug}
            handleLinkClick={handleLinkClick}
          />

        </div>
        
      ))}
    </div>

  )
}

export default MenuDesktop