import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// let email="jjj@gmail.com";
// // export const getEmail=(Email)=>{
// // console.log("Email" + Email)
// // email=Email;

// //}
// export function getEmaill(props) {
//   email = props;
//   console.log(email);
// }

export const AddProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [catogory, setCatogory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const handleCatImg = (e) => {
    setImage(e.target.files[0]);
  };

  function sendData(e) {
    e.preventDefault();
    // const newProduct = {
    //   name,
    //   price,
    //   catogory,
    //   description,
    //   quantity,
    //   id,
    //   image,
    // };
    const form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("catogory", catogory);
    form.append("description", description);
    form.append("quantity", quantity);
    form.append("SellerId", id);
    form.append("image", image);
    console.log(id);
    axios
      .post(`http://localhost:8040/Product/addProduct/${id}`, form)
      .then(() => {
        alert("Product added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="icc">
      <div className="container">
        <div className="border">
          <div className="col-md-8 mt-4 mx-auto"></div>
          <form onSubmit={sendData}>
            <div class="mb-3">
              <label for="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Product Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="address" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Product Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="age" className="form-label">
                Product catogory
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                placeholder="Enter Product catogory"
                onChange={(e) => {
                  setCatogory(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="NIC" className="form-label">
                Product description
              </label>
              <input
                type="text"
                className="form-control"
                id="NIC"
                placeholder="Enter Product description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 ">
              <label for="gender" className="form-label">
                Product quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="Enter Product quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 ">
              <label for="gender" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                placeholder=""
                onChange={(e) => {
                  handleCatImg(e);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
              style={{ marginLeft: "240px" }}
            >
              Submit
            </button>
            <Link to={"/ViewProduct/" + id}>
              <button className="btn btn-danger" style={{}}>
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
//export getEmail=getEmail;
