import React from 'react'
import Navbar from '../components/Navbar/Nav'
import NavMobile from '../components/Navbar/NavMobile'
import CardDetail from '../components/Product/CardDetail'
import CardDesc from '../components/Product/CardDesc'
import {CardProduct} from '../components/Product/CardProduct'
const ProductDetail = () => {
    return (
        <>

            <Navbar back cart />
            <div className='mt-10 lg:mt-40'>
                <CardDetail />
                <CardDesc />
                <NavMobile product />
                <div>
                    <span>สินค้าแนะนำ</span>
                    <CardProduct />
                </div>
            </div>


        </>

    )
}

export default ProductDetail