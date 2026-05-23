import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Booking from "./Booking";
import BookingDetails from "./BookingDetails";
import BusDetails from "./BusDetails";
import Details from "./Details";
import EachItemDetails from "./EachItemDetails";
import TrainDetails from "./TrainDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookings" element={<Booking />} />{" "}
        {/* ✅ fixed: was /booking */}
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/busdetails" element={<BusDetails />} />
        <Route path="/traindetails" element={<TrainDetails />} />
        <Route path="/:category/:id" element={<EachItemDetails />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
