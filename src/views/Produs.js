import { useState, useEffect } from "react";

function Produs() {
	const [produs, setProdus] = useState(null);

	const getProduct = async () => {
		const productRaw = await fetch("https://fakestoreapi.com/products/1");
		const produs = await productRaw.json();
		setProdus(produs);
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<div>
			{produs ? (
				<>
					<h1>{produs.title}</h1>
					<h2>{produs.category}</h2>
					<p>{produs.description}</p>
				</>
			) : (
				<div> Loading ...</div>
			)}
		</div>
	);
}

export default Produs;
