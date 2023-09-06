/** @format */

import { useFormik } from "formik";
// import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { signUpSchema } from "./schemas";
const initialValues = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};
export default function BasicForm() {
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: signUpSchema,
			onSubmit: (values) => {
				console.log(values);
			},
		});
	// console.log(errors);
	return (
		<div className="container1">
			<NavLink to="/" className="h2">
				<h2>LoginPage</h2>
			</NavLink>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					autoComplete="off"
					name="name"
					placeholder="Username"
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.name && touched.name ? <p>{errors.name}</p> : null}

				<input
					type="email"
					autoComplete="off"
					name="email"
					placeholder="Email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.email && touched.email ? <p>{errors.email}</p> : null}
				<input
					type="password"
					autoComplete="off"
					name="password"
					placeholder="Password"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.password && touched.password ? <p>{errors.password}</p> : null}
				<input
					type="password"
					autoComplete="off"
					name="confirmPassword"
					placeholder="confirmPassword"
					value={values.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.confirmPassword && touched.confirmPassword ? (
					<p>{errors.confirmPassword}</p>
				) : null}
				<br />
				<NavLink to="/forget" className="link">
					Forget Password?
				</NavLink>
				<br />
				{/* <NavLink to="/notaMember">
					<button type="submit">Login</button>
				</NavLink> */}
				<button type="submit">Login</button>
				<br />
				<p>Not a Member ?</p>
				<NavLink to="/signup" className="link">
					Signup
				</NavLink>
			</form>
		</div>
	);
}
