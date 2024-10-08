import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc"; 
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',     
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

    const navigate = useNavigate(); 
    const options = useMemo(() => countryList().getData(), []);
    const { name, email, phone, country, password, confirmPassword } = formData;

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (selectedOption) => {
        setFormData({ ...formData, country: selectedOption.label });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password does not Match");
        } else {
            const response = await axios.post("http://localhost:8082/api/admin/user/register", formData); 
            console.log(response);
            toast.success("User Registration Successfully");
            navigate("/login");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (

        
             
       
        <form onSubmit={handleSubmit} className='signupform'>

            <div className="signup-text"><h2>Sign up</h2></div>

            <div className='d-flex justify-content-center flex-column align-items-center' style ={{fontSize:"18px"}}>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={onChange} required />
                
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={onChange} required/>
                
                <label>Phone</label>
                <input type='number' name='phone' value={phone} onChange={onChange} required/>
                <div className='country'>
                <label className='country-text'> Country</label>
                <Select 
                    options={options} 
                    value={options.find(option => option.label === country)} 
                    onChange={handleSelectChange} required 
                    
                />
                </div>
                
                
                <label>Password</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name='password' 
                        value={password} 
                        onChange={onChange} 
                        style={{ marginRight: '10px' }} required
                    />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {showPassword ? <FaEye /> : <FaEyeSlash /> }
                    </span>
                </div>
                
                <label>Confirm Password</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        type={showConfirmPassword ? 'text' : 'password'} 
                        name='confirmPassword' 
                        value={confirmPassword} 
                        onChange={onChange} 
                        style={{ marginRight: '10px' }} required
                    />
                    <span onClick={toggleConfirmPasswordVisibility} style={{ cursor: 'pointer' }}>
                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash /> }
                    </span>
                </div>
                
                <button type='submit' className='registerformbutton'>Register</button>

                <div>
                Already have account? <Link to ="/login" className="alreadyaccount" >Login</Link>
            </div>
            <div className="continue">Continue with <div className='fb'> <FaFacebook /> <FcGoogle /> </div> </div>
            </div>

          
        </form>

            
          );
}

export default Signup;
