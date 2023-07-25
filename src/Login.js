// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './actions';
import './Login.css'

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
   
    const userData = {
      username,
      email,
    };
    dispatch(loginSuccess(userData));
  };

  return (
    <>
    <h2 style={{textAlign:'center'}}>Welcome To Login Page 🎈🎉</h2>
   
    <div className='login'>
 
    <form>
    <div>
      <label>Username</label>
      <br/>
      <input
        type="text"
       
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>

      <div>
      <label>Email</label>
      <br/>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>

      <div>
      <label>Password</label>
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
     
      <button onClick={handleLogin}>Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
