import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDark, setisDark] = useState(false)

  function darkMode() {
    setisDark((isDark) => !isDark)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = !isDark ? "App dark" : "App light"
  const mode = !isDark ? "click for Light Mode" : "click for Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkMode}>{mode}</button>    {/* where it says mode they want "Dark Mode" */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
