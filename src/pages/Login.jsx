import React, { useState, useMemo } from 'react';
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

    const navigate = useNavigate(); 
    const {email, password} = formData;

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
            const response = await axios.post("http://localhost:8082/api/admin/user/login", formData); 
            if(response.data.success){
                navigate("/")
                toast.success(response.data.message);
            }
            else{
                toast.warning(response.data.message)
            }
            
        }
        
        
       const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
              <div className='d-flex justify-content-center flex-column align-items-center' style ={{fontSize:"18px"}}>

                <label>Email</label>
                <input type='text' name='email' value={email} onChange={onChange} required/>
                
               
                
                <label>Password</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name='password' 
                        value={password} 
                        onChange={onChange} 
                        style={{marginRight:'10px',  marginLeft: '28px'  }}
                          required
                    />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {showPassword ? <FaEye /> : <FaEyeSlash /> }
                        
                    </span>
                </div>
                
                            
                <button type='submit' className='btn btn-success my-3'>Login</button>
                <div className='donthaveaccount'> Don't have Account? <Link to ="/signup" className='signup_button'> Signup</Link></div>
            </div>
        </form>
    );
}

export default Login;
