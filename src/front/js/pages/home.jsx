import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Sidebar } from "../component/sidebar.jsx";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const logout = () => {
		actions.logout();
		navigate("/");
	};

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>


			<button
				type="button"
				className="btn btn-danger button"
				onClick={logout}
			>
				Cerrar Sesión
			</button>

		</div>
	);
};