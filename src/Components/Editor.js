import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useParams, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import axios from "./Api";

const Editor = () => {
	const { use, uid, blogID } = useParams();
	const [data, setData] = useState("");
	const [title, setTitle] = useState("");
	const [uname, setUname] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`/data/${uid}`).then((r) => {
			setUname(r.data.uname);
			if (use == 1) {
				r = r.data.blogs[blogID];
				setTitle(r.title);
				setData(r.content);
			}
		});
	}, []);

	const submit = async (e) => {
		e.preventDefault();
		await axios.get(`/data/${uid}`).then(async (r) => {
			r = r.data;
			const obj = {
				title: title,
				content: data,
				date: new Date().toLocaleDateString(),
				author: r.uname,
			};
			use == 0 ? r.blogs.push(obj) : (r.blogs[blogID] = obj);
			await axios.put(`/data/${r.id}`, r);
			navigate(`/user/${r.uname}`);
		});
	};
	return (
		<div className="mx-3 text-center">
			<button
				onClick={submit}
				className="w-4/12 py-3 mx-2 bg-metal text-white-900 hover:bg-midnight rounded text-sm font-bold"
			>
				Save
			</button>
			<button
				className="w-4/12 py-3 mx-2 bg-red text-white-900 hover:bg-midnight rounded text-sm font-bold"
				onClick={() => navigate(`/user/${uname}`)}
			>
				{console.log(uname)}
				Cancel
			</button>
			<input
				className="block w-7/12 p-4 m-5 text-lg font-bold border border-silver rounded"
				type="text"
				placeholder="Title"
				value={title}
				required
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<ReactQuill
				className="m-5 dark:bg-white-900 dark:text-black"
				theme="snow"
				onChange={(e) => setData(e)}
				value={data}
				modules={{
					toolbar: [
						[{ header: "1" }, { header: "2" }, { font: [] }],
						[{ size: [] }],
						["bold", "italic", "underline", "strike", "blockquote"],
						[
							{ list: "ordered" },
							{ list: "bullet" },
							{ indent: "-1" },
							{ indent: "+1" },
						],
						["link", "image", "video"],
						["clean"],
					],
					clipboard: {
						matchVisual: false,
					},
				}}
				formats={[
					"header",
					"font",
					"size",
					"bold",
					"italic",
					"underline",
					"strike",
					"blockquote",
					"list",
					"bullet",
					"indent",
					"link",
					"image",
					"video",
				]}
				bounds={".app"}
				placeholder={"Write something"}
			/>
		</div>
	);
};

export default Editor;
