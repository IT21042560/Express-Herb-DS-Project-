import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

const UserProfile = () => {

  const user = useSelector(state => state.auth.user.RegisterdAdmin)
  console.log(user)
  return (
    <section style={{ backgroundColor: '#eee', marginTop: "-120px" }}>
      <MDBContainer className="py-5">
        <Typography variant="h4" color="#ac1717" fontWeight="600" sx={{ m: "0 0 5px 0" }}>
          User Profile
        </Typography>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center" style={{ height: "34rem" }}>

                {
                  user.ProfilePicture === '' ?

                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="profile pic"
                      className="rounded-circle"
                      style={{ width: '200px' ,paddingTop:"40px" }}
                      fluid />

                    :
                    // <div key={inqData.Image} className='proImg'>
                    //   <LazyLoadImage
                    //     src={`${process.env.REACT_APP_API}/${image}`}
                    //     alt='inquiry-image'
                    //     className='proImgimg'
                    //   />
                    // </div>
                  <div key ={user.ProfilePicture}>
                    <LazyLoadImage
                    src={`${process.env.REACT_APP_API}/UploadImage/images/${user.ProfilePicture}`}
                    alt="profile pic"
                    className="rounded-circle"
                  />
                  </div>
                }


                <p className="text-muted mb-1" style={{marginTop:"30px", fontWeight:"800", fontSize:"22px"}}>{user.Job_title}</p>
                <p className="text-muted mb-4">I'm a motivated and adaptable [insert relevant experience or field] professional with a passion for learning and a strong work ethic. I excel in fast-paced environments and enjoy taking on new challenges. As a team player, I collaborate well with others but can also work independently to deliver high-quality results.</p>
              </MDBCardBody>
            </MDBCard>


          </MDBCol>

          <MDBCol lg="8" >
            <MDBCard className="mb-4">
              <MDBCardBody style={{ paddingBottom: "5rem", paddingTop: "1.5rem" }} >
                <MDBRow style={{ backgroundColor: "#dee2e6" }}>
                  <MDBCol sm="3">
                    <MDBCardText>Admin ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.Admin_ID}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{ backgroundColor: "#dee2e6" }}>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.Full_Name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{ backgroundColor: "#dee2e6" }}>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.Admin_Email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow style={{ backgroundColor: "#dee2e6" }}>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.Contact_no}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

              </MDBCardBody>
            </MDBCard>



          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default UserProfile