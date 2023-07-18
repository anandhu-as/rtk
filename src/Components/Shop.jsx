import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Shop = () => {
  const { total, amount, cartItems } = useSelector((state) => state.cart);

  return (<section className="cart">
    <header>
        <h2>your bag</h2>
    </header>
    <div>{cartItems.map((item)=>{
        return <CartItem key={item.id} {...item}/>
    })}</div>
    <footer className="">
        <hr />
        <div className="cart-total">
        <h4>total <span>${total}</span></h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
    </footer>
  </section>
)}

export default Shop;
