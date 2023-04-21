import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AddProduct from "./component/AddProduct";
import ViewProduct from "./component/ViewProduct";
import UpdateProduct from "./component/UpdateProduct";
import Home from "./component/Home";
import BuyerProduct from "./component/BuyerProduct";
import Main from "./component/Main";
import Signup from "./component/SignUp";
import Login from "./component/Login";

function App() {
  const user = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BuyerProduct" element={<BuyerProduct />} />
        {user&&<Route path="/" exact element={<Main />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to ="/login"/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
