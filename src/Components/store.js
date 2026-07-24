import {configureStore} from '@reduxjs/toolkit'
import productSlice from "./slices/productSlice.js"
import cartSlice from "./slices/cartSlice.js"
export const store= configureStore({
    reducer:{
product:productSlice,
Cart:cartSlice
    }
})

// react-redux
// @reduxjs/toolkit
// 1. create store
// 2.to provide the store
// 3. Ceation of slices for our app amd providing those slice to the store
