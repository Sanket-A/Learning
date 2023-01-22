import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <sidebar>
        <div className="sidebar">
          <header>K GOOD</header>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#">Search Product</a>
            </li>
            <li>
              <a href="/imports">Imports</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
          <div className="bottom">
            <ul>
              <li>
                <a href="#"> Settings </a>
              </li>
              <li>
                <a href="#"> Language </a>
              </li>
              <li>
                <a href="#"> Support </a>
              </li>
            </ul>
          </div>
        </div>
      </sidebar>
    </>
  );
};

export default Sidebar;
