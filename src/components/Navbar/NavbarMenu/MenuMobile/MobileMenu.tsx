'use client'
import { useState } from "react"
import { AiOutlineCaretRight } from "react-icons/ai"
import { MdOutlineArrowBackIos } from "react-icons/md"
import MakeUpMobileMenu from "./MakeupMobileMenu"
import SkincareMobileMenu from "./SkincareMobileMenu"

type MobileMenuProps = {
  isDropDown: boolean;
  setIsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isDropDown, setIsDropDown}: MobileMenuProps) => {
  // state for skincare drop down 
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isSkinConditionCategoryOpen, setIsSkinConditionCategoryOpen] = useState(false)
  const [isCollectionOpen, setIsCollectionOpen] = useState(false)
  const [isSkincareMobileMenuOpen, setIsSkincareMobileMenuOpen] = useState(false)
 
  // state for makeup drop down 
  const [isMakeupCategoryOpen, setIsMakeupCategoryOpen] = useState(false);
  const [isMakeupAll, setIsMakeupAll] = useState(false)
  const [isLips, setIsLips] = useState(false)
  const [isCheek, setIsCheek] = useState(false)
  const [isEye, setIsEye] = useState(false)

  const [subMenuDropDown, setsubMenuDropDown] = useState(false)
  const [isSelected, setIsSelected] = useState<string[]>([])

  const handleClick = (value: string) => {
    
    if(isSelected.includes((value))){
      setIsSelected(isSelected.filter(item => item !== (value)));
    }else{
      setIsSelected([...isSelected, (value)])
    }
  }
  
  return (
    <div className={`${ isDropDown ? 'opacity-100 translate-y-0 z-10 ':'opacity-0 -translate-y-3 -z-10 '} transition-all duration-500 ease-in-out absolute top-[64px] w-full h-screen  py-[24px] bg-background_custom flex flex-col laptop-s:hidden `}>
      
      <div className={`${isSelected?.length > 0 ? 'inline-block':'hidden'} inline-flex items-center space-x-[4px] py-[16px] px-[8px] bg-background_custom`}>
        <MdOutlineArrowBackIos className="w-6 h-6"
          onClick={() => setIsSelected([])}
          />
        <p className="w-[232px] text-neutral-950 text-sm font-semibold leading-tight">
          {isSelected[0]}
        </p>  
      </div>

      {/* makeup section starts */}
      <div
        className={`${isSelected?.includes(('Women Skincare'))? 'hidden':'visible'} 
        h-10 px-[20px] py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex cursor-pointer transition-opacity duration-1000 ease-in-out`}
      >
        <div
          onClick={() => handleClick('women makeup')}
          className="grow shrink basis-0 bg-white  text-neutral-950 text-sm font-semibold leading-tight"
        >
          women makeup
        </div>
        <AiOutlineCaretRight className={`${isSelected?.includes(('women makeup')) ? 'rotate-90':''} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
      </div>

      <MakeUpMobileMenu
        isMakeupAll={isMakeupAll}
        setIsMakeupAll={setIsMakeupAll}
        isLips={isLips}
        setIsLips={setIsLips}
        isCheek={isCheek}
        setIsCheek={setIsCheek}
        isEye={isEye}
        setIsEye={setIsEye}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        isMakeupCategoryOpen={isMakeupCategoryOpen}
        setIsMakeupCategoryOpen={setIsMakeupCategoryOpen}
        setIsDropDown={setIsDropDown}
      />
        {/* makeup section ends */}

        {/* skincare section starts */}
        <div
          className={`${isSelected?.includes(('women makeup')) ? 'hidden':'inline-block'} 
          h-10 px-[20px] py-4 bg-white border-t border-b border-neutral-200 justify-start items-center gap-1 inline-flex cursor-pointer transition-opacity duration-1000 ease-in-out`}
        >
          <div
            onClick={() => handleClick('Women Skincare')}
            className="grow shrink basis-0 bg-white  text-neutral-950 text-sm font-semibold leading-tight"
          >
            Women Skincare
          </div> 
          <AiOutlineCaretRight className={`${isSelected?.includes(('Women Skincare')) ? 'rotate-90':''} w-3 h-3 bg-white transition-transform duration-300 ease-in-out`}/>
        </div>

        <SkincareMobileMenu
          isCategoryOpen={isCategoryOpen}
          setIsCategoryOpen={setIsCategoryOpen}
          isSkinConditionCategoryOpen={isSkinConditionCategoryOpen}
          setIsSkinConditionCategoryOpen={setIsSkinConditionCategoryOpen}
          isCollectionOpen={isCollectionOpen}
          setIsCollectionOpen={setIsCollectionOpen}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setIsDropDown={setIsDropDown}
        />
        {/* skincare section ends */}

    </div>
  )
}

export default MobileMenu