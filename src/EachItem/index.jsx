import "./index.css";
import { useNavigate } from "react-router-dom";

const EachItem = (props) => {
  const navigate = useNavigate();
  const { details } = props;
  const { from, to, arrival, departure, seats, id, category } = details;
  const onclickViewDetails = () => {
    navigate(`/${category}/${id}`, { replace: true });
  };
  return (
    <li className="ticketCard">
      <h2 className="ticketTitle">
        {from} - {to}
      </h2>
      <p className="ticketText">Arrival :- {arrival}</p>
      <p className="ticketText">Departure :- {departure}</p>
      <p className="ticketText">Seats Available :- {seats}</p>
      <button className="bookBtn" onClick={onclickViewDetails}>
        View details
      </button>
    </li>
  );
};
export default EachItem;
