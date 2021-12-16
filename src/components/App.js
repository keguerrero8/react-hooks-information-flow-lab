import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // function Header ({ onDarkModeClick }) {
  //   return (
  //   <header>
  //     <h2>Shopster</h2>
  //     <button onClick={onDarkModeClick}>
  //       {isDarkMode ? "Dark" : "Light"} Mode
  //     </button>
  //   </header>
  //   )
  // }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
