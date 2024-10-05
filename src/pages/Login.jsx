import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',     
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false); 
    const [token, setToken] = useState(null);

    const navigate = useNavigate(); 
    const { email, password } = formData;

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8082/api/admin/user/login", formData); 
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                toast.success(response.data.message);
                navigate("/dashboard");
            } else {
                toast.warning(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>      
          <div className='loginpage'><h2>Please enter your email and password</h2></div>
        <form onSubmit={handleSubmit} className='formlogin'>
                    <div className='login-text'><h2>Login</h2></div>
            <div className='d-flex justify-content-center flex-column align-items-center' style={{ fontSize: "18px" }}>
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={onChange} required />
                
                <label>Password</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name='password' 
                        value={password} 
                        onChange={onChange} 
                        style={{ marginRight: '10px', marginLeft: '28px' }} 
                        required 
                    />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>
                
                <div className='forgetpassword'>Forget Password?</div>            
                <button type='submit' className='loginformbutton'>Login</button>
                
                <div className='donthaveaccount'> Don't have Account? <Link to="/signup" className='signup_button'> Signup</Link></div>
            </div>
        </form>
        </>

    );
}

export default Login;
