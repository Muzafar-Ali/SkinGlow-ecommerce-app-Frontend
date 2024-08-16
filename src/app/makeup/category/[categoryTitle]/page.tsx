import MakeupProductPage from "../../page"

const page = ({params}: {params: {categoryTitle: string}}) => {
  return (
    <div>
      <MakeupProductPage categoryTitle={params.categoryTitle}/>
    </div>
  )
}

export default page