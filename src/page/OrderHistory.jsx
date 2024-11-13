import React from "react";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import { FaChevronRight } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";

const OrderHistory = () => {
  return (
    <>
      <div>
        <Nav back title="ประวัติการสั่งซื้อ" />
        <div className="my-16 lg:my-40">
          <div
            id="orderCard"
            className="flex h-28 justify-between items-center p-6  bg-white m-3"
          >
            <div className="flex flex-col items-center">
              <FcMoneyTransfer size={30} /> รอชำระ
            </div>
            <div>คำสั่งซื้อ : 00001</div>
            <div>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <NavMobile />
      </div>
    </>
  );
};

export default OrderHistory;
