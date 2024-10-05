import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const EidCollection = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true)
    // const response = await axios.get("https://fakestoreapi.com/products");
    const response = await axios.get("http://localhost:8082/api/admin/product?category=eidcollection");
    setProducts(response.data.products);
    console.log(response)
    setLoader(false);
  };

  const [search, setSearch] = useState({
    title: ""
  })
  const onChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8082/api/admin/product?search=${title}`)
    setProducts(response.data.products);

  }
  const { title } = search;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className='d-flex flex-wrap justify-content-evenly gap-4'>
        
          <form onSubmit={onSubmit} className='form1'>
            <input className='input2'
              type='text' name='title' value={title} onChange={onChange} placeholder='Search products'/>
              
               <button type='submit' className='btn btn-primary'>Search</button>
          </form>
  
          {/* Display products */}
          {products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <div className='card' style={{ width: '18rem' }}>
                <img src={product.thumbnail} className='card-img-top' style={{height: '180px', width: '200px', marginLeft: '2.6rem'
                  }}
                  alt={product.title}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>
                    {product.description.slice(0, 25) + '...'}
                  </p>
                  <button className='btn btn-primary'> ${product.price} </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
  
};

export default EidCollection
