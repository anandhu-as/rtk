import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Shop from "./Components/Shop";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./redux/features/Cart/cartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      <NavBar />
      <Shop />
    </main>
  );
};

export default App;
