import { useState } from "react";
import TimeTravel from "../components/TimeTravel";

function AppOne() {
	// Cream un state pentru age, il afisam in pagina,
	// si pe un buton adaugam 1 an la age
	const [age, setAge] = useState(20);

	const onAgeIncrease = () => {
		// age = age + 1
		setAge(age + 1);
	};

	const onAgeDecrease = () => {
		setAge(age - 5);
	};

	const getElements = () => {
		if (age > 50) {
			return <p> Ai ajuns departe!</p>;
		} else {
			return <p>Inca mai ai!</p>;
		}
	};

	return (
		<>
			<h1>Prima aplicatie</h1>
			<p>{age}</p>
			<button onClick={onAgeIncrease}>Creste varsta</button>
			{age > 30 ? (
				<p className='TEST'> Ai ajuns la peste 30</p>
			) : (
				<p> Inca esti tanar!</p>
			)}
			{getElements()}
			<TimeTravel handleAgeDecrease={onAgeDecrease} />
		</>
	);
}

export default AppOne;

// Cream o componenta noua => Reset Age
// In interioriul ei vom avea un <h1> si un <button>
// Care va reseta varsta (20)
