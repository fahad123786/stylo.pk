import React,{useState} from 'react'

const Signup = () => {
    const {formData, setformData} = useState({
        name:'',
        email:'',
        phone:'',
        country:'',     
        password:'',
        confirmPassword:''
    })
    const{name,email,phone,country,password,confirmPassword} = formData;
  return (
    <div>
      {/* <form>
        <label>Name</label>
        <input type='text' name='text' value={name}/>
        <label>Email</label>
        <input type='text' name='email' value={email}/>
        <label>Phone</label>
        <input type='number' name='phone' value={phone}/>
        <label>Country  </label>
        <input type='text' name='text' value={name}/>
        <label>Name</label>
        <input type='text' name='text' value={name}/>
        
        
      </form> */}
    </div>
  )
}

export default Signup
