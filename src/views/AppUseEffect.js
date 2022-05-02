import { useEffect, useState } from "react";

function AppUseEffect() {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		console.log("A rulat o singura data!");
	}, []);

	useEffect(() => {
		console.log("a crescut counter-ul", counter);

		if (counter % 5 === 0) {
			setCounter2(counter2 + 1);
		}
	}, [counter]);

	useEffect(() => {
		console.log("counters changed", counter, counter2);
	}, [counter, counter2]);

	const addCounter = () => {
		setCounter(counter + 1);

		// counter = counter + 1
		// counter += 1
	};

	return (
		<div>
			Applicatie Use Effect
			<button onClick={addCounter}>Creste counter!</button>
			{counter} -- {counter2}
		</div>
	);
}

export default AppUseEffect;
