import { useSelector,useDispatch } from "react-redux";
import {localhost} from "../constants"
import {
    increaseCartQuantity,
    decreaseCartQuantity,
  } from "./slices/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.Cart);
const dispatch=useDispatch()
  const handleIncrease = async (item) => {
    try {
      const response = await fetch(`${localhost}/cart/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "increment",
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to increase quantity");
      }
  
      dispatch(increaseCartQuantity(item._id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleDecrease = async (item) => {
    try {
      const response = await fetch(`${localhost}/cart/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "decrement",
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to decrease quantity");
      }
  
      dispatch(decreaseCartQuantity(item._id));
    } catch (err) {
      console.log(err);
    }
  };

  if (!cartItems.length) {
    return (
      <div className="cart-page">
        <h1 className="cart-heading">My Cart</h1>
        <h2 className="empty-cart">Your Cart is Empty</h2>
      </div>
    );
  }
  const totalBill = cartItems.reduce((total, item) => {
    const product = item.productDetails;
  
    const discountedPrice =
      product.price -
      (product.price * product.discountPercentage) / 100;
  
    return total + discountedPrice * item.quantity;
  }, 0);
  return (
    <div className="cart-page">
      <h1 className="cart-heading">
        Shopping Cart ({cartItems.length})
      </h1>

      <div className="cart-container">

        {cartItems.map((item) => {
          const product = item.productDetails;

          const discountedPrice = Math.round(
            product.price -
              (product.price * product.discountPercentage) / 100
          );

          return (
            <div className="cart-card" key={item._id}>

              <div className="cart-image">
                <img
                  src={product.imgURL}
                  alt={product.productName}
                />
              </div>

              <div className="cart-details">

                <h2>{product.productName}</h2>

                <p className="brand">{product.brand}</p>

                <p className="rating">
                  ⭐ {product.ratings}
                </p>

                <div className="price-section">

                  <span className="discount-price">
                    ₹{discountedPrice}
                  </span>

                  <span className="actual-price">
                    ₹{product.price}
                  </span>

                  <span className="discount">
                    {product.discountPercentage}% OFF
                  </span>

                </div>

                <p className="size">
                  <strong>Size :</strong> {item.selectedSize}
                </p>

              </div>

              <div className="quantity-section">

                <button
                  className="quantity-btn"
                  onClick={() => handleDecrease(item)}
                >
                  −
                </button>

                <span className="quantity">
                  {item.quantity}
                </span>

                <button
                  className="quantity-btn"
                  onClick={() => handleIncrease(item)}
                >
                  +
                </button>

              </div>

            </div>
          );
        })}

      </div>
      <div className="bill-section">

  <div className="bill-card">

    <h2>Order Summary</h2>

    <div className="bill-row">
      <span>Total Items</span>
      <span>{cartItems.length}</span>
    </div>

    <div className="bill-row">
      <span>Total Bill</span>
      <span className="bill-amount">
        ₹{Math.round(totalBill)}
      </span>
    </div>

    <button className="checkout-btn">
      Proceed to Checkout
    </button>

  </div>

</div>
    </div>
  );
};

export default Cart;