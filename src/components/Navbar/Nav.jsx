import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Nav = ({ logo, back, search, title, cart }) => {
    const iconSize = '2.3rem'
    return (

        <nav className="nav flex justify-between items-center h-[60px] p-3 space-x-6 bg-white">
            {back && <button className="nav-back">Back</button>}
            {logo && <div className="nav-logo"><img src="/src/assets/img/logo-genaid.png" alt="" className='max-h-10' /></div>}
            <div className="flex-grow flex justify-center">

                {title && <div className="nav-title">{title}</div>}
                {search && <input className="nav-search w-full rounded-full p-1 border-solid border-[3px] border-ga-primary" type="text" placeholder="Search" />}
            </div>
            {cart && <button className="nav-cart"><FaCartShopping size={24} /></button>}
        </nav>
        // <nav className="nav flex justify-center h-[60px] items-center space-x-6 p-3">

        //     {logo && <div className="nav-logo "><img src="/src/assets/img/logo-genaid.png" alt="" className='max-h-10' /></div>}
        //     {back && <button className="nav-back">Back</button>}
        //     {search && <input className="nav-search w-[70%] rounded-full p-1 border-solid border-[3px] border-ga-primary" type="text" placeholder="Search" />}
        //     {title && <div className="nav-title ">{title}</div>}
        //     {cart && <button className="nav-cart"> <FaCartShopping size={iconSize} /></button>}
        // </nav>

    )
}

export default Nav


