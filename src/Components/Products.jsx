import {useParams} from "react-router-dom"
const Products=()=>{
    const {categoryName}=useParams()
    console.log(categoryName)
    return (<>
    <h1>I am A Products Page</h1>
    </>)
}
export default Products;