import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  const [show, setShow] = useState(false);

  const ShowSidebar = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      {" "}
      <div className="btn">
        <button onClick={ShowSidebar}>
          <FaBars></FaBars>
          {show && <Sidebar />}
        </button>
      </div>
    </>
  );
};

export default Dashboard;
