// Card.js

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
