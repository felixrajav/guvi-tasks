import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {setCount}from 'react-dom'



function ShopingCard(props) {
    const cardInfo=[
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Fancy product",price:"$40.00-$80.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Special Item",price:"$20.00-$18.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Sale Item",price:"$50.00-$250.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Popular Item",price:"$40.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"special Item",price:"$20.00-$18.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Sale Item ",price:"$50.00-$250.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Fancy Product",price:"$40.00-$80.00"},
        {Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",Name:"Popular Item",price:"$40.00"},
    ]

    const handleIncrement = () => {
        props.setCount((prevCount) => prevCount + 1); // call the setCount function with a callback that increments the previous count by 1
      };
      const handleDecrement = () => {
        props.setCount((prevCount) => prevCount - 1); // call the setCount function with a callback that increments the previous count by 1
      };
     
    const renderCard=(card,index)=>{
        return(
            <Card style={{ width: '18rem' }} key={index} className='box'>
      <Card.Img variant="top" src={card.Image} />
      <Card.Body>
        <Card.Title>{card.Name}</Card.Title>
        <Card.Text>
          {card.price}
        </Card.Text>
        <Button onClick={handleIncrement} variant="success">Add to Cart</Button>
        <Button onClick={handleDecrement} variant="danger">Remove</Button>
      </Card.Body>
    </Card>
 
        )
    }
  return (
    <>
    <div className='grid'>
       <div className='row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
       {cardInfo.map(renderCard)}
       </div>
       </div>
    </>
  )
}

export default ShopingCard