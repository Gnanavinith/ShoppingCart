import React from "react";
import "./Product.css";
const UniqueProduct = ({ ProductList, cart, setCart }) => {
  const name =
    ProductList.name.length > 15 ? ProductList.name.substring(0, 15) + "..": ProductList.name;

  const AddCart = () => {
    setCart([...cart, ProductList]);
  };

  const RemoveCart = () => {
    setCart(cart.filter((c) => c.id !== ProductList.id));
  };

  return (
    <div className="Product">
      <img src={ProductList.pic} alt="" />
      <div className="Details">
        <h2>{name}</h2>

        <p>Price Rs:{ProductList.amt}</p>

        {cart.some((c) => c.id === ProductList.id) ? ( 
          <button className="RemoveCart" onClick={RemoveCart}>
            Remove From Cart
          </button>
        ) : (
          <button onClick={AddCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default UniqueProduct;
