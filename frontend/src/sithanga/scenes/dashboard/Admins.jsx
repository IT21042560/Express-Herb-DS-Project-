import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../actions/authActions';
import { Typography } from "@mui/material";


const Admins = () => {
	const admins = useSelector(state => state.auth.admins)
	console.log(admins)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll())
	}, []);

	return (
		<div>
			<Container>
			<Typography variant="h4" color="#ac1717" fontWeight="600" sx={{ m: "0 0 5px 0" }}>
				Admins
			</Typography>
				<Table striped bordered hover style={{ fontSize: 14, alignItems: '' }} responsive="lg" >
					<thead>
						<tr>
							<th style={{ verticalAlign: 'middle ' }}>#</th>
							<th style={{ verticalAlign: 'middle ' }}>Admin ID</th>
							<th style={{ verticalAlign: 'middle ' }}>Full Name</th>
							<th style={{ verticalAlign: 'middle ' }}>Admin Email</th>
							<th style={{ verticalAlign: 'middle ' }}>Contact Number</th>
							<th style={{ verticalAlign: 'middle ' }}>Job Title</th>

						</tr>
					</thead>
					<tbody>
						{
							admins.map((data, index) => (
								<tr key={{ index }}>
									<td scope="row">{index + 1}</td>
									<td scope="row">{data.Admin_ID}</td>
									<td scope="row">{data.Full_Name}</td>
									<td scope="row">{data.Admin_Email}</td>
									<td scope="row">{data.Contact_no}</td>
									<td scope="row">{data.Job_title}</td>



								</tr>
							))
						}
					</tbody>
				</Table>
			</Container>
		</div>
	)
}

export default Admins