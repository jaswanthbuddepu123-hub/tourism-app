import "./index.css";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const onclickBuses = () => {
    navigate("/busdetails", { replace: true });
  };
  const onclickTrains = () => {
    navigate("/traindetails", { replace: true });
  };
  return (
    <>
      <div className="bg-container">
        <div className="travel-card">
          <img
            src="https://t3.ftcdn.net/jpg/08/56/22/44/360_F_856224452_YSXPsJ3aNvgs1MfiSxTx1H3ui5b2oLoF.jpg"
            alt="Bus"
            className="travel-image"
          />
          <button className="travel-btn" onClick={onclickBuses}>
            Let's Explore Buses
          </button>
        </div>
        <div className="travel-card">
          <img
            src="https://c.ndtvimg.com/gws/ms/most-scenic-train-journeys-in-asia/assets/2.jpeg?1731073656"
            alt="Train"
            className="travel-image"
          />
          <button className="travel-btn" onClick={onclickTrains}>
            Let's Explore Trains
          </button>
        </div>
      </div>
    </>
  );
};
export default Details;
