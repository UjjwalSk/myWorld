import React from "react";

const ContactUs = () => {
	const s1 =
		"w-72 rounded py-2 px-[14px] text-black text-md border border-silver";
	const s2 =
		"pt-7 mx-3 fa-2xl fa-brands text-white-900 hover:text-black hover:drop-shadow-md hover:cursor-pointer ";
	return (
		<div className="flex flex-col justify-center items-center text-center text-black">
			<div className="flex flex-row bg-metal rounded-lg shadow-xl w-max h-max mt-7">
				<div>
					<section className="w-92">
						<form
							className="rounded-lg p-8 shadow-xl w-max bg-white-900"
							action="/"
						>
							<h1 className="text-2xl mb-6 font-bold">
								GET IN TOUCH
							</h1>
							<div className="mb-6">
								<input
									type="text"
									placeholder="Your Name"
									className={s1}
								/>
							</div>
							<div className="mb-6">
								<input
									type="email"
									placeholder="Your Email"
									className={s1}
								/>
							</div>
							<div className="mb-6">
								<input
									type="text"
									placeholder="Your Phone"
									className={s1}
								/>
							</div>
							<div className="mb-6">
								<textarea
									rows="4"
									placeholder="Your Message"
									className="
                        w-72
                        rounded
                        py-2
                        px-[14px]
                        text-black text-md
                        border border-silver
                        resize-none
                        "
								></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="
                        w-72
                        text-white-900
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-80
                        bg-metal
                        "
								>
									Send Message
								</button>
							</div>
						</form>
					</section>
				</div>
				<div className="flex flex-col justify-center items-center w-max px-10 py-5 text-white-900 text-center">
					<div className="flex flex-row justify-center items-start">
						<div className="w-2/6">
							<i className="fa-solid fa-house fa-xl"></i>
							<p className="my-4">
								Chandigarh-Patiala NH-64, Rajpura, Punjab 140401
							</p>
						</div>

						<div className="w-2/6">
							<i className="fa-solid fa-tty fa-xl"></i>
							<p className="my-4">(+91)812 414 2573</p>
						</div>

						<div className="w-2/6">
							<i className="fa-regular fa-envelope fa-xl"></i>
							<p className="my-4">myWorld@outlook.com</p>
						</div>
					</div>

					<iframe
						title="GMap"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1749715517158!2d76.6575891147718!3d30.51609110309301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1664951064118!5m2!1sen!2sin"
						className="rounded shadow-lg mb-2"
						width="100%"
						height="70%"
						allowFullScreen
					></iframe>
					<div>
						<i className={s2 + "fa-facebook"}></i>
						<i className={s2 + "fa-instagram"}></i>
						<i className={s2 + "fa-linkedin"}></i>
						<i className={s2 + "fa-twitter"}></i>
						<i className={s2 + "fa-youtube"}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
