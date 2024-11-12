import React from "react";
import CardCategry from "../components/Category/CardCategry";
import { IoMdArrowRoundBack } from "react-icons/io";
import NavMobile from "../components/Navbar/NavMobile"
const Category = () => {
  const handleBack = () => {
    window.history.back(); // ฟังก์ชันย้อนกลับไปหน้าก่อนหน้า
  };
  return (
    <>
      <div className="flex items-center justify-between w-full mt-14 px-6">
        <div className="cursor-pointer" onClick={handleBack}>
          <IoMdArrowRoundBack size={25} />
        </div>
        <div className=" flex-1 text-center text-2xl ">
          <h1>หมวดหมู่สินค้า</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10  gap-4">
        <CardCategry />
        <CardCategry />
        <CardCategry />
      </div>
      <NavMobile/>
    </>
  );
};

export default Category;
