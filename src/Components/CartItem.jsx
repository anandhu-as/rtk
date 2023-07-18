import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../redux/features/Cart/cartSlice";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={()=>dispatch(increment(id))}>  
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={()=>dispatch(decrement(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
