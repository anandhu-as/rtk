import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
const NavBar = () => {
    const {amount}=useSelector((state)=>state.cart)
  return (
    <div className="nav-center">
      <h3>shopping cart</h3>
      <div className="nav-container">
        <CartIcon/>
        <div className="amount-container">
            <p className="total-amount">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
