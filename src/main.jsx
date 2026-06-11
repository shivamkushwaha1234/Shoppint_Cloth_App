import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from "./Components/Cart.jsx"
import Home from  "./Components/Home.jsx"
import Products from "./Components/Products.jsx"
import Profile from "./Components/Profile.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const router= createBrowserRouter([{
path:"/",
element:<App/>,
children:[
  {element:<Home/>,index:true}
,{
  path:"/products",
  element:<Products/>
},{
  path:"/cart",
  element:<Cart/>
},{
  path:"/profile",
  element:<Profile/>
}]
}]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
