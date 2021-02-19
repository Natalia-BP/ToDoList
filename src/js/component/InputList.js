import React, { useState } from "react";

export const InputList = () => {
	// Variables tareas
	let [list, setList] = useState("");
	let [array, setArray] = useState([]);

	// Variable hover
	let [trash, setTrash] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		array.push(list);
		setArray([...array]);
		setList("");
	};

	// Borrar item
	const removeItem = ind => {
		let result = array.filter(function(elem, i) {
			return ind !== i;
		});
		setArray([...result]);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<ul className="list-group">
					<input
						className="inToDoForm form-control-lg list-group-item"
						type="text"
						value={list}
						onChange={input => setList(input.target.value)}
						placeholder="Write your to do's here"
					/>
					{array.map((item, index) => {
						return (
							<li
								className="list-group-item d-flex justify-content-between align-items-center"
								key={index}
								onMouseEnter={() => {
									setTrash(true);
								}}
								onMouseLeave={() => {
									setTrash(false);
								}}>
								{item}
								<span role="button">
									<i
										className={
											trash
												? "fas fa-trash-alt"
												: "d-none"
										}
										onClick={() => {
											removeItem(index);
										}}></i>
								</span>
								<span className="badge badge-primary badge-pill">
									{array.indexOf(item)}
								</span>
							</li>
						);
					})}
				</ul>
				<div className="row justify-content-center mt-5">
					<button className="btn btn-lg btn-primary" type="submit">
						Agregar tarea
					</button>
				</div>
			</form>
		</>
	);
};
