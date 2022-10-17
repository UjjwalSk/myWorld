import React, { useState, useEffect } from "react";
import data from "../Components/cardContent";
import axios from "../Components/Api";
import Card from "../Components/Card";
import map from "../assets/map.svg";
import ReactVivus from "react-vivus";
import svg from "../assets/term.svg";
import Typewriter from "typewriter-effect";

const Home = () => {
	setTimeout(function () {
		document.getElementById("b1").style.fill = "#4261f1";
		document.getElementById("b2").style.fill = "#4261f1";
		document.getElementById("g1").style.fill = "#40e137";
		document.getElementById("g2").style.fill = "#40e137";
		document.getElementById("bl").style.fill = "#902bf5";
	}, 2000);
	const [data, setData] = useState("");
	useEffect(() => {
		axios.get("/data").then((r) => {
			r = r.data.splice(1);
			r = r.map((e) => [...e.blogs]);
			setData(r.flat());
			console.log(r.data);
		});
	}, []);

	return (
		<>
			<div className="flex flex-col p-12">
				<div className="flex items-center justify-center">
					<ReactVivus
						id="fooo"
						option={{
							file: svg,
							animTimingFunction: "EASEINOUT",
							type: "scenario",
							onReady: console.log,
							duration: 500,
						}}
						style={{ height: "550px", width: "550px" }}
						callback={console.log}
					/>
					<div className="text-7xl font-bold text-metal text-center leading-[4.7rem] mx-12 mb-10 dark:text-white-400">
						<Typewriter
							onInit={(typewriter) => {
								typewriter

									.typeString("Hi,<br/>Ujjwal Here")
									.pauseFor(500)
									.deleteAll()
									.typeString(
										"Welcome<br/>To<br/>MyWorld<br/>▼"
									)
									.start();
							}}
						/>
					</div>
				</div>
				{data &&
					data.map((e, i) => (
						<Card
							key={i}
							title={e.title}
							content={e.content}
							choice={i}
							style={{ zIndex: 2 }}
						/>
					))}
			</div>
			<img
				src={map}
				alt=""
				className="absolute -top-[60px] right-[80px] -z-60 pointer-events-none"
			/>
		</>
	);
};

export default Home;
