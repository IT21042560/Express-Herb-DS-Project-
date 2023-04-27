import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const { id } = useParams();
  const [product, setProduct] = useState([""]);

  useEffect(() => {
    function getProduct() {
      axios
        .get(`http://localhost:8050/seller/seller/${id}`)
        .then((res) => {
          console.log(res);
          console.log(id);
          // const userId = res.payload.RegisterdSeller.Seller_Id;
          //res.payload.RegisterdSeller.Seller_Id
          //console.log(res.data.RegisterdSeller);
          setProduct(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProduct();
  }, []);

  return (
    <div className="im">
      <div>
        <div>
          <div className="d-flex">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Add Product</h5>

                <Link to={"/AddProduct/" + id}>
                  <button type="button" class="btn btn-primary">Add Product</button>
                </Link>
              </div>
            </div>
            <div class="card" style={{ marginLeft: "250px" }}>
              <div class="card-body">
                <h5 class="card-title">View Product</h5>

                <Link to={"/ViewProduct/" + id}>
                  <button type="button" class="btn btn-primary">View Product</button>
                </Link>
              </div>
            </div>
            <div class="card" style={{ marginLeft: "250px" }}>
              <div class="card-body">
                <h5 class="card-title">Seller Profile</h5>

               
                <Link to={"/SellerProfile/" + id}>
                  <button type="button" class="btn btn-primary">Seller Profile</button>
                </Link>
              </div>
            </div>
            <div class="card" style={{ marginLeft: "250px" }}>
            <div class="card-body">
              <h5 class="card-title">Buyer Product</h5>

              <a href="/BuyerProduct" class="btn btn-primary">
                Buyer Product
              </a>
            </div>
          </div>
          </div>
          
         

          <div className="d-flex"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
