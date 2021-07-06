import "./card.scss";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="title">{props.title}</div>
      <div className="likes">{props.likes}</div>
      <div className="comments">{props.comments}</div>
    </div>
  );
};

export default Card;
