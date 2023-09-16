import React, { useState } from "react";

function Item({ name, category }) {

  const [isinCart, setinCart] = useState(false)
  
  function addToCart() {
    setinCart(!isinCart)
  }
  
  return (
    <li className={isinCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={!isinCart ? "add" : "remove"}>{isinCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
