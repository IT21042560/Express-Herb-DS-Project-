import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AllOrdered from "./component/orderedItems";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdatedOrdred from "./component/updateOrdered";
import CompletedItems from "./component/completedItems";
import OrderTraking from "./component/orderTracking";
import Signin from "./sithanga/scenes/SignIn/index";
import Header from "./sithanga/scenes/dashboard/header";
import Dash from "./sithanga/scenes/dashboard/Layout";
import Signup from "./sithanga/scenes/signup/index";
import Layout from "./sithanga/scenes/dashboard/Layout";
import Userprofile from "./sithanga/scenes/dashboard/userProfile";
import RevOrders from "./sithanga/scenes/dashboard/RevOrders";
import AcpOrders from "./sithanga/scenes/dashboard/AcpOrders";
import Sellers from "./sithanga/scenes/dashboard/Sellers";
import Commision from "./sithanga/scenes/dashboard/Commision";
import Admins from "./sithanga/scenes/dashboard/Admins";

import { AddProduct } from "./component/AddProduct";
import ViewProduct from "./component/ViewProduct";
import UpdateProduct from "./component/UpdateProduct";
import Home from "./component/Home";
import BuyerProduct from "./component/BuyerProduct";
import Main from "./component/Main";
import Signup1 from "./component/SignUp";
import Login from "./component/Login";
import { SellerProfile } from "./component/SellerProfile";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
        <Routes>
          <Route path="/orderedItems" element={<AllOrdered />} />

          <Route path="/update/:id" element={<UpdatedOrdred />} />

          <Route path="/CompletedItems" element={<CompletedItems />} />

          <Route path="/OrderTraking" element={<OrderTraking />} />

          <Route path="/signin" element={<Signin />} />

          <Route path="/header" element={<Header />} />

          <Route path="/dash" element={<Dash />} />

          <Route path="/signup" element={<Signup />} />

          <Route element={<Layout />}>
            <Route path="/user Profile" element={<Userprofile />} />
            <Route path="/received orders" element={<RevOrders />} />
            <Route path="/accepted orders" element={<AcpOrders />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/commisions" element={<Commision />} />
            <Route path="/Team" element={<Admins />} />
            <Route path="/AddProduct/:id" element={<AddProduct />} />
            <Route path="/SellerProfile/:id" element={<SellerProfile />} />
            <Route path="/ViewProduct/:id" element={<ViewProduct />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
            <Route path="/home/:id" element={<Home />} />
            <Route path="/BuyerProduct" element={<BuyerProduct />} />
            {user && <Route path="/" exact element={<Main />} />}
            <Route path="/signup1" element={<Signup1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
