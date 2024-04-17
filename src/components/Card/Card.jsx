import "./card.css";

export default function Card({ image, name, value, bool }) {
  if (bool === false)
    return (
      <div className="card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-name">{name}</h2>
        <h3 className="card-value">{value}</h3>
      </div>
    );
  else if (bool === true)
    return (
      <div className="drawn-card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-name">{name}</h2>
      </div>
    );
}
