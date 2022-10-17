import axios from "./Api";
import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import CrudTable from "./CrudTable";

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

	const deleteData = async (i) => {
		await axios.delete(`/data/${i}`);
		await axios.get("/data").then((r) => {
			setData(r.data);
		});
	};

	return (
		<div className="shadow-xl border-t-4 border-purple rounded-lg mt-20 dark:text-white-900 dark:drop-shadow-dark-2xl">
			<CrudTable
				head={["ID", "UserName", "Email", "Password", "Edit", "Delete"]}
				data={data.map((e) => [e.uname, e.mail, e.pass])}
				filter={filter}
				path={path.pathname}
				delete={deleteData}
			/>
			<Outlet />
		</div>
	);
};

export default Admin;
