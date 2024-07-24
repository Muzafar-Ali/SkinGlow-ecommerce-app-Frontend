'use client'
import React, { useEffect, useState } from 'react'
import { BsChatLeftText } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineArrowUp } from 'react-icons/ai';

const OnlineChat = () => {
  const [isVisibleText, setIsVisibleText] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisibleText(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`${isVisibleText ? "w-[162px]" : "w-[70px]"} ${isVisible ? "visible" : "hidden"} h-28 flex-col justify-start items-end gap-4 inline-flex fixed top-[76%] laptop:top-[76%] z-20 right-[10px] laptop:right-[54px] cursor-pointer bg-transparent`}>
      <div className="h-10 tablet-m:h-12 px-2 tablet-m:px-4 py-2 bg-white border-2 border-pink-800 justify-center items-center gap-2 inline-flex max-laptop:hidden" 
        onClick={scrollToTop}>
        <div className="w-6 h-6 text-pink-800 relative bg-white">
          <AiOutlineArrowUp className="w-6 h-6 bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default OnlineChat;