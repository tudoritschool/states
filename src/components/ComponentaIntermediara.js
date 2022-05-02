import ComponentaActiune from "./ComponentaActiune";
function ComponentaIntermediara({ handleAddCounter }) {
	return (
		<div>
			<h2>ComponentaIntermediara</h2>
			<ComponentaActiune handleAddCounter={handleAddCounter} />
		</div>
	);
}

export default ComponentaIntermediara;
