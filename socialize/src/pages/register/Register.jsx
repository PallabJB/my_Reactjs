import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  
  const handleSignUp = () => {
    
    if (!username || !email || !password || !passwordAgain) {
      alert("Please fill all the fields.");
      return;
    }

   
    if (password !== passwordAgain) {
      alert("Passwords do not match.");
      return;
    }

   
    navigate('/profile');
  };

  const handleLoginAccount = ()=>{
    navigate('/login')
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Socialize</h3>
          <span className="loginDesc">
            Connect with your Loved_Ones with Socialize.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input 
              placeholder='Username' 
              className="loginInput" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              placeholder='Email' 
              className="loginInput" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              placeholder='Password' 
              className="loginInput" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input 
              placeholder='Password Again' 
              className="loginInput" 
              type="password"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
            <button className="loginButton" onClick={handleSignUp}>Sign Up</button>
            <button className="loginRegisterButton" onClick={handleLoginAccount}>
              Login to your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
