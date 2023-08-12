import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Image from '../components/Image';
import './AdminPage.css';

const Login = () => {
  const [pname, setpName] = useState("");
  const [pimg, setpimg] = useState("");
  const [hResMsg, setResMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    Axios.post("http://localhost:3001/login", { pname, pimg })
      .then((res) => {
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setResMsg("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        setResMsg("An error occurred during login");
      });
  };

  if (isLoggedIn) {
    return <Image/>;
  }

  return (
    <div className="container-fluid">
      <br />
      
      <form className="mx-auto">
      
        <h1 className="text-center">Login</h1>
        
        <div className="mb-3 mt-5">
          
          <label className="form-label">User ID</label>
          <input
            onChange={(e) => setpName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setpimg(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label">Not registered? </label>
          <Link to="/registration">
            <label> Sign up</label>
          </Link>
        </div>
        <button type="button" onClick={handleLogin} className="btn btn-primary">
          Log in
        </button>
        <h4 style={{ color: "white" }}>{hResMsg}</h4>
        
      </form>
    </div>
  );
};

export default Login;
