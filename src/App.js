import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import NoPage from "./Pages/NoPage";
import Footer from "./Components/Footer";
import Auth from "./Components/Auth";
import User from "./Components/User";
import Edit from "./Components/Edit";
import Editor from "./Components/Editor";
import Blog from "./Components/Blog";
import "./App.css";

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(
		Boolean(localStorage.getItem("user"))
	);
	const change = () => {
		setLoggedIn(!isLoggedIn);
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Navbar set={change} logIn={isLoggedIn} />}
					>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<ContactUs />} />
						{!isLoggedIn && (
							<Route
								path="account/:handle"
								element={
									<Auth set={change} logIn={isLoggedIn} />
								}
							/>
						)}
						{isLoggedIn && (
							<>
								<Route path="/user/:uname" element={<User />} />
								<Route
									path="/user/admin/edit/:id"
									element={<Edit />}
								/>
								<Route
									path="/editor/:use/:uid/:blogID"
									element={<Editor />}
								/>
								<Route path="/blog" element={<Blog />} 	/>
							</>
						)}
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</>
	);
}
