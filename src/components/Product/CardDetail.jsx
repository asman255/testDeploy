import React from 'react'
import QuantityInput from './QuantityInput'
import { FaStar } from "react-icons/fa";
const CardDetail = () => {
    return (
        <div>
            <div id='#product' className='flex flex-col w-full flex-1 lg:mx-10 p-3 bg-white lg:flex-row '>
                <div className='justify-items-center'>
                    <div id="productImg"><img src="https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg" alt="" /></div>
                </div>
                {/* <div id="productName" className='my-3'><span className='text-2xl'>ยาธาตุน้ำขาวตรากระต่ายบิน</span></div> */}

                <div className='flex flex-col  lg:flex-col flex-1'>
                    <div>
                        <div id="productName" className='my-3'><span className='text-2xl'>ยาธาตุน้ำขาวตรากระต่ายบิน</span></div>
                        <div id="productId">รหัสสินค้า: A0001</div>
                        <div id="productRating" className='flex'><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></div>
                    </div>
                    <div className=' justify-items-end space-y-3 justify-center lg:flex flex-col-reverse lg:my-10 '>
                        <div id="productAmount" className='my-4'><QuantityInput /></div>
                        <div id="productPrice"><span className='text-ga-secondary text-3xl font-bold'>35.-</span></div>
                    </div>
                    <div className='hidden lg:flex mt-3 space-x-4'>
                        <button className='bg-ga-primary text-white rounded-md p-2 w-40 text-xl'>เพิ่มลงรถเข็น</button>
                        <button className='bg-ga-secondary text-white rounded-md p-2 w-40 text-xl'>ซื้อเลย</button>
                    </div>

                </div>









            </div>




        </div>
    )
}

export default CardDetail