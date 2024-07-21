import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Counter from '../components/Counter';
import Loader from '../components/Loader';

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchProduct = async () => {
    setLoader(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching the product:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    loader ? (
      <Loader />
    ) : (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={product?.image} alt={product?.title} width="300px" height="300px" />
            </div>
            <div className="col-lg-6">
              <h2>{product?.title}</h2>
              <p>{product?.description}</p>
              <h3>Price: ${product?.price}</h3>
              <Counter />
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDescription;
