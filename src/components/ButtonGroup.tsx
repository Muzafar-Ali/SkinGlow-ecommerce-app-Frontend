import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div >
        <div className="w-6 tablet-m:w-10 h-6 tablet-m:h-10 p-1 bg-white border border-stone-300 justify-center items-center inline-flex  absolute top-[50%]  left-[6%]">
          <button className="w-4 tablet-m:w-8 h-4 tablet-m:h-8 justify-center items-center flex" onClick={() => previous()}>
            <AiOutlineCaretRight className="w-3 tablet-m:w-4 h-3 tablet-m:h-4 rotate-180 bg-transparent" />
          </button>
        </div>
  
        <div className="w-6 tablet-m:w-10 h-6 tablet-m:h-10 p-1 bg-white border border-stone-300 justify-center items-center inline-flex absolute top-[50%] right-[6%]">
          <button className="w-4 tablet-m:w-8 h-4 tablet-m:h-8 justify-center items-center flex" onClick={() => next()}>
            <AiOutlineCaretRight className="w-3 tablet-m:w-4 h-3 tablet-m:h-4 bg-transparent" />
          </button>  
        </div>
      </div>
     );
   };
export default ButtonGroup;