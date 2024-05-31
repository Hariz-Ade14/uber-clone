import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';

const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

  const [Name,setName] = useState(""); 
  const [Email,setEmail] = useState(""); 
  const [Password,setPassword] = useState(""); 

  const handleNameChange = (e) => {
        setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
         
            <div className="form-header">
              <h1 className='text-center'> Sign Up</h1>
            </div>
            <div className="card-body mt-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder='Name' className="form-control" id="username" name="username" value={Name} onChange={handleNameChange} required />
                </div>
                <br/>
                <div className="form-group">
                  <input type="email" placeholder='Email' className="form-control" id="email" name="email" value={Email} onChange={handleEmailChange} required />
                </div>
                <br/>
                <div className="form-group">
                  <input type="password" placeholder='Password' className="form-control" id="password" name="password" value={Password} onChange={handlePasswordChange} required />
                </div>
                <br/>
                <div className="form-group">
                  {/* <input type="password"  placeholder='Confirm Password' className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /> */}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
              </form>
              <p className='mt-3'>Already have an account? 
              <Link to="../LogIn/LogIn">Login</Link>
              {/* <a href="../Profile/LogIn.jsx">Login</a> */}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
