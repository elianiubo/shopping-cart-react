import React, { useState } from 'react';
import '../styles.css';

function ShoppingCart({ data, itemCounts }) {
    const selectedItems = data.filter((item, index) => itemCounts[index] > 0);
    function calculateTotalPrice() {
        let total = 0;
        selectedItems.forEach((item, idx) => {
          // Get original index of this item in `data`
          const originalIndex = data.findIndex(d => d.name === item.name);
          total += item.price * itemCounts[originalIndex];
        });
        return total.toFixed(2);
      }

    return (
        <div className=' shopping'>
            <h2 className='cart-title' >Your Cart ({selectedItems.length})</h2>
            {selectedItems.length === 0 ? (
                <div className='empty-cart'>
                    <img src="public\assets\images\illustration-empty-cart.svg" alt="Empty Cart" />
                    <p className='cart-p'>You added items will appear here</p>
                </div>
            ) : (
                <div className='cart-items'>
                    {selectedItems.map((item, index) => (
                        <div key={index} className='cart-item'>
                            <h3>{item.name}</h3>
                            <img className='delete-icon' src="public\assets\images\icon-remove-item.svg" alt="Remove Item" />
                            <div className='elements-cart'>
                                <p>{itemCounts[index]}x </p>
                                <p style={{ color: " hsl(7, 20%, 60%)" }}>@{item.price.toFixed(2)} EUR</p>
                                <p>{item.price * itemCounts[data.findIndex(d => d.name === item.name)].toFixed(2)} EUR</p>

                            </div>
                            
                        </div>
                        
                    ))}
                    <div className='cart-total'>
                        <p>Order Total: </p>
                        <p className='total-number'>{calculateTotalPrice()} EUR</p>
                    </div>
                </div>
            )}




        </div>
    )

}
export default ShoppingCart