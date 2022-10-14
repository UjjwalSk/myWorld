import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "./Api";

const Auth = (props) => {
	const [title, setTitle] = useState("");
	const [flag, setFlag] = useState("");
	const { handle } = useParams();
	const [uname, setUname] = useState("");
	const [mail, setMail] = useState("");
	const [pass, setPass] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			props.set();
			navigate(`/user/${loggedInUser}`);
		}
	}, []);

	const checkToPost = async (response, formData) => {
		const user = response.find((e) => e.uname === formData.uname);
		const mail = response.find((e) => e.mail === formData.mail);
		if (Boolean(user || mail)) {
			alert(`${user ? "Username" : "Email"} already exists !!`);
		} else {
			await axios.post("/data", formData);
			const parent = document.getElementsByClassName("myForm")[0];
			parent.innerHTML = "";
			const para = document.createElement("p");
			const node = document.createTextNode("Thanks for signing up ✅!!");
			para.classList.add("text-center", "font-bold", "text-2xl");
			para.appendChild(node);
			parent.appendChild(para);
		}
	};

	const submitForm = async (e) => {
		e.preventDefault();

		const user = {
			uname: uname,
			mail: mail,
			pass: pass,
		};

		await axios.get("/data").then((res) => checkToPost(res.data, user));
	};
	const logIn = (e) => {
		axios
			.get(`/data?mail=${mail}`)
			.then((result) => {
				result = result.data[0];
				if (result.mail === mail && result.pass === pass) {
					props.set();
					localStorage.setItem("user", result.uname);
					navigate(`/user/${result.uname}`);
				} else {
					alert(
						"The email or password you entered is incorrect.\nPlease try again."
					);
				}
			})
			.catch((e) => {
				alert(
					"The email or password you entered is incorrect.\nPlease try again."
				);
			});

		e.preventDefault();
	};
	React.useEffect(() => {
		setTitle(handle == "login" ? "Log In" : "Sign Up");
		setFlag(handle == "login");
	}, [handle]);

	return (
		<div>
			<section className="flex justify-center items-center h-[80vh]">
				<div className="max-w-md w-full bg-white-900 rounded-xl p-6 myForm drop-shadow-2xl pb-10 dark:drop-shadow-dark-2xl">
					<form
						className="space-y-4"
						action=""
						onSubmit={flag ? logIn : submitForm}
					>
						<div className="mb-4 text-center">
							<p className="text-2xl font-bold mb-1">{title}</p>
							{flag ? (
								<Link
									className="hover:underline"
									to="/account/signup"
								>
									New User? Create Account
								</Link>
							) : (
								"Join our community"
							)}
						</div>
						{!flag && (
							<input
								className="w-full p-4 text-sm border border-silver rounded"
								type="text"
								placeholder="Username"
								required
								onChange={(e) => setUname(e.target.value)}
							/>
						)}
						<input
							className="w-full p-4 text-sm border border-silver rounded"
							type="email"
							placeholder="Email"
							required
							onChange={(e) => setMail(e.target.value)}
						/>
						<input
							className="w-full p-4 text-sm border border-silver rounded"
							type="password"
							placeholder="Password"
							required
							onChange={(e) => setPass(e.target.value)}
						/>
						<button
							type="submit"
							className="w-full py-4 bg-metal text-white-900 hover:bg-purple rounded text-sm font-bold"
						>
							{title}
						</button>
						{flag && (
							<div className="text-sm text-blue-600 hover:underline text-center">
								<Link to="/">Forgot password?</Link>
							</div>
						)}	
					</form>
				</div>
			</section>
			<Outlet />
		</div>
	);
};

export default Auth;
