import React, { useContext } from 'react'
import {  PorductContext } from './Context'
import'./App.css'
import { useState } from 'react';
const Cart = () => {
    const { cartItems }=useContext(PorductContext);
    const [quantities, setQuantities] = useState({}); // initialize an empty object

    if (cartItems.length===0){
        return(
            <div>"no cart itemap"</div>
        )
    }
    const handleAddToCart = (singleItem) => {
        if (quantities[singleItem.id]) { // check if the id of the product is already in the quantities object
          alert('This product is already in your cart'); // display a message or do something else
        } else {
          setQuantities({...quantities, [singleItem.id]: 1}); // add the product to the cart with a quantity of 1
        }
      };
  return (
    <div>
        {cartItems.map(singleItem =>(
            <div key={singleItem.id} className='cart'>
                <img src={singleItem.thumbnail} className='img' />
                <div>
                <h3>{singleItem.title}</h3>
                <button onClick={() => setQuantities({...quantities, [singleItem.id]: (quantities[singleItem.id] || 1) - 1})}>-</button>
                <button>{quantities[singleItem.id] || 1}</button>
                <button onClick={() => setQuantities({...quantities, [singleItem.id]: (quantities[singleItem.id] || 1) + 1})}>+</button>
                <p>{singleItem.description}</p>
                <p>stock:{parseInt(singleItem.stock)}</p>
                <p>${parseInt(singleItem.price)}</p>
                <p>Offer: % {parseInt(singleItem.discountPercentage)}</p>
                <p>Total:{(parseInt(singleItem.price) * (quantities[singleItem.id] || 1) * (100 - parseInt(singleItem.discountPercentage))) / 100}</p>
             

                </div>
                
            </div>
        ))}
    </div>
  )
}

export default Cart