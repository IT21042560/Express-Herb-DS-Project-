import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Typography,IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { GetCart } from '../../actions/cartAction';
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';



const RevOrders = () => {

  const carts = useSelector(state => state.cart.carts)
  console.log(carts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCart())
  }, []);





  return (
    <div>

      <Container>
        <Typography variant="h4" color="#ac1717" fontWeight="600" sx={{ m: "0 0 5px 0" }}>
          Received Orders
        </Typography>
        <Table striped bordered hover style={{ fontSize: 14, alignItems: '' }} responsive="lg" >
          <thead>
            <tr>
              <th style={{ verticalAlign: 'middle ' }}>#</th>
              <th style={{ verticalAlign: 'middle ' }}>Order ID</th>
              <th style={{ verticalAlign: 'middle ' }}>Seller ID</th>
              <th style={{ verticalAlign: 'middle ' }}>Customer Name</th>
              <th style={{ verticalAlign: 'middle ' }}>Address</th>
              <th style={{ verticalAlign: 'middle ' }}>Phone Number</th>
              <th style={{ verticalAlign: 'middle ' }}>Email</th>
              <th style={{ verticalAlign: 'middle ' }}>Total Amount</th>
              <th style={{ verticalAlign: 'middle ' }}>Delivary</th>
              <th style={{ verticalAlign: 'middle ' }}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              carts.map((data, index) => (
                <tr key={{ index }}>
                  <td scope="row">{index + 1}</td>
                  <td scope="row">{data.Order_ID}</td>
                  <td scope="row">{data.Seller_ID}</td>
                  <td scope="row">{data.Customer_Name}</td>
                  <td scope="row">{data.Address}</td>
                  <td scope="row">{data.Phone_No}</td>
                  <td scope="row">{data.Email}</td>
                  <td scope="row">{data.Total_Amount}</td>
                  <td scope="row">{data.Delivary}</td>
                  <td>
                    <div style={{ display: "flex", flexDirection: "row" }}>

                      <IconButton>
                        <FileDownloadDoneRoundedIcon size={20} style={{ color: "blue", height: "1.2rem" }} />
                      </IconButton>
                      
                    </div>

                  </td>



                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default RevOrders