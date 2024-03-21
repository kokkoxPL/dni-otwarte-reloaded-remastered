import { ChangeEvent, useState } from "react";

export default function Config() {
	const NUM_COMPUTERS = 19;
	const [selected, setSelected] = useState(localStorage.getItem("computer") || 0);

	function changeSelected(e: ChangeEvent<HTMLSelectElement>) {
		setSelected(e.target.value);
		localStorage.setItem("computer", e.target.value);
	}

	return (
		<div>
			<br />
			<br />
			<br />
			<h1>Config 🔧</h1>
			<p>Computer no: </p>{" "}
			<select value={selected} onChange={changeSelected}>
				{[...Array(NUM_COMPUTERS)].map((r, i) => (
					<option key={i} value={i}>
						{i + 1}
					</option>
				))}
			</select>
		</div>
	);
}