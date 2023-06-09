import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { saveInterviewee,storeIntervieweeToken } from "./utils/auth";
// import AppInterviewee from '../AppInterviewee';
import './Client.css'


function Client() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginemail, setLoginEmail] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();
  const [loginerrors, setLoginErrors] = useState([]);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
        fetch('https://recruits.onrender.com/interviewee/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: loginemail,
            password: loginpassword,
          }),
        })
        .then(response => {
          if (response.ok) {
            return response.json();
           
          } else {
            response.json().then((err)=>setLoginErrors([err.errors]))
          }
          setLoginEmail('')
          setLoginPassword('')
        })
        .then(data => {
          // Store session ID in browser storage
          saveInterviewee(data.user.id)
          storeIntervieweeToken(data.token)
          //  console.log(data.user.id)
          navigate('/AppInterviewee');
          setLoginEmail('')
          setLoginPassword('')
          navigate('/AppInterviewee');
        })
        navigate('/AppInterviewee');
          setLoginEmail('')
          setLoginPassword('')
  }

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Code to handle sign up submission
    fetch('https://recruits.onrender.com/interviewee', {
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
      } else {
        response.json().then((err)=>setErrors([err.errors]))
      }
      setEmail('')
      setPassword('')
      setUsername('')
    }).then(data => {
      if (data) {
        setSuccessMessage('Successfully signed up!');
        setEmail('')
        setPassword('')
        setUsername('')
      }
    })
  }

  return (
    <div className="container">
      <div className="login-container">
        <input id="item-1" type="radio" name="item" className="sign-in"/>
        <label htmlFor="item-1" className="item">Sign In</label>
        <input id="item-2" type="radio" name="item" className="sign-up" />
        <label htmlFor="item-2" className="item">Sign Up</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form onSubmit={handleSignInSubmit}>
              <div className="group">
                <input placeholder="Email" id="email" name="email" type="text" className="input" value={loginemail} onChange={(event) => setLoginEmail(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Password" id="password" name="password" type="password" className="input" data-type="password" value={loginpassword} onChange={(event) => setLoginPassword(event.target.value)} />
              </div>
              <div className="group">   
                    <input type="submit" className="button" value="Sign In" />
              </div>
              {loginerrors.length > 0 && (
                <div className="text-danger" id="errors">
                {loginerrors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
                )}
            </form>
            <div className="hr"></div>
            <div className="footer">
              <Link to="/ClientReset">Forgot Password?</Link>
            </div>
          </div>
          <div className="sign-up-htm">
            <form onSubmit={handleSignUpSubmit}>
              <div className="group">
                <input placeholder="Username" id="username" name="username" type="text" className="input" value={username} onChange={(event) => setUsername(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Email address" id="email" name="email" type="text" className="input" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Password" id="password" name="password" type="password" className="input" data-type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
           
              <div className="group">
            
                <input type="submit" className="button" value="Sign Up" />
            
              </div>
              {successMessage && (
                <p>{successMessage}</p>
              )}
              {Object.keys(errors).length > 0 &&
                  Object.entries(errors).map(([key, value]) => {
                    if (Array.isArray(value)) {
                      return value.map((error, index) => (
                        <div key={`${key}-${index}`} className="text-danger" id="errors">
                          {error}
                        </div>
                      ));
                    } else {
                      return (
                        <div key={`${key}-error`} className="text-danger" id="errors">
                          Invalid {key[0]}
                        </div>
                      );
                    }
                  })}
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

export default Client;
