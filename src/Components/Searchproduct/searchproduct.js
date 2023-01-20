import React from "react";
import "./searchproduct.css";
import Sidebar from "../Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";

const Searchproduct = () => {
  return (
    <>
      <div className="navb">
        <button type="button">
          <FaBars />
        </button>
      </div>
      <Sidebar />
      <div className="nav"></div>

      <div className="box">
        <p>Store 1001</p>
        <div className="sbox"></div>
      </div>
      <div className="box1">
        <div className="sbox1"></div>
      </div>
      <div className="box2">
        <button type="button"> My Profile</button>
      </div>
      {/* ------------------------------------------------------ */}
      <div className="keyword">
        <div className="top">
          <input type="text" placeholder="    Search"></input>
          <button type="button"> Search</button>
          <button className="filter" type="button">
            <div
              style={{
                backgroundColor: "redddd",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className="sbox1"></div>
              <span>Filter</span>
            </div>
          </button>
        </div>
        <div className="bottom">
          <div className="category" type="button">
            <div className="sbox2"></div>
            <p>Health</p>
          </div>
          <div className="category">
            <div className="sbox2"></div>
            <p>Women</p>
          </div>
          <div className="category">
            <div className="sbox2"></div>
            <p>Pet</p>
          </div>
          <div className="category">
            <div className="sbox2"></div>
            <p>Electronics</p>
          </div>
          <div className="category">
            <div className="sbox2"></div>
            <p>Man Wear</p>
          </div>
          <div className="category">
            <div className="sbox2"></div>
            <p>Garden</p>
          </div>
          <div className="category">
            <div className="sbox2"></div>
            <p>Other</p>
          </div>
        </div>
      </div>
      {/* ========================================-------------------------------------------- */}
      <div className="row">
        <p>
          <b>Special Products</b> - 245 products
        </p>
        <div className="sort">
          <p>Sort By</p>
          <div className="sbox1"></div>
        </div>
      </div>
      <div className="below">
        <div className="types">
          <div className="box3"></div>
          <div className="title">
            <p>
              <b>Jeans Armani Jeans </b>
            </p>
            <p>4.5 (125) </p>
          </div>
          <p>Supplier Name - Verified Supplier</p>
          <div className="cost">
            <p>Listing Cost</p>
            <p>
              <b>25$</b>
            </p>
          </div>
          <div className="price">
            <p>Retail Price</p>
            <p>
              <b>40$</b>
            </p>
          </div>
          <div className="shipping">
            <p>Shipping Form</p>
            <p>8.7$ - 7-14 days</p>
          </div>
          <div className="stock">
            <p>Stock / Ordered</p>
            <p>11456 Stk /356 Ord</p>
          </div>
        </div>
        <div className="types">
          <div className="box3"> </div>
          <div className="title">
            <p>
              <b>Jeans Armani Jeans </b>
            </p>
            <p>4.5 (125) </p>
          </div>
          <p>Supplier Name - Verified Supplier</p>
          <div className="cost">
            <p>Listing Cost</p>
            <p>
              <b>25$</b>
            </p>
          </div>
          <div className="price">
            <p>Retail Price</p>
            <p>
              <b>40$</b>
            </p>
          </div>
          <div className="shipping">
            <p>Shipping Form</p>
            <p>8.7$ - 7-14 days</p>
          </div>
          <div className="stock">
            <p>Stock / Ordered</p>
            <p>11456 Stk /356 Ord</p>
          </div>
        </div>

        <div className="types">
          <div className="box3"></div>
          <div className="title">
            <p>
              <b>Jeans Armani Jeans </b>
            </p>
            <p>4.5 (125) </p>
          </div>
          <p>Supplier Name - Verified Supplier</p>
          <div className="cost">
            <p>Listing Cost</p>
            <p>
              <b>25$</b>
            </p>
          </div>
          <div className="price">
            <p>Retail Price</p>
            <p>
              <b>40$</b>
            </p>
          </div>
          <div className="shipping">
            <p>Shipping Form</p>
            <p>8.7$ - 7-14 days</p>
          </div>
          <div className="stock">
            <p>Stock / Ordered</p>
            <p>11456 Stk /356 Ord</p>
          </div>
        </div>
        <div className="types">
          <div className="box3"></div>
          <div className="title">
            <p>
              <b>Jeans Armani Jeans </b>
            </p>
            <p>4.5 (125) </p>
          </div>
          <p>Supplier Name - Verified Supplier</p>
          <div className="cost">
            <p>Listing Cost</p>
            <p>
              <b>25$</b>
            </p>
          </div>
          <div className="price">
            <p>Retail Price</p>
            <p>
              <b>40$</b>
            </p>
          </div>
          <div className="shipping">
            <p>Shipping Form</p>
            <p>8.7$ - 7-14 days</p>
          </div>
          <div className="stock">
            <p>Stock / Ordered</p>
            <p>11456 Stk /356 Ord</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchproduct;
