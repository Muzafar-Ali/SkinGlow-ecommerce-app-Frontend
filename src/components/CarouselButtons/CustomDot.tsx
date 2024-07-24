import React from "react";
import { BsDashLg } from 'react-icons/bs';

const CustomDot = ({ onMove, index, onClick, active }: any) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <div
        className={`${active ? "text-red-500" : "text-gray-500"} `}
        onClick={() => onClick()}
      >
        <BsDashLg size={30} className='h-10 w-10 ' />  
      </div>
    );
  };
export default CustomDot;  