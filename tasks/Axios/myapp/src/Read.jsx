import React from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Read() {
    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
      axios.get('http://localhost:4000/users/'+ id)
      .then(result => setData(result.data))
      .catch(err => console.log(err));

    },[])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pd-5 rounded'>  
    <h1>  Details of user</h1>       
    
        <div className='mb-2'> 
           <strong>Name: {data.name}</strong>
            
        </div>
        <div className='mb-2'> 
        <strong>Name: {data.email}</strong>
        </div>
        <div className='mb-3'> 
        <strong>Name: {data.phone}</strong>
        </div>
        <Link to = {`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to="/" className='btn btn-primary ms-3'> Back</Link>
    </div>
 </div>
  )
}

export default Read