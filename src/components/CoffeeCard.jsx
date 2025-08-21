export const CoffeeCard = ({ coffee }) => {
	return (
		<div className="bg-prison-600">
			<li>
				<img src={coffee.image} alt={coffee.name} />
				<p>{coffee.name}</p>
				<p>{coffee.price}</p>

				{coffee.rating ? (
					<div>
						<img src="../assets/images/Star.svg" alt="star" />
						<p>{coffee.rating}</p>
						<p>{`${coffee.votes} votes`}</p>
					</div>
				) : (
					<div>
						<img src="../assets/images/Star_fill.svg" alt="empty-star" />
						<p>No ratings</p>
					</div>
				)}
			</li>
		</div>
	);
};
