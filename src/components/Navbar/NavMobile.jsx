import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const NavMobile = () => {
    const iconSize='2.3rem'
    const iConColor='ga-primary' 
    // const iConColor='#00A4B6' 
    return (
        <div>

            <div className='bg-white min-h-16 border-2 flex justify-around fixed bottom-0 w-full p-3 shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)]  lg:hidden'  >
                <div className='place-items-center text-ga-primary'><FaHome size={iconSize} />หน้าหลัก</div>
                <div className='place-items-center'><BiSolidCategory size={iconSize}  />ประเภท</div>
                <div className='place-items-center'><IoChatbubbleEllipses size={iconSize} /> ติดต่อเภสัช</div>
                <div className='place-items-center'><FaCartShopping size={iconSize} />รถเข็น</div>
                <div className='place-items-center'><FaUser size={iconSize} />บัญชี</div>
            </div>





        </div>
    )
}

export default NavMobile