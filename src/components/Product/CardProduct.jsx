import React from 'react';
import { AiFillStar } from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 mx-auto flex flex-col flex-shrink-0 snap-start">
      <img
        src="https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg"
        alt="TYLENOL (ไทลินอล)"
        className="w-full h-48 object-contain"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">TYLENOL (ไทลินอล)</h2>
        <p className="text-sm text-gray-500 mt-1">Acetaminophen Rapid Release Gels 100.0 ea</p>
        <p className="text-xs text-blue-500 mt-2">#อาการปวดหัว, #ลดไข้</p>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold text-xl">฿499</span>
          <span className="text-sm text-gray-500 ml-1">บาท/กล่อง</span>
        </div>
        <div className="flex items-center mt-2">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <span className="ml-2 text-gray-600 text-sm">4.5</span>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
