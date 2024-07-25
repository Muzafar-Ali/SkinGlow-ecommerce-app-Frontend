import Wrapper from "../Wrapper"
import Logo from "./Logo"
import MenuDesktop from "./NavbarMenu/MenuDesktop/MenuDesktop"
import SearchAndCart from "./NavbarMenu/SearchAndCart"

const NavbarDesktop = () => {
  return (
    <Wrapper className='hidden laptop-s:flex items-center justify-between max-w-[1520px] px-5 laptop-m:px-10 h-[107px] border-b border-neutral-200 bg-background_custom'>
      <Logo/>
      < MenuDesktop/>
      <SearchAndCart/>
    </Wrapper>
  )
}

export default NavbarDesktop