import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const Registration = () => {
  const [pname, setpName] = useState("");
  const [pprice, setprice] = useState("");
  const [pnum, setpNum] = useState("");
  const [pimg, setpimg] = useState("");
  const [hResMsg, setResMsg] = useState("");

  const addProdect = () => {
    // Check if any of the fields are empty
    if (!pname || !pprice || !pnum || !pimg) {
      alert("Please fill in all the fields");
      return;
    }

    Axios.post("http://localhost:3001/AddProdect", {
      pname: pname,
      pprice: pprice,
      pnum: pnum,
      pimg: pimg,
    })
      .then((res) => {
        setResMsg(res.data);
      })
      .catch((err) => {
        setResMsg(err);
      });
  };
  
  
  return (
    <>
    <div className='container-fluid'>
        <br/>
        <form className='mx-auto'>
            <h1 className='text-center'>Sign Up</h1>
            <div class="mb-3 mt-5">
    <label  class="form-label">User ID</label>
    <input onChange={(e) => {
            setpName(e.target.value);
          }} type="text" class="form-control"  />
    
  </div>
  <div class="mb-3 mt-5">
    <label  class="form-label">User Name</label>
    <input onChange={(e) => {
            setprice(e.target.value);
          }}  type="text" class="form-control"  />
  </div>
  
  <div class="mb-3 mt-5">
    <label  class="form-label">Email address</label>
    <input onChange={(e) => {
            setpNum(e.target.value);
          }} type="email" class="form-control" />
    
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input onChange={(e) => {
            setpimg(e.target.value);
          }} type="password" class="form-control" />
  </div>
  <div class="mb-3 form-check">
    <label class="form-check-label" >Alredy Registerd ? </label>
    <Link  to='/login'><label > Sign in</label></Link>
  </div>
  
  <button onClick={addProdect} class="btn btn-primary">Submit</button>
  <h4 style={{ color: "white" }}>{hResMsg}</h4>
</form>
    </div>
    </>
  )
}

export default Registration