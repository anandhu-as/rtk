import React from "react";
import { useDispatch } from "react-redux";
import { closedModel } from "../redux/features/model/modelSlice";
import { clearCart } from "../redux/features/Cart/cartSlice";

const Model = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items?? </h4>
        <div className="btn-container">
          <button type="button" className="btn" onClick={()=>dispatch(clearCart())}>
            confirm
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(closedModel())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Model;
