import React from "react";
import { InputList } from "./InputList";

export function Home() {
	return (
		<div className="container-md">
			<div className="row justify-content-center mb-4">
				<h1 className="display-3">{`To Do's`}</h1>
			</div>

			<div className="row justify-content-center">
				<div className="col-md-6">
					<InputList />
				</div>
			</div>
		</div>
	);
}
