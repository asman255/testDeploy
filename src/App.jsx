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
      <Nav back title={"หมวดหมู่ทั้งหมด"} />
      <div>
        <Category />


      <div className="p-8">
        <h1 className="text-3xl font-thin mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Thin)</h1>
        <h1 className="text-3xl font-extralight mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Extra Light)</h1>
        <h1 className="text-3xl font-light mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Light)</h1>
        <h1 className="text-3xl font-normal mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Normal)</h1>
        <h1 className="text-3xl font-medium mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Medium)</h1>
        <h1 className="text-3xl font-semibold mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Semi Bold)</h1>
        <h1 className="text-3xl font-bold mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Bold)</h1>
        <h1 className="text-3xl font-extrabold mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Extra Bold)</h1>
        <h1 className="text-3xl font-black mb-4">All Category หมวดหมู่ทั้งหมด 0123456789 (Black)</h1>
      </div>
      <NavMobile checkout/>
    </>
  )
}

export default App
