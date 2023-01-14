import React from "react";
import "./Style.css";
const Login = () => {
  return (
    <center>
      <div className="cover">
        <div className="bigbox">
          <h1> K Goods</h1>
          <h2>Login to k-goods</h2>
          <div className="form">
            <p>User Name / Email</p>
            <input className="box" type="text" placeholder="Username" />
            <p>Password</p>
            <input className="box" type="text" placeholder="Password" />
            <button id="forgot" type="button">
              Forget Password
            </button>
            <div className="check">
              <input type="checkbox" />
              <label> Remember Me</label>
            </div>
            <button id="login" type="button">
              <p1>Login</p1>
            </button>
            <hr id="line"></hr>
            <p2>OR</p2>
            <hr id="line2"></hr>
          </div>

          {/* --------------social links--------------- */}
          <div className="links">
            <div className="social">
              <button type="button">Google</button>
            </div>
            <div className="social">
              <button type="button">Google</button>
            </div>
            <div className="social">
              <button type="button">Google</button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Login;
