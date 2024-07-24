
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"} className='relative'>
      <div className='laptop-s:w-[120px] laptop-s:h-[60px] flex flex-col items-center cursor-pointer'>
        <Image 
          src={"/logoIcon.svg"}
          width={22}
          height={30}
          alt="logo"
          className='w-[18px] h-[23px] laptop-s:h-[30px] laptop-s:w-[22px]'
        />
        {/* <Image 
          src={"/logoTitle.svg"}
          width={120}
          height={18}
          alt="logo"
          className=''
        /> */}
          <h2 className='text-[#A10550] w-full text-sm tablet-m:text-base laptop-s:text-xl font-bold uppercase'>SkinGlow</h2>
          <div className="laptop-s:w-[150px] laptop-s:h-[85px] bg-pink-900 rounded-full blur-[100px] absolute z-10" />
      </div>
    </Link>
  )
}

export default Logo