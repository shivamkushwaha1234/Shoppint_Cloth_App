import {Link} from "react-router-dom"
const ProductCard = ({ product }) => {
    const {
      productName,
      ratings,
      imgURL,
      price,
      brand,
      discountPercentage,
  sizes
    } = product;
  
    return (
      <div className="product-card">
        <Link className="product-nav-img" to={`/products/product/${productName}`}>
        <img src={imgURL} alt={productName} /></Link>
        
  
        <h4>{productName}</h4>
  <div className="brand-ratings-strip-card">
        <p>{brand}</p>
  
        <p>⭐ {ratings}</p>
        </div>
        <div className="price-discountedPrice-strip">
        <p className="price-product">₹{price}</p>
        <p>₹{price-(price*discountPercentage/100)}/-</p>
        <div>
        <select>
         {sizes.map(s=>(
          <option key={s}>{s}</option>
       ))}
       </select>
        </div>
        </div>
  
        <button className="second-btn">
         Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;