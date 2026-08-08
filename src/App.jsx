import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from "./Components/Nav.jsx"
import {Outlet} from "react-router-dom"
import {localhost} from "./constants"
import {useDispatch} from "react-redux"
import {addAllItems} from "./Components/slices/cartSlice"
import {addProductData} from "./Components/slices/productSlice"
function App() {
  const dispatch=useDispatch()
  const fetchCartData=async()=>{
const result=await fetch(`${localhost}/cart`)
const data=await result.json()
console.log(data)
const {cartData}=data
dispatch(addAllItems(cartData))
  }
  const fetchProductData=async()=>{
    
try{
  const result=await fetch(`${localhost}/products`)
  const data=await result.json()
  console.log(data)
  dispatch(addProductData(data))
}catch(err){
  console.log(err)
}
  }
useEffect(()=>{
fetchCartData()
fetchProductData()
},[])

  return (
    <>
   <Nav/>
   <Outlet/>
    </>
  )
}

export default App
