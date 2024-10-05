import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import Loader from '../components/Loader';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetching products
  const fetchData = async () => {
    setLoader(true);
    const response = await axios.get("http://localhost:8082/api/admin/product?category=favourite");
    setProducts(response.data.products);
    console.log(response);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  // Fetching user data
  const fetchUser = async () => {
    setLoader(true);
    const response = await axios.get(`http://localhost:8082/api/admin/user/${decodedToken.id}`);
    if (response.data.success) {
      setUser(response.data.user);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    toast.success("User Logout Successfully");
    navigate("/");
  };

  return (
    <>
      <div>
        {loader ? (
          <Loader />
        ) : (
          <>
              <div> 
              <div class ="dashboard-text"><h1>Welcome to the Dashboard {user?.name}</h1></div>
              <div class ="logout-button"><button className='btn btn-primary' onClick={logout}>Logout</button></div>
              <div class ="dashboard-text"> <h2>It may be your favourite</h2></div>
            </div>

            
            <div className='d-flex flex-wrap justify-content-evenly gap-4'>
              {products.map((product) => (
                <Link key={product._id} to={`/product/${product._id}`}>
                  <div className='card' style={{ width: '18rem' }}>
                    <img
                      src={product.thumbnail}
                      className='card-img-top'
                      style={{ height: '180px', width: '200px', marginLeft: '2.6rem' }}
                      alt={product.title}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{product.title}</h5>
                      <p className='card-text'>{product.description.slice(0, 25) + '...'}</p>
                      <button className='btn btn-primary'>${product.price}</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
