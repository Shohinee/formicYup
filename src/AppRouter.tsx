/** @format */

// import React from "react";
import { Route, Routes } from "react-router-dom";
import forgetpass from "./forgetpass";
import NotANumber from "./NotANumber";
import Signup from "./Signup";
import BasicForm from "./BasicForm";
import LayOut from "./LayOut";

export default function AppRouter() {
	return (
		<div>
			<Routes>
				<Route element={<LayOut />}>
					<Route path="/forget" Component={forgetpass} />
					<Route path="/notaMember" Component={NotANumber} />
					<Route path="/signup" Component={Signup} />
				</Route>
				<Route path="/" Component={BasicForm} />
			</Routes>
		</div>
	);
}
