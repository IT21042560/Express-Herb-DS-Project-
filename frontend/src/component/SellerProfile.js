import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import "./Hiruna.css";
import styles from "./styles.module.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export const SellerProfile = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([""]);
  const user = useSelector((state) => state.auth.user.RegisterdAdmin);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const image = product.ProfilePicture;
  useEffect(() => {
    function getProduct() {
      axios
        .get(`http://localhost:8050/seller/seller/${id}`)
        .then((res) => {
          console.log(res);
          console.log(id);
          //res.payload.RegisterdSeller.Seller_Id
          console.log(res.data.RegisterdSeller);
          setProduct(res.data.RegisterdSeller);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProduct();
  }, []);

  return (
    <div>
      <nav className={styles.navbar}>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
       
        <MDBContainer className="py-5 h-100">
        <center>
          <h1>Seller Profile</h1>
        </center>
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src={`http://localhost:8050/${image}`}
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px" }}
                      fluid
                    />
                    {/* <div key={product.ProfilePicture}>
                      <LazyLoadImage
                        src={`$http://localhost:8050/}/${image}`}
                        alt="profile pic"
                        className="rounded-circle"
                      />
                    </div> */}
                    <MDBTypography tag="h5">
                      {product.FirstName} {product.LastName}
                    </MDBTypography>

                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Seller ID</MDBTypography>
                          <MDBCardText className="text-muted">
                            {product.Seller_Id}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">First Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            {product.FirstName}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Last Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            {product.LastName}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {product.Email}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Contact No</MDBTypography>
                          <MDBCardText className="text-muted">
                            {product.Contact_no}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
            <div>
              <center>
                <div class="card-body">
                  <h5 class="card-title">Add Product</h5>

                  <Link to={"/AddProduct/" + id}>
                    <button type="button" class="btn btn-primary">
                      Add Product
                    </button>
                  </Link>
                </div>
              </center>
            </div>
            <div>
              <center>
                <div class="card-body">
                  <h5 class="card-title">View Product</h5>

                  <Link to={"/ViewProduct/" + id}>
                    <button type="button" class="btn btn-primary">
                      View Product
                    </button>
                  </Link>
                </div>
              </center>
            </div>

            <div>
              <center>
                <div class="card-body">
                  <h5 class="card-title">Buyer Product</h5>

                  <a href="/BuyerProduct" class="btn btn-primary">
                    Buyer Product
                  </a>
                </div>
              </center>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};
