import "./card.css";

<<<<<<< Updated upstream
export default function Card({ image, name, value }) {
  const oldFirstCardValue = value;
  const oldSecondCardValue = value;
  const oldThirdCardValue = value;

  console.log(
    "value of old first card = ",
    oldFirstCardValue,
    "value of old second card = ",
    oldSecondCardValue,
    "value of old third card = ",
    oldThirdCardValue
  );

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <h3 className="card-value">
        total points :
        {Math.round(
          Number(oldFirstCardValue) +
            Number(oldSecondCardValue) +
            Number(oldThirdCardValue)
        )}
      </h3>
    </div>
  );
=======
export default function Card({ image, name, value, oldCard }) {
  if (oldCard === false)
    return (
      <div className="drawn-card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-name">{name}</h2>
        <h3 className="card-value">{value}</h3>
      </div>
    );
  else if (oldCard === true)
    return (
      <div className="open-card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-name">{name}</h2>
      </div>
    );
>>>>>>> Stashed changes
}
