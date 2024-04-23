import "./card.css";

export default function Card({ image, name, value, oldCard }) {
  if (oldCard === false)
    return (
      <div className="drawn-card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-name">{name}</h2>
        <h3 className="card-value">{value}</h3>
      </div>
    );
  else
    return (
      <div className="open-card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-name">{name}</h2>
      </div>
    );
}
