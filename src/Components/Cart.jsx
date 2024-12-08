import React, { useEffect, useState } from "react";
import "./Cart.css";
const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>
       
     acc+parseInt(curr.amt),0));
  }  ,[cart])

  return (
    <>
      <h1>Cart Products </h1>
      <div className="CartContainer">
             {cart.map((ProductList)=>(
               <div className="CartProduct" key={ProductList.id}>
               <div className="img">
                 <img src={ProductList.pic} alt="" />
               </div>
     
               <div className="CartProductDetails">
                 <h3>{ProductList.name}</h3>
                 <p>{ProductList.amt}</p>
               </div>
             </div>
             ))}
       
      </div>

      <h3>Total Amount: {total}</h3>
    </>
  );
};

export default Cart;
