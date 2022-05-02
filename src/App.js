import AppOne from "./views/AppOne";
import AppTwo from "./views/AppTwo";
import App3 from "./views/App3";
import App4 from "./views/App4";
import { useState } from "react";
function App() {
	const [appNumber, setAppNumber] = useState(4);

	const onInputChange = (e) => {
		setAppNumber(parseInt(e.target.value));
	};
	return (
		<div>
			<input value={appNumber} type={"number"} onChange={onInputChange} />
			<br />
			{appNumber === 1 && <AppOne />}
			{appNumber === 2 && <AppTwo />}
			{appNumber === 2 && <AppTwo />}
			{appNumber === 3 && <App3 />}
			{appNumber === 4 && <App4 />}
		</div>
	);
}

export default App;
