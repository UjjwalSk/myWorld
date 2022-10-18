import React from "react";
import { useLocation } from "react-router-dom";

const Blog = (props) => {
	const location = useLocation();
	const { data } = location.state;

	return (
		<div className="flex flex-col justify-center items-center text-center p-9 dark:text-white-900">
			<h1 className="text-4xl font-bold underline decoration-double">
				{data[0].title}
			</h1>
			<div className="w-9/12 shadow-2xl p-10 text-justify m-2">
				<span className="float-right text-center">
					<img
						src={data[1]}
						width="220"
						alt=""
						className="uploadedImage ml-5 rounded-[50%] shadow-2xl"
					/>
					<br />
					<p>
						Author: <b>{data[0].author}</b>
					</p>
					<p>
						~ <b>{data[0].date}</b>
					</p>
				</span>
				<p
					dangerouslySetInnerHTML={{
						__html: data[0].content,
					}}
				></p>
			</div>
		</div>
	);
};

export default Blog;
