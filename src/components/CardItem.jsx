import React, { useState, useEffect } from 'react';
import '../styles.css';

import Button from './Button';
import minusIcon from '/assets/images/icon-decrement-quantity.svg';
import plusIcon from '/assets/images/icon-increment-quantity.svg';
import CartIcon from '/assets/images/icon-add-to-cart.svg'

function CardItem({ data, itemCounts, handleIncrement, handleDecrement }) {

const [activeIndex, setActiveIndex] = useState(null);//adds border to element in cart
useEffect(() => {//makes element delete border when count 0 or element gone from shoppinf cart
    if (activeIndex !== null && itemCounts[activeIndex] === 0) {
        setActiveIndex(null); // quitar borde
    }
}, [itemCounts, activeIndex]);


        return (

            <div className='cardItem'>
                <h1>Desserts</h1>
                <ul>

                    {data.map((item, index) => (
                        <li className='list' key={index}>
                            <div className='box-flex'>
                                <img className={index === activeIndex ? 'active-border' : ''}
                                src={item.image.desktop} alt="Image" /><br />
                                <Button count={itemCounts[index]}
                                    onIncrement={() => handleIncrement(index)}
                                    onDecrement={() => {handleDecrement(index)}}
                                    buttonText="Add to cart"
                                    cartIcon={CartIcon}
                                    plusIcon={plusIcon}
                                    minusIcon={minusIcon}
                                    setActiveIndex={setActiveIndex}
                                    index={index}
                                   
                                 />

                            </div>
                            <p>{item.category}</p>
                            <h2>{item.name}</h2>
                            <span className='span-price'>{item.price.toFixed(2)} EUR</span>
                        </li>

                    ))}
                </ul>

            </div>
        )

    }
    export default CardItem;