import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaHome } from "react-icons/fa";
import NavMobile from './components/Navbar/NavMobile';
import Nav from './components/Navbar/Nav';
import CardDetail from './components/Product/CardDetail';
import CardDesc from './components/Product/CardDesc';
import Category from './page/Category'

function App() {


  return (
    <>
      <div>
        <Category />
      </div>

    </>
  )
}

export default App
