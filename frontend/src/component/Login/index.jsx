import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Navigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { getEmaill } from "../AddProduct";
import { AddProduct } from "../AddProduct";

const Login = () => {
	const dispatch=useDispatch
	const [data, setData] = useState({ Email: "", Hash_password: "" });
	const [error, setError] = useState("");
	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8050/seller/Signin";
			

			const { data: res } = await axios.post(url, data);
			
			//const Email =res.payload.RegisterdSeller.Email
			const userId = res.payload.RegisterdSeller.Seller_Id;

			//dispatch(getEmail(Email))
			console.log("hiiiiiiiiiiiii")
			
			//getEmaill(Email);
			localStorage.setItem("token", res.data);
			
			window.location = `/SellerProfile/${userId}`;
			
			


		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="Email"
							onChange={handleChange}
							value={data.Email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="Hash_password"
							onChange={handleChange}
							value={data.Hash_password}
							required
							className={styles.input}
						/>
						{/* <AddProduct email1={data.Email}/> */}
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to={"/signup1"}>
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;