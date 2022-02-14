import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>ORDER CONFIRMED</div>
      <div>
        <button onClick={() => navigate("/")}>Go back To Home Page</button>
      </div>
    </>
  );
};

export default OrderSummary;
