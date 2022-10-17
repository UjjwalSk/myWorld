import React from "react";
import { Link } from "react-router-dom";
import axios from "./Api";

const CrudTable = (props) => {
	return (
		<div>
			<table className="text-center w-8/12 text-xl shadow-xl border-t-4 border-purple rounded-lg dark:text-white-900 dark:drop-shadow-dark-2xl">
				<thead>
					<tr>
						{props.head.map((e, i) => {
							return (
								<th key={i} className="py-3 px-6">
									{e}
								</th>
							);
						})}
					</tr>
					<tr>
						<td>
							<i className="fa-solid fa-magnifying-glass relative"></i>
						</td>
						<td colSpan={5}>
							<input
								placeholder="Search by blog title"
								className="w-full rounded-9 pl-3 pr-10 py-2 float-left border-none outline-none dark:bg-midnight"
								type="text"
								onChange={props.filter}
							/>
						</td>
					</tr>
				</thead>
				<tbody className="p-3">
					{props.data &&
						props.data.map(
							(e, i) =>
								i > 0 && (
									<tr
										key={i}
										className="hover:bg-purple hover:text-white-900 p-3"
									>
										<td className="py-3 px-10">{i}</td>
										<>
											{e.map((f) => (
												<td className="py-3 px-10">
													{f}
												</td>
											))}
										</>
										<td className="py-3 px-10 text-red hover:cursor-pointer">
											<Link
												to={
													props.myPath
														? props.myPath
														: `${props.path}/edit/${i}`
												}
											>
												{" "}
												<i className="fa-solid fa-pen-to-square text-green"></i>
											</Link>
										</td>
										<td className="py-3 px-10 text-red hover:cursor-pointer">
											<i
												className="fa-solid fa-trash"
												onClick={() => props.delete(i)}
											></i>
										</td>
									</tr>
								)
						)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
