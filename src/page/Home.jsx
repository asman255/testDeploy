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
      <div className='flex items-center overflow-x-auto snap-x snap-mandatory -mx-4 space-x-7'>
      <CardCategry /> <CardCategry /> <CardCategry /> <CardCategry /> <CardCategry />
      <CardCategry /><CardCategry /><CardCategry /><CardCategry /><CardCategry /><CardCategry />
      </div>
      
     
    </div>
      
   
    <NavMobile />
    </>
    
  )
}

export default Home
