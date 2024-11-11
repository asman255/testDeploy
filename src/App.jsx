import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaHome } from "react-icons/fa";
import NavMobile from './components/Navbar/NavMobile';
import Nav from './components/Navbar/Nav';
import CardDetail from './components/Product/CardDetail';
import CardDesc from './components/Product/CardDesc';
import Category from './page/Category'
import CardCart from './components/Product/CardCart';

function App() {


  return (
    <>
      <div className='bg-black'>
        <Nav back title="GenAID" cart />

        {/* <Category /> */}

        <CardCart />

        {/* <CardDetail />
      <CardDesc /> */}

        <NavMobile checkout />


      </div>
    </>
  )
}

export default App
