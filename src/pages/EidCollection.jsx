import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
const EidCollection = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const fetchData = async () => {
      setLoader(true)
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <>
    {
      loader ? <Loader/>: (<div className='d-flex flex-wrap justify-content-evenly gap-4'>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="card" style={{ width: "25rem" }}>
            <img src={product.image} className="card-img-top" style={{ height: "100px", width: "100px" }} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description.slice(0, 25) + "..."}</p>
              <button className="btn btn-primary">${product.price}</button>
              <p>Rating: {product.rating.rate}</p>
              <p>Item sold: {product.rating.count}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>)
    }
    </>
    
  );
};

export default EidCollection
