import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

// const items = [
//   { id: 1, name: "Yogurt", category: "Dairy" },
//   { id: 2, name: "Pomegranate", category: "Produce" },
//   { id: 3, name: "Lettuce", category: "Produce" },
//   { id: 4, name: "String Cheese", category: "Dairy" },
//   { id: 5, name: "Cookies", category: "Dessert" },
// ];
function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => { //create the filtered list of items based on what category is selected
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // function Filter ({onCategoryChange}) {
  //   return (
  //     <select name="filter" onChange={onCategoryChange}>
  //       <option value="All">Filter by category</option>
  //       <option value="Produce">Produce</option>
  //       <option value="Dairy">Dairy</option>
  //       <option value="Dessert">Dessert</option>
  //     </select>
  //   )
  // }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={handleCategoryChange}/>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} /> //create Item component for each filter item
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
