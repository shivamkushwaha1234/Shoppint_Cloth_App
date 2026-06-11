import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from "./Components/Nav.jsx"
import {Outlet} from "react-router-dom"
function App() {
  

  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
