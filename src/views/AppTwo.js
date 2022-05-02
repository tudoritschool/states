import { useState } from "react";

function AppTwo() {
	const [elev, setElev] = useState({ name: "Ionut", note: 4 });

	const onNoteChange = () => {
		// elev.note = 10
		// elev = {name:"Ionut", note: 10}

		// Varianta 1
		// setElev({ ...elev, note: 10 });
		// Varianta 2
		const copyElev = { ...elev };
		copyElev.note = 10;
		setElev(copyElev);
	};

	const onInputChange = (e) => {
		console.log(e.target.value);
		setElev({ ...elev, name: e.target.value });
	};

	return (
		<>
			<h1>{elev.name}</h1>
			<p>{elev.note}</p>
			<button onClick={onNoteChange}>Creste nota!</button>

			<input type={"text"} onChange={onInputChange} />
		</>
	);
}

export default AppTwo;
