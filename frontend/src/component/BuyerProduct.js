import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBCardImage } from "mdb-react-ui-kit";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Button } from "@mui/material";

export default function BuyerProduct() {
  const [Product, setProduct] = useState([]);
  const image = Product.image;

  useEffect(() => {
    function getProduct() {
      axois
        .get("http://localhost:8040/Product/viewAll")
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProduct();
  }, []);

  return (
    <div className="icc">
      <br></br>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-9 mt-2 mb-2"
          style={{ marginTop: "40px", width: "1300px", marginLeft: "300px" }}
        ></div>
      </div>

      <table
        className="table"
        style={{ marginTop: "40px", width: "1200px", marginLeft: "200px" }}
      >
        <thead>
          {Product && (
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price </th>
              <th scope="col">Catogory</th>
              <th scope="col">description</th>
              <th scope="col">quantity </th>
              <th scope="col">image </th>
              {/* {e.quantity}<br></br> */}
            </tr>
          )}
        </thead>
        <tbody>
          {Product &&
            Product.map((e, i) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.catogory}</td>
                <td>{e.description}</td>
                <td>{e.quantity}</td>
                <td>
                  <MDBCardImage
                    src={`http://localhost:8040/${e.image}`}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
