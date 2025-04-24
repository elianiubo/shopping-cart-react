import React, { useState } from 'react';
import '../styles.css';

import Button from './Button';
import minusIcon from '/assets/images/icon-decrement-quantity.svg';
import plusIcon from '/assets/images/icon-increment-quantity.svg';
import CartIcon from '/assets/images/icon-add-to-cart.svg'
function CardItem({data, itemCounts, handleIncrement, handleDecrement}) {
    

    return (

        <div className='cardItem'>
            <h1>Desserts</h1>
            <ul>

                {data.map((item, index) => (
                    <li className='list' key={index}>
                        <div className='box-flex'>
                            <img src={item.image.desktop} alt="Image" /><br />
                            <Button count={itemCounts[index]}
                                onIncrement={() => handleIncrement(index)}
                                onDecrement={() => handleDecrement(index)}
                                buttonText="Add to cart"
                                cartIcon={CartIcon}
                                plusIcon={plusIcon}
                                minusIcon={minusIcon} />
                        </div>
                        <p>{item.category}</p>
                        <h2>{item.name}</h2>
                        {/* <SvgLogo src={logoAddItem} /> */}
                        <span>{item.price.toFixed(2)} EUR</span>
                    </li>
                ))}
            </ul>

        </div>
    )

}
export default CardItem;