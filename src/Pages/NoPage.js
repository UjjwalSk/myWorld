import React from "react";
import gif from "../assets/404.gif";

const NoPage = () => {
	return (
		<div className="flex justify-center items-center m-32 font-bold text-5xl text-red">
			<img src={gif} width="100px" alt="" /> &nbsp;&nbsp;Not Found
		</div>
	);
};

export default NoPage;
