import "./index.css";
// import Header from "../Header";
import { useState } from "react";
import BookingDetails from "../BookingDetails";

const Booking = () => {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [need, setNeed] = useState(true);

  const recievedBusData =
    JSON.parse(localStorage.getItem("finalBusData")) || [];
  const busResult = recievedBusData.filter((each) => each.status === true);
  const recievedTrainData =
    JSON.parse(localStorage.getItem("finalTrainData")) || [];
  const trainResult = recievedTrainData.filter((each) => each.status === true);

  const onclickBusBooking = () => {
    setButtonStatus(true);
  };
  const onclickTrainBooking = () => {
    setButtonStatus(false);
  };

  const data = buttonStatus ? busResult : trainResult;

  return (
    <>
      <div className="bookingContainer">
        <div className="tabsContainer">
          <button
            className={
              buttonStatus === true ? "tabButton activeTab" : "tabButton"
            }
            onClick={onclickBusBooking}
          >
            Bus
          </button>
          <button
            className={
              buttonStatus === false ? "tabButton activeTab" : "tabButton"
            }
            onClick={onclickTrainBooking}
          >
            Train
          </button>
        </div>
        <div className="contentContainer">
          {data.length !== 0 ? (
            data.map((eachBus) => (
              <BookingDetails
                details={eachBus}
                key={eachBus.id}
                setNeed={setNeed}
              />
            ))
          ) : (
            <div className="no-bookings-container"> No Bookings </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Booking;
