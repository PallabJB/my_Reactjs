import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = () => {
  

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    
    navigate('/');
  };

  const handleRegister = () =>{
    navigate('/register')
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
            <button className="loginButton" onClick={handleLogin}>Log In</button>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
