import UseEffectProp from "../components/UseEffectProp";
import { useState } from "react";

function AppUseEffect2() {
	// useState -> nume
	// un input, la onChange -> modifica variabila de stare "nume"

	const [nume, setNume] = useState("Tudor");

	return (
		<div>
			Aplicatia useEffect 2
			<input
				value={nume}
				onChange={(event) => {
					setNume(event.target.value);
				}}
			/>
			<UseEffectProp nume={nume} />
		</div>
	);
}

export default AppUseEffect2;
