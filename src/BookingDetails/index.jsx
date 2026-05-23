import "./index.css";

const BookingDetails = (props) => {
  const { details, setNeed } = props;
  const { from, to, arrival, departure, status, category, operator, id } =
    details;
  const overallBusData = JSON.parse(localStorage.getItem("finalBusData"));
  const overallTrainData = JSON.parse(localStorage.getItem("finalTrainData"));
  const onclickCancelTicket = () => {
    if (category === "busdetails") {
      const updating = overallBusData.map((eachBus) => {
        if (eachBus.id === id) {
          return {
            ...eachBus,
            status: !status,
          };
        } else {
          return eachBus;
        }
      });
      localStorage.setItem("finalBusData", JSON.stringify(updating));
      setNeed((prev) => !prev);
    } else {
      const updating = overallTrainData.map((eachTrain) => {
        if (eachTrain.id === id) {
          return {
            ...eachTrain,
            status: !status,
          };
        } else {
          return eachTrain;
        }
      });
      localStorage.setItem("finalTrainData", JSON.stringify(updating));
      setNeed((prev) => !prev);
    }
  };
  return (
    <li className="ticketCard">
      <h2 className="ticketTitle">
        {from} - {to}
      </h2>
      <p className="ticketText">Operator :- {operator}</p>
      <p className="ticketText">Arrival :- {arrival}</p>
      <p className="ticketText">Departure :- {departure}</p>
      <button className="bookBtn" onClick={onclickCancelTicket}>
        Cancel Tickets{" "}
      </button>
    </li>
  );
};
export default BookingDetails;
