// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   const [isDark, setisDark] = useState(false)

//   function darkMode() {
//     setisDark((isDark) => !isDark)
//   }

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = !isDark ? "App dark" : "App light"
//   const mode = !isDark ? "click for Light Mode" : "click for Dark Mode"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={darkMode}>{mode}</button>    {/* where it says mode they want "Dark Mode" */}
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;



//------------------------------------------------------------------------------------
//YOUR CODE BELOW <-----> MY CODE ABOVE ---- BOTH WORK --- NEITHER ARE PASSING TEST
//------------------------------------------------------------------------------------


import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [count, setCount] = useState(0);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light";

  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // console.log(count);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;