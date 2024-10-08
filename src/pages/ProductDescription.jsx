import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/features/counter'; // Update the path to the correct file

import Counter from '../components/Counter';
import Loader from '../components/Loader';
import axios from 'axios';

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch

  const fetchProduct = async () => {
    setLoader(true);
    const response = await axios.get(`http://localhost:8082/api/admin/product/${id}`);
    setProduct(response.data.product);
    setLoader(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart()); // Dispatch the addToCart action when the button is clicked
  };

  return (
    loader ? (
      <Loader />
    ) : (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={product?.thumbnail} alt={product?.title} width="300px" height="300px" />
            </div>
            <div className="col-lg-6">
              <h2>{product?.title}</h2>
              <p>{product?.description}</p>
              <h3>Price: ${product?.price}</h3>
              <Counter />
              <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDescription;
