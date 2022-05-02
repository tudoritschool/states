import { useState, useEffect } from "react";

function UseEffectProp({ nume }) {
	const [prescurtare, setPrescurtare] = useState(nume.slice(0, 1) + ".");

	useEffect(() => {
		setPrescurtare(nume.slice(0, 1) + ".");
		console.log(nume);
	}, [nume]);

	return (
		<div>
			Use Effect Prop
			<br />
			{prescurtare}
		</div>
	);
}

export default UseEffectProp;
