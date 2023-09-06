/** @format */

import * as Yup from "yup";
export const signUpSchema = Yup.object({
	name: Yup.string().min(2).max(25).required("Please Enter your name"),
	email: Yup.string().email().required("Enter your Email"),
	password: Yup.string().min(6).required("Please Enter your Password"),
	confirmPassword: Yup.string()
		.required()
		.oneOf([Yup.ref("password")], "Password must Match"),
});
