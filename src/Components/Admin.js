import axios from "./Api";
import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Admin = () => {
	const [data, setData] = useState([]);
	const path = useLocation();

	useEffect(() => {
		axios.get("/data").then((r) => {
			setData(r.data);
		});
	}, []);

	const filter = async (e) => {
		await axios.get("/data").then((r) => {
			let key = e.target.value.toLowerCase();
			let filterData = r.data.filter((x) => {
				return (
					x.uname.toLowerCase().indexOf(key) !== -1 ||
					x.mail.toLowerCase().indexOf(key) !== -1
				);
			});
			setData(filterData);
		});
	};

	return (
		<div className="shadow-xl border-t-4 border-purple rounded-lg -mt-20 dark:text-white-900 dark:drop-shadow-dark-2xl">
			<table className="text-lg text-gray-500 p-3 text-center">
				<thead>
					<tr>
						{[
							"ID",
							"UserName",
							"Email",
							"Password",
							"Edit",
							"Delete",
						].map((e, i) => {
							return (
								<th key={i} className="py-3 px-6">
									{e}
								</th>
							);
						})}
					</tr>
					<tr>
						<td>
							<i className="fa-solid fa-magnifying-glass relative"></i>
						</td>
						<td colSpan={5}>
							<input
								placeholder="Search by username or mail"
								className="w-full rounded-9 pl-3 pr-10 py-2 float-left border-none outline-none dark:bg-midnight"
								type="text"
								onChange={filter}
							/>
						</td>
					</tr>
				</thead>
				<tbody className="p-3">
					{data.map((e) => {
						return (
							e.id > 0 && (
								<tr
									key={e.id}
									className="hover:bg-purple hover:text-white-900 p-3"
								>
									<td className="py-3 px-10">{e.id}</td>
									<td className="py-3 px-10">{e.uname}</td>
									<td className="py-3 px-10">{e.mail}</td>
									<td className="py-3 px-10">{e.pass}</td>
									<td className="py-3 px-10 text-red hover:cursor-pointer">
										<Link
											to={`${path.pathname}/edit/${e.id}`}
										>
											<i className="fa-solid fa-pen-to-square text-green"></i>
										</Link>
									</td>
									<td className="py-3 px-10 text-red hover:cursor-pointer">
										<i
											className="fa-solid fa-trash"
											onClick={async () => {
												await axios.delete(
													`/data/${e.id}`
												);
												await axios
													.get("/data")
													.then((r) => {
														setData(r.data);
													});
											}}
										></i>
									</td>
								</tr>
							)
						);
					})}
				</tbody>
			</table>
			<Outlet />
		</div>
	);
};

export default Admin;
