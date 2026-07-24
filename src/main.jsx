import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Products from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'
import Profile from './Components/Profile.jsx'
import Home from './Components/Home.jsx'
import ErrorElement from './Components/ErrorElement'
import ProductPage from "./Components/ProductPage"
import { Provider } from 'react-redux'
import {store} from "./Components/store.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {element:<Home />,
      index: true}
      ,{
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/profile",
        element: <Profile />
      },{
        path:"/products/:categoryName",
        element:<Products/>
      },{
        path:"/products/product/:productName",
        element:<ProductPage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
