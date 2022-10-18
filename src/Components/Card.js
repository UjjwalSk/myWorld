import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<div
			href="#"
			className={`flex items-center rounded-lg border-r-4 border-metal h-max-[126px] flex-row max-w-xl overflow-hidden shadow-xl bg-white-900 ${
				props.choice % 2 ? "self-end" : "self-start"
			}`}
		>
			<img
				className="h-126 rounded-t-lg w-100 rounded-none rounded-l-lg drop-shadow-2xl pointer-events-none"
				src={`https://picsum.photos/250?t=${Math.random()}`}
				alt=""
			/>
			<div className="flex flex-col justify-between p-10 drop-shadow-2xl text-center">
				<Link to="/blog" state={{ data: props.raw }}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 drop-shadow-2xl hover:text-metal hover:cursor-pointer">
						{props.title}
					</h5>
				</Link>
				<p
					className="mb-3 font-normal text-gray-700"
					dangerouslySetInnerHTML={{
						__html:
							props.content.length < 200
								? props.content
										.split(" ")
										.splice(0, 15)
										.join(" "):"" + "....",
					}}
				></p>
			</div>
		</div>
	);
};

export default Card;
