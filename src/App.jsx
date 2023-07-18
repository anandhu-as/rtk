import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Shop from "./Components/Shop";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "./redux/features/Cart/cartSlice";
import Model from "./Components/Model";

const App = () => {
  const {isOpen}=useSelector((state)=>state.model)
  const { cartItems ,isLoading} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  if(isLoading){
    return <div className="loading">
      <h1>Loading....</h1>
    </div>
  }
  return (
    <main>
      {isOpen && <Model/>}
      <NavBar />
      <Shop />
    </main>
  );
};

export default App;
