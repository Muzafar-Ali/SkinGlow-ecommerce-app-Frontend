import Link from "next/link";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineSearch } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const SearchAndCart = () => {
  const itemsCart = [];

  return (
    <div className="flex items-center justify-center p-2 mt-[20px]">
      {/* search */}
      <div className="flex items-center justify-center p-2 cursor-pointer">
        <MdOutlineSearch className="w-6 h-6" />
      </div>
      <div className="w-6 h-[0px] rotate-90 border border-zinc-500"></div>

      {/* locale */}
      <div className="flex justify-center items-center p-2 gap-1 cursor-pointer">
        <GrLanguage className="w-6 h-6" />
        <span className="text-neutral-950 text-base font-normal capitalize leading-7">
          {" "}
          US
          <span className="text-zinc-600 text-sm font-normal capitalize leading-normal">
            (ENG)
          </span>
        </span>
      </div>
      
      {/* shopping cart */}
      <Link
        href={`/cart`}
        className="flex justify-center items-center p-2 gap-1 cursor-pointer relative"
      >
        <div className="bg-pink-900 rounded-full h-5 w-5 flex justify-center items-center absolute -top-[5px] right-[4px]">
          <span className="text-white bg-transparent">{itemsCart?.length}</span>
        </div>
        <PiShoppingCartSimpleBold className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default SearchAndCart;
