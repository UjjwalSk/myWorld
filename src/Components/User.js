import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Card";
import axios from "./Api";
import Admin from "./Admin";
import CrudTable from "./CrudTable";
import { Link } from "react-router-dom";

const User = () => {
	const { uname } = useParams();
	const [cred, setCred] = useState("");
	const [data, setData] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("user") != uname) {
			navigate("404");
		}
		axios.get(`/data?uname=${uname}`).then((result) => {
			setCred(result.data[0]);
		});
	}, []);

	useEffect(
		(e) => {
			if (cred.blogs) {
				let temp = cred.blogs.map((e) => [e.title, e.date]);
				temp.unshift(1);
				setData(temp);
			}
		},
		[cred]
	);

	const filter = async (e) => {
		await axios.get(`/data?uname=${uname}`).then((r) => {
			let key = e.target.value.toLowerCase();
			let filterData = r.data[0].blogs.filter((x) => {
				return x.title.toLowerCase().indexOf(key) !== -1;
			});
			setCred({ ...cred, blogs: [...filterData] });
		});
	};

	const deleteData = async (i) => {
		cred && cred.blogs.splice(i - 1, 1);
		await axios.put(`/data/${cred.id}`, { ...cred });
		console.log(cred);
		axios.get(`/data?uname=${uname}`).then((result) => {
			setCred(result.data[0]);
		});
	};

	return (
		<div className="flex flex-col content-center items-center justify-center mt-8 mb-20 dark:text-white-900">
			{cred.uname === "admin" ? (
				<Admin />
			) : (
				<>
					<div
						href="#"
						className="flex items-center text-center items-center justify-evenly rounded-lg border-r-4 border-metal flex-row w-screen"
					>
						<div>
							Username:{" "}
							<h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 drop-shadow-2xl">
								{cred.uname}
							</h5>
						</div>
						<div>
							Mail:{" "}
							<h5 className="mb-3 text-lg font-normal text-gray-700">
								{cred.mail}
							</h5>
						</div>
						<div>
							<Link to={`/editor/0/${cred.id}/1`}>
								<h1 className="mx-2 px-9 py-2 font-semibold text-base rounded-full shadow-sm bg-metal text-white-900 hover:drop-shadow-md hover:opacity-80 hover:cursor-pointer">
									Create New
								</h1>
							</Link>
						</div>
						<img
							className="uploadedImage rounded-[50%] w-[220px] drop-shadow-2xl pointer-events-none"
							src={cred.img}
							alt=""
						/>
					</div>
					<h5 className="my-5 text-3xl font-bold tracking-tight text-gray-900 drop-shadow-2xl">
						My Blogs
					</h5>
					<CrudTable
						head={["ID", "Blog Title", "Date", "Edit", "Delete"]}
						data={data}
						filter={filter}
						myPath={`/editor/1/${cred.id}`}
						delete={deleteData}
					/>
				</>
			)}
		</div>
	);
};

export default User;
