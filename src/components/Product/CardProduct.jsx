import React from 'react';
import { AiFillStar } from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-full max-w-[200px] flex-shrink-0 snap-start mx-2">
      <img
        src="https://magasiner.familiprix.com/medias/000000000000664094-754000000014100000000062505594-fr-ecomm-zoom?context=bWFzdGVyfGltYWdlc3wyNDY0OTF8aW1hZ2UvcG5nfGFHVmpMMmczWlM4NU1EZ3lNRFUwTlRReE16UXlMekF3TURBd01EQXdNREF3TURZMk5EQTVORjgzTlRRd01EQXdNREF3TVRReE1EQXdNREF3TURBd05qSTFNRFUxT1RSZlpuSmZaV052YlcxZmVtOXZiUXw1OWY4NjhhMmNkMjRmNTg5MDk2M2NiMTExODY5MzczZjIzZTFkNWY1Mjc2ZDQzYmRiYTE3OTJmM2UzOTQ4OTYy"
        alt="TYLENOL (ไทลินอล)"
        className="w-full h-40 object-contain mb-0.5"  // Reduced height to h-32
      />
      <div className="p-4  flex flex-col flex-grow">
        <h2 className="text-base font-semibold text-gray-800">TYLENOL (ไทลินอล)</h2>
        <p className="text-xs text-gray-500 mt-1 break-words"> {/* Added break-words for wrapping */}
          Acetaminophen Rapid Release Gels 100.0 ea
        </p>
        <p className="text-xs text-blue-500 mt-2 break-words"> {/* Added break-words for wrapping */}
          #อาการปวดหัว, #ลดไข้
        </p>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold text-lg">฿499</span>
          <span className="text-xs text-gray-500 ml-1">บาท/กล่อง</span>
        </div>
        <div className="flex items-center mt-2">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <span className="ml-2 text-gray-600 text-xs">4.5</span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
