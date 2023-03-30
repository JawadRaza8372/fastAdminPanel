import React, { useState } from "react";
import { setAuth } from "../../store/authSlice";
import "./login.scss";
import { useDispatch } from "react-redux";

export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();

	const signupacc = (e) => {
		e.preventDefault();
		if (email === "admin@admin.com" && password === "admin1234") {
			window.localStorage.setItem("findStudio@login", "login");
			dispatch(setAuth({ isAuth: true }));
		} else {
			alert("Wrong Credientials");
		}
	};

	return (
		<>
			<div className='wrapper__form' />
			<form className='form__login'>
				<h1> Fast Admin Panel </h1>
				<div>
					<label> Email </label>
					<input
						type='text'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<label> Password </label>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='btn__login'>
					<button onClick={signupacc}> Login </button>
				</div>
				{/* <p> Don't have an account? <Link to="/signup">Signup</Link>  </p> */}
			</form>
		</>
	);
}
