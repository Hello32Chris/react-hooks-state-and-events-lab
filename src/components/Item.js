// import React, { useState } from "react";

// function Item({ name, category }) {

//   const [isinCart, setinCart] = useState(false)
  
//   function addToCart() {
//     setinCart(!isinCart)
//   }
  
//   return (
//     <li className={isinCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button onClick={addToCart} className={!isinCart ? "add" : "remove"}>{isinCart ? "Remove From Cart" : "Add to Cart"}</button>
//     </li>
//   );
// }

// export default Item;


//------------------------------------------------------------------------------------
//YOUR CODE BELOW <-----> MY CODE ABOVE ---- BOTH WORK --- NEITHER ARE PASSING TEST
//------------------------------------------------------------------------------------


import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart(!isInCart);
  }
  return (
    <li className={!isInCart ? "" : `in-cart`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;