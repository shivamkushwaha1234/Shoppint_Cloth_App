import { useParams,useNavigate } from "react-router-dom";
import { products } from "../data.js";
import { GoArrowLeft } from "react-icons/go";

const ProductPage = () => {
  const { productName } = useParams();
const navigate=useNavigate()
  const currentProduct = products.find(
    (product) => product.productName === productName
  );

  if (!currentProduct) {
    return <h2 className="product-not-found">Product Not Found</h2>;
  }
  const discountedPrice = Math.round(
    currentProduct.price -
      (currentProduct.price * currentProduct.discountPercentage) / 100
  );
  const handleBackToThePage=()=>{
navigate(-1)
  }
  return (
    <section className="product-page">
      <div className="back-arrow-product">
      <span onClick={handleBackToThePage}><GoArrowLeft /></span>
      </div>
      <div className="product-container">

        {/* Left Section */}
        <div className="product-image-section">
          <img
            src={currentProduct.imgURL}
            alt={currentProduct.productName}
            className="product-image"
          />
        </div>

        {/* Right Section */}
        <div className="product-details-section">

          <span className="product-category">
            {currentProduct.category}
          </span>

          <h1 className="product-title">
            {currentProduct.productName}
          </h1>

          <p className="product-tagline">
            {currentProduct.tagline}
          </p>

          <div className="product-rating">
            ⭐ {currentProduct.ratings} / 5
          </div>

          <div className="product-price-box">
  <span className="original-price">
    ₹{currentProduct.price}
  </span>

  <span className="discounted-price">
    ₹{discountedPrice}
  </span>

  {currentProduct.discountPercentage && (
    <span className="product-discount">
      {currentProduct.discountPercentage}% OFF
    </span>
  )}
</div>

          <p className="product-description">
            {currentProduct.description}
          </p>

          {/* Size Dropdown */}
          <div className="size-container">
            <label htmlFor="sizes">Select Size</label>

            <select id="sizes" className="size-select">
              {currentProduct.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Features */}
          <div className="product-section">
            <h3>Features</h3>

            <ul>
              {currentProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="product-section">
            <h3>Product Details</h3>

            <ul>
              {currentProduct.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="exchange-policy">
            <strong>Exchange Policy:</strong>{" "}
            {currentProduct.exchangePolicy}
          </div>

          <button className="add-to-cart-btn">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;