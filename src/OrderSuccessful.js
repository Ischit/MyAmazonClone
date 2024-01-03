import React from "react";
import "./OrderSuccessful.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function OrderSuccessful() {
  return (
    <>
      <Header />
      <div className="orderSuccessful">
        <h1>Order Successful</h1>
        <Link to={"/orders"}>My Orders</Link>
      </div>
    </>
  );
}

export default OrderSuccessful;
