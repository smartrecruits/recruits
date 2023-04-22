import React, { useState } from 'react';
import { saveRecruiter,storeRecruiterToken } from "./utils/auth";
import { useNavigate,Link } from "react-router-dom";
import './Signing.css'

function Signing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginemail, setLoginEmail] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Code to handle sign in submission
    setLoading(true)  
    fetch('https://recruits.onrender.com/recruiter/login', {
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
    fetch('https://recruits.onrender.com/recruiter', {
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
                <input placeholder="Email" id="loginemail" name="loginemail" type="text" className="input" value={loginemail} onChange={(event) => setLoginEmail(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Password" id="loginpassword" name="loginpassword" type="password" className="input" data-type="password" value={loginpassword} onChange={(event) => setLoginPassword(event.target.value)} />
              </div>
              <div className="group">
              { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                                <input type="submit" className="button" value="Sign In" />
                        )
               }
              </div>
              {errors.length > 0 && (
                <div className="text-danger">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
            </form>
            <div className="hr"></div>
            <div className="footer">
              <Link to="/RecruiterReset">Forgot Password?</Link>
            </div>
          </div>
          <div className="sign-up-htm">
            <form onSubmit={handleSignUpSubmit}>
              <div className="group">
                <input placeholder="Username" id="username" name='username' type="text" className="input" value={username} onChange={(event) => setUsername(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Email address" id="email" name='email' type="text" className="input" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="group">
                <input placeholder="Password" id="password" name='password' type="password" className="input" data-type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
              {/* <div className="group">
                <input placeholder="Confirm password" id="confirm-password" type="password" className="input" data-type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
              </div> */}
              <div className="group">
              { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                                <input type="submit" className="button" value="Sign Up" />
                        )
               }
               {Object.keys(errors).length > 0 &&
                Object.entries(errors).map(([key, value]) => {
                  return value.map((error, index) => (
                    <div key={`${key}-${index}`} className="text-danger">
                      {error}
                    </div>
                  ));
                })}
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
