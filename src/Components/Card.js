import React from "react";

const Card = (props) => {
	return (
		<div
			href="#"
			className={`flex items-center rounded-lg border-r-4 border-metal flex-row max-w-xl shadow-xl bg-white-900 ${
				!props.uname && (props.choice % 2 ? "self-end" : "self-start")
			}`}
		>
			<img
				className="h-126 rounded-t-lg w-100 rounded-none rounded-l-lg drop-shadow-2xl pointer-events-none"
				src={`https://picsum.photos/250?t=${Math.random()}`}
				alt=""
			/>
			<div className="flex flex-col justify-between p-10 drop-shadow-2xl text-center">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 drop-shadow-2xl">
					{props.uname ? `Username: ${props.uname}` : props.title}
				</h5>
				<p className="mb-3 font-normal text-gray-700  ">
					{props.umail ? `Mail: ${props.umail}` : props.content}
				</p>
			</div>
		</div>
	);
};

export default Card;
