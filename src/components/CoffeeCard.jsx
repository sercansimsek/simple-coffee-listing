export const CoffeeCard = ({ coffee }) => {
  return (
    <div>
      <li>
        <img src={coffee.image} alt={coffee.name} />
        <p>{coffee.name}</p>
        <p>{coffee.price}</p>
        <span>
          <img src="../assets/images/Star.svg" alt="star" /> {coffee.rating} (
          {`${coffee.votes} votes`})
        </span>
      </li>
    </div>
  );
};
