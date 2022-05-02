import ComponentaIntermediara from "../components/ComponentaIntermediara";
import ComponentaAfisare from "../components/ComponentaAfisare";
import { useState } from "react";

function App4() {
	const [counter, setCounter] = useState(0);

	const onAddCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>COMPONENTA PRINCIPALA</h1>
			<ComponentaAfisare counter={counter} />
			<ComponentaIntermediara handleAddCounter={onAddCounter} />
		</div>
	);
}

export default App4;
