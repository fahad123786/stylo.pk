import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password does not Match");
        } else {
            console.log(formData);
            toast.success("User Registration Successfully");
            navigate("/");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center flex-column align-items-center' style ={{fontSize:"18px"}}>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={onChange} required />
                
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={onChange} required/>
                
                <label>Phone</label>
                <input type='number' name='phone' value={phone} onChange={onChange} required/>
                
                <label>Country</label>
                <Select 
                    options={options} 
                    value={options.find(option => option.label === country)} 
                    onChange={handleSelectChange} required 
                />
                
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
                
                <button type='submit' className='btn btn-success my-3'>Register</button>
            </div>
        </form>
    );
}

export default Signup;
