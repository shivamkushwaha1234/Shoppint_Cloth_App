import {Link} from "react-router-dom"
const CategoryCard=({category})=>{
    const {categoryName,imageURL}=category
    
    return (
    <Link key={categoryName}  to={`/products/${categoryName}`}>
<img   src={imageURL}/>
    </Link >)
}
export default CategoryCard