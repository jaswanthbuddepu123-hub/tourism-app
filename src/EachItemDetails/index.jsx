import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EachItemDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  let presentData;
  if (category === "busdetails") {
    presentData = JSON.parse(localStorage.getItem("finalBusData"));
  } else {
    presentData = JSON.parse(localStorage.getItem("finalTrainData"));
  }

  const imageLink =
    category === "busdetails"
      ? "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
      : "https://thumbs.dreamstime.com/b/beautiful-railway-station-modern-red-commuter-train-suns-high-speed-motion-blur-effect-colorful-sunset-nuremberg-73321720.jpg";

  const [status, setStatus] = useState(presentData[id].status);
  const {
    from,
    to,
    arrival,
    departure,
    seats,
    operator,
    rating,
    contact,
    mail,
  } = presentData[id];

  const onclickBookButton = () => {
    const result = presentData.map((each) => {
      if (each.id === parseInt(id)) {
        return { ...each, status: !status };
      } else {
        return each;
      }
    });
    if (category === "busdetails") {
      localStorage.setItem("finalBusData", JSON.stringify(result));
      const value = JSON.parse(localStorage.getItem("finalBusData"))[id].status;
      setStatus(value);
    } else {
      localStorage.setItem("finalTrainData", JSON.stringify(result));
      const value = JSON.parse(localStorage.getItem("finalTrainData"))[id]
        .status;
      setStatus(value);
    }
  };

  const onclickBackButton = () => {
    navigate(`/${category}`, { replace: true });
  };

  return (
    <>
      <div className="ticketPage">
        <div className="travelCard">
          <div className="imageContainer">
            <img src={imageLink} alt="image" className="travelImage" />
          </div>
          <div className="detailsContainer">
            <div className="detailRow">
              <p className="detailLabel">Operator : {operator}</p>
            </div>
            <div className="detailRow">
              <p className="detailLabel">
                Route : {from} - {to}
              </p>
            </div>
            <div className="detailRow">
              <p className="detailLabel">
                Timings : {arrival} - {departure}
              </p>
            </div>
            <div className="detailRow">
              <p className="detailLabel">Available Seats : {seats}</p>
            </div>
            <div className="detailRow">
              <p className="detailLabel">Contact : {contact}</p>
            </div>
            <div className="detailRow">
              <p className="detailLabel">Mail : {mail}</p>
            </div>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="backBtn"
              onClick={onclickBackButton}
            >
              Back
            </button>
            {status ? (
              <button className="bookedBtn">Booked</button>
            ) : (
              <button className="bookBtn" onClick={onclickBookButton}>
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default EachItemDetails;
