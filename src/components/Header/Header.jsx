import { CoffeeList } from '../CoffeeList'

export const Header = () => {
	return (
		<div className="header">
			<h1 className="header-title">Our Collection</h1>
			<p className="header-description">
				Introducing our Coffee Collection, a selection of unique coffees from
				different roast types and origins, expertly roasted in small batches and
				shipped fresh weekly.
			</p>

      <CoffeeList />
		</div>
	);
};
