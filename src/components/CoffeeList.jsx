import { useEffect, useState } from "react";
import { getData } from "../api/data";
import { CoffeeCard } from "./CoffeeCard/CoffeeCard";

export const CoffeeList = () => {
	const [coffeeData, setCoffeeData] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const loadData = async () => {
		try {
			const dataFromServer = await getData();
			setCoffeeData(dataFromServer);
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div className="container">
			<ul>
				{coffeeData.map((coffee) => (
					<CoffeeCard coffee={coffee} key={coffee.id} />
				))}
			</ul>
		</div>
	);
};
