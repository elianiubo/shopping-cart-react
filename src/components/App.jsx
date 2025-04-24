import React, { useState } from 'react';
import '../styles.css';
import CardItem from './CardItem';
import ShoppingCart from './ShoppingCart';

import data from "../data.json";
function App() {
  const [itemCounts, setItemCounts] = useState(Array(data.length).fill(0));

  function handleIncrement(index) {
      const updated = [...itemCounts];
      updated[index]++;
      setItemCounts(updated);
  }
  
  function handleDecrement(index) {
      const updated = [...itemCounts];
      if (updated[index] > 0) updated[index]--;
      setItemCounts(updated);
  }

   

  return (
    <div className='container'>
      
      <CardItem 
        data={data}
        itemCounts={itemCounts}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <ShoppingCart 
        data={data}
        itemCounts={itemCounts}
      />

    </div>
    

    // Your Cart (Quantity)
    // Your added items will appear here 

    //  <div class="attribution">
    //   Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    //   Coded by <a href="#">Your Name Here</a>.
    // </div> 

  )
}

export default App
