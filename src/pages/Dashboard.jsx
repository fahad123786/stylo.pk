import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"; // Keeping it as you want
import axios from 'axios';
import Loader from '../components/Loader'; // Assuming there's a Loader component
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Only decode and fetch user if a token exists
        if (token) {
            const decodedToken = jwtDecode(token); // Safely decode token only when present
            const fetchUser = async () => {
                setLoader(true);
                try {
                    const response = await axios.get(`http://localhost:8082/api/admin/user/${decodedToken.id}`);
                    if (response.data.success) {
                        setUser(response.data.user); // Set the user data
                    }
                } catch (error) {
                    toast.error("Failed to fetch user data");
                } finally {
                    setLoader(false);
                }
            };
            fetchUser();
        }
    }, [token]); // Effect only runs when token changes

    const logout = () => {
        localStorage.removeItem("token");
        toast.success("User logged out successfully");
        navigate("/");
    };

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (
                <>
                    <h1>Welcome to the Dashboard</h1>
                    <button className='btn btn-primary' onClick={logout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Dashboard;
