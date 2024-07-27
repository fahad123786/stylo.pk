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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        loader ? <Loader /> : (<div className='d-flex flex-wrap justify-content-evenly gap-4'>
          {
            products.map((product) => {
              return (
                <Link to={`/product/${product._id}`}>
                  <div class="card" style={{ width: "18rem" }}>
                  <img src={product.thumbnail} class="card-img-top" style={{ height: "180px", width: "200px", marginLeft: '2.6rem' }} alt={product.title} />
                  <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.description.slice(0, 25) + "..."}</p>
                  <button className="btn btn-primary">${product.price}</button>
              </div>
            </div>
        </Link>
        )
      })
    }
        </div>)
        }
    </>

  );
};

export default EidCollection
