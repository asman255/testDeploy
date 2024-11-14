import React from 'react'
import Nav from '../components/Navbar/Nav'
import NavMobile from '../components/Navbar/NavMobile'
import CardCategry from '../components/Category/CardCategry'
import CardProduct from '../components/Product/CardProduct'

const Home = () => {
  return (
    <>
    <Nav logo search/>
    <div className='my-16 p-3 lg:my-40'>
      <p>หมวดหมู่</p>
    </div>
      <CardCategry />
    <div className='my-52 p-3 lg:my-40 flex justify-between'>
      <p>สินค้าแนะนำ</p>
      <a href='#'>เพิ่มเติม</a> 
    </div>
      <CardProduct />
    <NavMobile />
    </>
    
  )
}

export default Home
