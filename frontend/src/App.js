import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddProduct from "./component/AddProduct";
import ViewProduct from "./component/ViewProduct";
import UpdateProduct from "./component/UpdateProduct";
import Home from "./component/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
