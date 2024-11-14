import React from "react";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardOrder from "../components/OrderHistory/CardOrder";
import DropdownStatus from "../components/OrderHistory/DropdownStatus";

const OrderHistory = () => {
  return (
    <>
      <div>
        <Nav back title="ประวัติการสั่งซื้อ" />
        <div className="my-16 lg:my-40 lg:w-[80%] lg:place-self-center">
          <DropdownStatus />
          <CardOrder />
        </div>
        <NavMobile />
      </div>
    </>
  );
};

export default OrderHistory;
