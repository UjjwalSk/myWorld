import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import avatar from "../assets/default.png";
import axios from "./Api";

const Auth = (props) => {
	const [title, setTitle] = useState("");
	const [flag, setFlag] = useState("");
	const { handle } = useParams();
	const [uname, setUname] = useState("");
	const [mail, setMail] = useState("");
	const [pass, setPass] = useState("");
	const [image, setImage] = useState(avatar);
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			props.set();
			navigate(`/user/${loggedInUser}`);
		}
	}, []);

	const readImage = (e) => {
		if (e.target.files && e.target.files[0]) {
			const name = e.target.files[0].name;
			var reader = new FileReader();

			console.log(e.target.files[0]);
			reader.onload = function (e) {
				setImage(e.target.result);
			};

			reader.readAsDataURL(e.target.files[0]);
		}
	};

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
			img: image,
			blogs: [],
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
				<div className="bg-white-900 rounded-xl p-6 myForm drop-shadow-2xl pb-10 dark:drop-shadow-dark-2xl">
					<form
						className="space-y-7"
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
						<div className="w-full flex flex-column">
							<div className="space-y-7 max-w-sm">
								{!flag && (
									<input
										className="w-full p-4 text-sm border border-silver rounded"
										type="text"
										placeholder="Username"
										required
										onChange={(e) =>
											setUname(e.target.value)
										}
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
								{!flag && (
									<div className="text-sm">
										<input
											className="p-4 text-sm border border-silver rounded"
											type="checkbox"
											id="check"
											required
										/>{" "}
										<label for="check">
											I agree to the terms and conditions
											and the privacy policy
										</label>
									</div>
								)}
							</div>
							{!flag && (
								<div className="file-input ml-5">
									<img
										className="uploadedImage border border-silver rounded-[50%]"
										src={image}
										alt=""
									/>
									<div>
										<input
											type="file"
											name="file-input"
											id="file-input"
											className="finput"
											onChange={(e) => readImage(e)}
										/>
										<br />
										<label
											className="flabel"
											for="file-input"
										>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="upload"
												className="svg-inline--fa fa-upload fa-w-16"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
												></path>
											</svg>
											<span>Upload image</span>
										</label>
									</div>
								</div>
							)}
						</div>
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
