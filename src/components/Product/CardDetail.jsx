import React from 'react'
import QuantityInput from './QuantityInput'
import { FaStar } from "react-icons/fa";
const CardDetail = () => {
    return (
        <div>
            <div id='#product' className='flex-col w-full  p-3 bg-white'>
                <div className='justify-items-center'>
                    <div id="productImg"><img src="https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg" alt="" /></div>
                </div>
                <div id="productName" className='my-3'><span className='text-2xl'>ยาธาตุน้ำขาวตรากระต่ายบิน</span></div>

                <div className='flex justify-between'>
                    <div>
                        <div id="productId">รหัสสินค้า: A0001</div>
                        <div id="productRating" className='flex'><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></div>
                    </div>
                    <div className='justify-items-center space-y-3'>
                        <div id="productAmount"><QuantityInput /></div>
                        <div id="productPrice"><span className='text-ga-secondary text-3xl font-bold'>35.-</span></div>
                    </div>

                </div>









            </div>




        </div>
    )
}

export default CardDetail