import React from 'react';
import { AiFillStar } from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 mx-auto flex flex-col flex-shrink-0 snap-start">
      <img
        src="https://magasiner.familiprix.com/medias/000000000000664094-754000000014100000000062505594-fr-ecomm-zoom?context=bWFzdGVyfGltYWdlc3wyNDY0OTF8aW1hZ2UvcG5nfGFHVmpMMmczWlM4NU1EZ3lNRFUwTlRReE16UXlMekF3TURBd01EQXdNREF3TURZMk5EQTVORjgzTlRRd01EQXdNREF3TVRReE1EQXdNREF3TURBd05qSTFNRFUxT1RSZlpuSmZaV052YlcxZmVtOXZiUXw1OWY4NjhhMmNkMjRmNTg5MDk2M2NiMTExODY5MzczZjIzZTFkNWY1Mjc2ZDQzYmRiYTE3OTJmM2UzOTQ4OTYy"
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
