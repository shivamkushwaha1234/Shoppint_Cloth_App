import {Link} from "react-router-dom"
import {useState} from "react"
import {localhost} from  "../constants"
import {useDispatch} from "react-redux"
import {addItem} from "./slices/cartSlice.js"
const ProductCard = ({ product }) => {
  const [size,setSize]=useState()
  const [errorMessage,setErrorMessage]=useState(false)
  const dispatch=useDispatch()
    const {
      productName,
      ratings,
      imgURL,
      price,
      brand,
      discountPercentage,
  sizes,_id
    } = product;
  
  const handleSubmit=async()=>{ // On Click of Add to cart
    if(!size|| size === ""){
setErrorMessage(true)
setTimeout(()=>{
setErrorMessage(false)
},2000)
return
    }
const data={
  quantity:1,
  productDetails:_id,
  selectedSize:size
}
try{
const response=await fetch(`${localhost}/cart`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(data) // Attach data
})
if(!response.ok){
  throw new Error("Failed to update the cart")
}
const result=await response.json()
if(result){
  const {cartItem}=result
  dispatch(addItem(cartItem))
}
console.log("success",result)
}catch(err){
console.log(err)
}
  }

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
        <select onChange={e=>setSize(e.target.value)}>
          <option value="">Select Size</option>
         {sizes.map(s=>(
          <option  key={s} value={s}>{s}</option>
       ))}
       </select>
        </div>
        </div>
  
        <button className="second-btn" onClick={handleSubmit}>
         Add to Cart
        </button>
        {errorMessage && (
  <span className="size-error-message">
    Please Select any size to continue
  </span>
)}
      </div>
    );
  };
  
  export default ProductCard;