import React from 'react'
import QuantityInput from './QuantityInput'
const CardDetail = () => {
    return (
        <div>
            <div id='#product' className='flex-col w-96  border-b-amber-700 border-solid border-2 p-3 bg-white'>
                <div className='justify-items-center'>
                    <div id="productImg"><img src="https://placehold.co/300" alt="" /></div>
                </div>
                <div id="productName"><span className='text-2xl'>ยาธาตุน้ำขาวตรากระต่ายบิน</span></div>

                <div className='flex justify-between'>
                    <div>
                        <div id="productId">รหัสสินค้า: A0001</div>
                        <div id="productRating">rate</div>
                    </div>
                    <div>
                        <div id="productAmount"><QuantityInput /></div>
                        <div id="productPrice">price</div>
                    </div>

                </div>









            </div>




        </div>
    )
}

export default CardDetail