/** @format */
import { Outlet } from "react-router-dom";
import "./App.css";
import BasicForm from "./BasicForm";
// import Signup from "./Signup";
export default function LayOut() {
	return (
		<div>
			<div
				className="main"
				style={{ height: "100%", width: "100% ", display: "flex" }}>
				<div className="left">
					<BasicForm />
				</div>
				<div className="right" style={{ marginLeft: "15px" }}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
