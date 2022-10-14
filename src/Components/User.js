import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Card";
import axios from "./Api";
import Admin from "./Admin";

const User = () => {
	const { uname } = useParams();
	const [cred, setCred] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("user") != uname) {
			navigate("404");
		}
		axios.get(`/data?uname=${uname}`).then((result) => {
			result = result.data[0];
			setCred([result.uname, result.mail]);
		});
	}, []);

	return (
		<div className="flex justify-center m-32">
			{cred[0] === "admin" ? (
				<Admin />
			) : (
				<Card uname={cred[0]} umail={cred[1]}></Card>
			)}
		</div>
	);
};

export default User;
