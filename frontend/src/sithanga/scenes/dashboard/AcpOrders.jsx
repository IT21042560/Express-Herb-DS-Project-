import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Typography, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions/orderActions'
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Swal from 'sweetalert2';

const AcpOrders = () => {
  const dispatch = useDispatch();
  const acpOrders = useSelector(state => state.order.acptOrders)


  useEffect(() => {
    dispatch(getOrders())
  }, []);


  return (
    <div>

      <Container>
        <Typography variant="h4" color="#ac1717" fontWeight="600" sx={{ m: "0 0 5px 0" }}>
          Accepted Orders
        </Typography>

        {
          acpOrders.length > 0 ?
            <Table striped bordered hover style={{ fontSize: 14, alignItems: '' }} responsive="lg" >
              <thead>
                <tr>
                  <th style={{ verticalAlign: 'middle ' }}>#</th>
                  <th style={{ verticalAlign: 'middle ' }}>Order ID</th>
                  <th style={{ verticalAlign: 'middle ' }}>Customer Name</th>
                  <th style={{ verticalAlign: 'middle ' }}>Address</th>
                  <th style={{ verticalAlign: 'middle ' }}>Phone Number</th>
                  <th style={{ verticalAlign: 'middle ' }}>Email</th>
                  <th style={{ verticalAlign: 'middle ' }}>Total Amount</th>
                  <th style={{ verticalAlign: 'middle ' }}>Delivary</th>


                </tr>
              </thead>



              <tbody>
                {
                  acpOrders.map((data, index) => (
                    <tr key={{ index }}>
                      <td scope="row">{index + 1}</td>
                      <td scope="row">{data.order_id}</td>
                      <td scope="row">{data.customer_name}</td>
                      <td scope="row">{data.address}</td>
                      <td scope="row">{data.contact_no}</td>
                      <td scope="row">{data.email}</td>
                      <td scope="row">{data.total_amount}</td>
                      <td scope="row">{data.delivary}</td>

                    </tr>
                  ))
                }
              </tbody>
            </Table>
            :
            <div>
              <br /><br /><br /><br /><br />
              <h3><center>NO Any Orders Yet...</center></h3>
            </div>
        }

      </Container>
    </div>
  )
}

export default AcpOrders