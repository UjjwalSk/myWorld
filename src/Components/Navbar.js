import React, { useState, useEffect } from "react";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
	const s1 =
		"hover:bg-white-900 hover:drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg";
	const s2 =
		"mx-2 px-9 py-2 font-semibold text-base rounded-full shadow-sm bg-metal text-white-900 hover:drop-shadow-md hover:opacity-80";
	const [theme, setTheme] = useState(0);
	const doc = document.documentElement.classList;
	useEffect((e) => {
		let t = localStorage.getItem("theme");
		if (!t) {
			localStorage.setItem("theme", 0);
		}
		t = localStorage.getItem("theme");
		setTheme(t);
		if (t == 1) {
			doc.add("dark");
		}
	}, []);
	return (
		<>
			<nav className="p-3 bg-white-900 sticky top-0 z-50 dark:bg-midnight dark:text-white-900">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-between">
						<Link to="/">
							<img
								className="h-11 w-auto mx-6"
								src={theme == 0 ? dark : light}
								alt="Your Company"
							/>
						</Link>
						<Link to="/" className={s1}>
							Home
						</Link>
						<Link to="/about" className={s1}>
							About
						</Link>
						<Link to="/contact" className={s1}>
							Contact Us
						</Link>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
							onClick={() => {
								localStorage.setItem(
									"theme",
									localStorage.getItem("theme") == 1 ? 0 : 1
								);
								setTheme(localStorage.getItem("theme"));
								if (theme == 0) {
									doc.add("dark");
								} else {
									doc.remove("dark");
								}
							}}
						>
							<i
								className={`fa-solid fa-lg fa-${
									theme == 0 ? "sun" : "moon"
								}`}
							></i>
						</button>
						{props.logIn ? (
							<>
								<Link
									to={`/user/${localStorage.getItem("user")}`}
									className={s2}
								>
									<i className="fa-solid fa-user"></i>
								</Link>
								<Link
									to="/"
									onClick={() => {
										props.set();
										localStorage.clear();
									}}
									className={s2}
								>
									Log Out
								</Link>
							</>
						) : (
							<>
								<Link to="/account/login/" className={s2}>
									Log In
								</Link>
								<Link to="/account/signup" className={s2}>
									Sign Up
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
