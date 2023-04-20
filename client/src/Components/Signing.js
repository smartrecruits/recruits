import React, { useState } from 'react';
import { saveRecruiter,storeRecruiterToken } from "./utils/auth";
import { useNavigate,Link } from "react-router-dom";
import './Signing.css'

function Signing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Code to handle sign in submission
    setLoading(true)  
    fetch('https://backend-dc1w.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
        // setIsLoggedIn(true);
        // navigate("/profile");
      } else {
        response.json().then((err)=>setErrors([err.error]))
      }
      setLoading(false)
    })
    .then(data => {
      // Store session ID in browser storage
      saveRecruiter(data.user.id)
      storeRecruiterToken(data.token)
      //  console.log(data.user.id)
      navigate('/');
    })
   
  }

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Code to handle sign up submission
    setLoading(true)  
    fetch('https://backend-dc1w.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
        // setIsLoggedIn(true);
        // navigate("/profile");
      } else {
        response.json().then((err)=>setErrors([err.error]))
      }
      setLoading(false)
    })
  }

  return (
    <div className="container" data-testid="signing">
      <div className="login-container">
        <input id="item-1" type="radio" name="item" className="sign-in" checked />
        <label htmlFor="item-1" className="item">Sign In</label>
        <input id="item-2" type="radio" name="item" className="sign-up" />
        <label htmlFor="item-2" className="item">Sign Up</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form onSubmit={handleSignInSubmit}>
              <div className="group">
                <input placeholder="Email" id="user" type="text" className="input" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Password" id="pass" type="password" className="input" data-type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
            </form>
            <div className="hr"></div>
            <div className="footer">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <form onSubmit={handleSignUpSubmit}>
              <div className="group">
                <input placeholder="Username" id="user" type="text" className="input" value={username} onChange={(event) => setUsername(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Email address" id="email" type="text" className="input" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Password" id="password" type="password" className="input" data-type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Confirm password" id="confirm-password" type="password" className="input" data-type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
            </form>
            <div className="hr"></div>
            <div className="footer">
              <label htmlFor="item-1">Already have an account?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signing;
