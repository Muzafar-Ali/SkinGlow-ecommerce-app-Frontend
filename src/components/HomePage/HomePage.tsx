import Wrapper from "../Wrapper"
import BestSellers from "./BestSellers"
import Latest from "./Latest"
import OurBlogsDesktop from "./OurBlogs/OurBlogsDesktop"
import OurBlogsMobile from "./OurBlogs/OurBlogsMobile"
// import OurBlogsMobile from "./OurBlog/OurBlogMobile"
import ProductCategories from "./ProductCategories"
import SpecialOffer from "./SpecialOffer"

const HomePage = () => {
  return (
    <div>
      <ProductCategories/>
      <BestSellers/>
      <Latest/>
      <SpecialOffer/>
      <OurBlogsDesktop/>
      <OurBlogsMobile/>
    </div>
  )
}

export default HomePage