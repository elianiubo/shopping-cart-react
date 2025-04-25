import React, { useState } from 'react';
import '../styles.css';
import RemoveIcon from '/assets/images/icon-remove-item.svg'
import EmptyCart from '/assets/images/illustration-empty-cart.svg'

function ShoppingCart({ data, itemCounts }) {
    const selectedItems = data.filter((item, index) => itemCounts[index] > 0);

    function calculateTotalPrice() {
        let total = 0;
        selectedItems.forEach((item) => {
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
                    <img src={EmptyCart} alt="Empty Cart" />
                    <p className='cart-p'>You added items will appear here</p>
                </div>
            ) : (
                <div className='cart-items'>
                    {selectedItems.map((item) => {
                        const originalIndex = data.findIndex(d => d.name === item.name);
                        const quantity = itemCounts[originalIndex];
                        const itemTotal = (item.price * quantity).toFixed(2);
                        return (
                            <div key={item.name} className='cart-item'>
                                <h3>{item.name}</h3>
                                <img className='delete-icon' src={RemoveIcon} alt="Remove Item" />
                                <div className='elements-cart'>
                                    <p>{quantity}x</p>
                                    <p style={{ color: "hsl(7, 20%, 60%)" }}>@{item.price.toFixed(2)} EUR</p>
                                    <p>{itemTotal} EUR</p>
                                </div>
                            </div>
                        );
                    })}
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
