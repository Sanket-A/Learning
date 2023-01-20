import React from "react";

import "./Style.css";
const Login = () => {
  return (
    <>
      <div className="container">
        <h1> K Goods</h1>
        <h2>Login to k-goods</h2>

        <div className="form">
          <p>User Name / Email</p>
          <input className="box" type="text" placeholder="Username" />
          <p2>Password</p2>
          <input className="box1" type="text" placeholder="Password" />

          <div className="bottom">
            <button id="forgot" type="button">
              Forget Password
            </button>
            <div className="check">
              <input type="checkbox" />
              <label> Remember Me</label>
            </div>
          </div>
          <div>
            <button id="login" type="button">
              <p5>Login</p5>
            </button>
          </div>

          <div className="lines">
            <hr id="line"></hr>
            <p id="or">OR</p>
            <hr id="line2"></hr>
          </div>
        </div>

        {/* --------------social links--------------- */}
        <div className="links">
          <div className="social">
            <button type="button">
              <span className="dot"></span>Google
            </button>
          </div>
          <div className="social">
            <button type="button">
              <span className="dot"></span>
              Facebook
            </button>
          </div>
          <div className="social">
            <button type="button">
              <span className="dot"></span>Shopify
            </button>
          </div>
        </div>
        <div className="register">
          <p>
            New at K-Goods?<button type="button">Register?</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
