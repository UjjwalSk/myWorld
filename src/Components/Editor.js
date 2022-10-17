import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useParams, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import axios from "./Api";

const Editor = (props) => {
	const { use, uid } = useParams();
	const [data, setData] = useState("");
	const navigate = useNavigate();
	const submit = async (e) => {
		e.preventDefault();
		console.log("asdjaopdjasopjdo");
		if (use == 0) {
			await axios.get(`/data/${uid}`).then((r) => {
				r = r.data;
				r.blogs.push(data);
			});
		}
		// await axios.put(`/data/${id}`, {
		// 	uname: data.uname,
		// 	mail: data.mail,
		// 	pass: data.pass,
		// });
		// navigate("/user/admin");
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
				onClick={() => console.log("apple")}
			>
				Cancel
			</button>
			<ReactQuill
				className="m-5"
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
						// toggle to add extra line breaks when pasting HTML:
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
