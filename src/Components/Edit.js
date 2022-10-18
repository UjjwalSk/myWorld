import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "./Api";

const Edit = (props) => {
	const navigate = useNavigate();
	const [data, setData] = useState({});
	let { id } = useParams([]);

	useEffect(() => {
		if (localStorage.getItem("user") !== "admin" || isNaN(id)) {
			navigate("404");
		}
		axios.get(`/data/${id}`).then((r) => setData(r.data));
	}, []);

	const submit = async (e) => {
		e.preventDefault();
		await axios.put(`/data/${id}`, {
			uname: data.uname,
			mail: data.mail,
			pass: data.pass,
		});
		navigate("/user/admin");
	};

	return (
		<div className="flex justify-center m-24">
			<div
				href="#"
				className={`flex items-center rounded-lg border-r-4 border-metal flex-row max-w-4xl shadow-xl bg-white-900 ${
					!props.uname &&
					(props.choice % 2 ? "self-end" : "self-start")
				}`}
			>
				<img
					className="h-126 rounded-t-lg w-100 rounded-none rounded-l-lg"
					src={`https://picsum.photos/390?t=${Math.random()}`}
					alt=""
				/>
				<div className="flex flex-col justify-between p-9 text-center">
					<form className="space-y-4" action="" onSubmit={submit}>
						<h1 className="text-3xl font-bold underline decoration-double mb-3">
							User Details
						</h1>
						<input
							className="w-full p-4 text-sm border border-silver rounded"
							type="text"
							placeholder="UserName"
							value={data.uname}
							required
							onChange={(e) => {
								data.uname = e.target.value;
								setData({ ...data });
							}}
						/>
						<input
							className="w-full p-4 text-sm border border-silver rounded"
							type="email"
							placeholder="Email"
							value={data.mail}
							required
							onChange={(e) => {
								data.mail = e.target.value;
								setData({ ...data });
							}}
						/>
						<input
							className="w-full p-4 text-sm border border-silver rounded"
							type="password"
							placeholder="Password"
							value={data.pass}
							required
							onChange={(e) => {
								data.pass = e.target.value;
								setData({ ...data });
							}}
						/>
						<button
							type="submit"
							className="w-4/12 py-3 mx-2 bg-metal text-white-900 hover:bg-midnight rounded text-sm font-bold"
						>
							Update
						</button>
						<button
							className="w-4/12 py-3 mx-2 bg-red text-white-900 hover:bg-midnight rounded text-sm font-bold"
							onClick={() => navigate("/user/admin")}
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Edit;
