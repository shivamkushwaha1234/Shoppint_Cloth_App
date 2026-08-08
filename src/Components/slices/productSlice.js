import {createSlice} from "@reduxjs/toolkit"
export const productSlice=createSlice({
    name:"Products",
    initialState:[],
  reducers:{
addProductData:(state,action)=>{
  return action.payload
},
  }
})

export const {addProductData}= productSlice.actions
export default productSlice.reducer