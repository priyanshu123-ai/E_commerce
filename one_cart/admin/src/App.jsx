import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import Lists from "./Pages/Lists";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Add from "./Pages/Add";
import Login from "./Pages/Login";
import { adminDataContext } from "./context/AdminContext";

const App = () => {
  const {adminData} = useContext(adminDataContext);
  return (
    <div>
      {!adminData ? <Login />: <>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Lists />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/lists" element = {<Lists />}/>
        <Route path="/orders" element={<Orders />} />
      </Routes>
      </>
      }
      
    </div>
  );
};

export default App;
