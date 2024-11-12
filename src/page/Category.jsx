import React from 'react'
import CardCategry from '../components/Category/CardCategry'
import Nav from '../components/Navbar/Nav'

const Category = () => {
  return (
    <>
    <div>
      <Nav/>
    </div>

    <div className='text-center mt-16 text-2xl '>
      <h1>หมวดหมู่สินค้า</h1>
    </div>
   
    <div className="flex flex-wrap justify-center mt-8">
    <CardCategry/>
    </div>
   
    
    </>
  )
}

export default Category
