import React, { useContext, useState } from 'react'
import {  PorductContext } from './Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const {data, cartItems,setCartItems}= useContext(PorductContext);
    const [count,setCount]=useState(0);

    const addToCartHandeler= (item)=>{
        if (cartItems.some(cartItem => cartItem.id === item.id)) { 
          alert('This product is already in your cart'); 
        } else {
          setCartItems([...cartItems,item]); 
          setCount((prevCount) => prevCount + 1); 
        }
      }
   
   
  return (
    <>
    <div className='grid'>
    <div className='row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            {data[0].products.map((prod) => ( // Access the "products" array within the data object
               <Card style={{ width: '18rem' }} key={prod.id} className='box'>
               <Card.Img variant="top" src={prod.thumbnail} />
               <Card.Body>
                 <Card.Title><h3>{prod.title}</h3></Card.Title>
                 <Card.Text>
                   {prod.description}
                 </Card.Text>
                 <Card.Text>
                 $ {prod.price} 
                 </Card.Text>
                 <Card.Text>
                 Offer: {prod.discountPercentage}% 
                 </Card.Text>
                 <Card.Text>
                 Stock:{prod.stock} 
                 </Card.Text>
                 <Button  variant="success" onClick={()=>{addToCartHandeler(prod)}} >Add to Cart</Button>
                 <Button variant="danger">Remove</Button>
               </Card.Body>
             </Card>
            ))}
        </div>    
    </div>
        </>
  )
}

export default Home