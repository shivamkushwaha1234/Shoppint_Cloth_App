import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
    
       state.push(action.payload);
    },

    // Remove item from cart
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //Add all  items to the cart slice
    addAllItems:(state,action)=>{
  
        return action.payload
      },
      increaseCartQuantity: (state, action) => {
        const id = action.payload;
  
        const cartItem = state.find((item) => item._id === id);
  
        if (cartItem) {
          cartItem.quantity += 1;
        }
      },
  
      decreaseCartQuantity: (state, action) => {
        const id = action.payload;
  
        const cartItem = state.find((item) => item._id === id);
  
        if (cartItem && cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        }
      },
    },
});

// Export actions
export const { addItem, removeItem,addAllItems,increaseCartQuantity,decreaseCartQuantity } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

