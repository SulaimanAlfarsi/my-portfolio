import React, { useState } from 'react';
import './AdminPage.css';

import sulaiman from "../Images/sulaiman1.png"
import Admin1 from '../routes/Admin1';

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Define the allowed users
    const allowedUsers = [
      { email: 'sulaiman@gmail.com', password: '123' }
    ];

    // Check if the entered email and password match any of the allowed users
    const user = allowedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Set the logged-in state to true
      setLoggedIn(true);
    } else {
      // Display an error message
      setErrorMessage('Invalid email or password.');
    }
  };

  if (loggedIn) {
    // Render the admin page if logged in
    return <Admin1/>;
  }
  return (
    <>
    <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              <img src={sulaiman} className="fd img-fluid" alt="" />
              
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <h3 className='head'>Admin Login</h3>
                <div className="input-field">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password" className="form-label">Password</label>
                </div>
                <div className="input-field">
                  <button type="button" className="btn btn-primary" onClick={handleLogin}>
                    Login
                  </button>
                </div>
                <div className="signin">
                  <p>{errorMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPage