import { useState } from "react";

function App3() {
	// const fruct = ["mere", "portocale", "cocos"]
	const [fructe, setFructe] = useState(["mere", "portocale", "cocos"]);
	const [clicks, setClicks] = useState([0, 0, 0]);
	const [inputText, setInputText] = useState("");

	const addFruct = () => {
		const newFructe = [...fructe];
		newFructe.push(inputText);
		setInputText("");
		setFructe(newFructe);

		const newClicks = [...clicks];
		newClicks.push(0);
		setClicks(newClicks);
	};

	const countClicks = (indexParametru) => {
		console.log("Click pe elementul", indexParametru);

		const newClicks = clicks.map((click, index) => {
			if (index !== indexParametru) {
				return click + 1;
			}
			return click;
		});

		setClicks(newClicks);
	};

	return (
		<div>
			<h1>Applicatia 3 - Liste</h1>
			<input
				value={inputText}
				type='text'
				onChange={(e) => {
					setInputText(e.target.value);
				}}
			/>
			<button onClick={addFruct}>Adauga in lista</button>
			<ol>
				{fructe.map((fruct, index) => {
					return (
						<li
							key={"fructe_" + index}
							onClick={() => {
								countClicks(index);
							}}>
							{fruct} <span style={{ color: "red" }}>{clicks[index]}</span>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default App3;
