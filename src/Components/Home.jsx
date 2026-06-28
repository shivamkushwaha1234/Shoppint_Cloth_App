import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import {categories} from "../data.js"
const CategoryCard=({category})=>{
  const {categoryName,imageURL}=category
  
  return(
  <Link key={categoryName} to={`/products/${categoryName}`}>
  <img src={imageURL}/>
  </Link>)
}
const Home = () => {
  return (
    <>
    <h1>
    <section>
      <div className="img-container">
        <img
          className="img-home"
          src="https://images.pexels.com/photos/37713979/pexels-photo-37713979.jpeg"
          alt="Banner"
        />

        <Link
          className="primary-btn position-img-button"
          to="/products"
        >
         < FaShopify/>
        </Link>
      </div>
    </section>
    <section>
      <h3 className="category-head">Popular Categories</h3>
      <div className="categories-container">
 {
  categories.map(category=>(
     <div className="category-image"key={category.categoryName}>
    <CategoryCard category={category}/>
    </div>
  ))
 }
      </div>
      
    </section>
    </h1>
    </>
  );
};

export default Home;