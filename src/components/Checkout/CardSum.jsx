import React from 'react'


    
function CardSum() {
  return (
    <div className='flex justify-between flex-col w-72 bg-white p-3 rounded-xl  mx-auto' >
        <div className='flex justify-between'>
        <span>ยอดรวมคำสั่งซื้อ</span>
        <span>499</span>
        </div>
        <div className='flex justify-between'>
        <span>ส่วนลด</span>
        <span>0</span>   
        </div>
        <div className='flex justify-between'>
        <span>ค่าจัดส่ง</span>
        <span>10</span>   
        </div>
        <div className='flex justify-between'>
        <span>VAT</span>
        <span>0</span>    
        </div>
        <div className='flex justify-between'>
        <span>รวม</span>
        <span>509</span>
        </div>
        
    </div>
  )
}

export default CardSum