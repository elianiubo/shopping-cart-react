import React, { useState } from 'react';
import '../styles.css';

function Button({ count, onIncrement, onDecrement, setActiveIndex, buttonText,index, cartIcon, plusIcon, minusIcon }) {


    if (count === 0) {
        return (
            <button onClick={() => {
                setActiveIndex(index); // activar borde
                onIncrement();         // aumentar count
            }} className="btn">
                <img src={cartIcon} alt="Cart Icon" className="icon" />
                <span className='span-button'>{buttonText}</span>
            </button>
        );
    } else {
        return (
            <div className="counter">
                <button onClick={onDecrement} className="counter-btn">
                    <img src={minusIcon} alt="Minus Icon" className="icon" />
                </button>
                <span className="counter-value">{count}</span>
                <button onClick={onIncrement} className="counter-btn">
                    <img src={plusIcon} alt="Plus Icon" className="icon" />
                </button>
            </div>
        );
    }
}



export default Button;