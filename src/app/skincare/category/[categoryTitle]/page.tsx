import SkincareProductPage from "../../page"

const page = ({params}: {params: {categoryTitle: string}}) => {
  return (
    <div>
      <SkincareProductPage categoryTitle={params.categoryTitle}/>
    </div>
  )
}

export default page