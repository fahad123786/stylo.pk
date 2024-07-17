import React,{useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Counter from '../components/Counter';


const ProductDescription = () => {
  const {id} = useParams();
  const [product,setProduct] =useState(null);
  const fetchProduct = async()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(response.data);
  }  

  useEffect(()=>{
    fetchProduct();
  },[])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src ={product?.image} alt={product?.title} width={"300px"} height={"300px"}/>
          </div>
          <div className="col-lg-6">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <h3> Price: ${product?.price}</h3>
            <Counter/>
            <button className='btn btn-primary'>Add to cart</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
