import React, { useState } from "react";
import "./Import.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

const Imports = () => {
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
      <div className="btn">
        <button onClick={ShowSidebar}>
          <FaBars></FaBars>
          {show && <Sidebar />}
        </button>
      </div>
    </>
  );
};

export default Imports;
