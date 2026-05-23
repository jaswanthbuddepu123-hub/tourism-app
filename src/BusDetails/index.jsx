import "./index.css";
import { useState, useEffect } from "react";
import EachItem from "../EachItem";
import { v4 as uuidv4 } from "uuid";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const initialBusData = [
  {
    id: 0,
    from: "Uppal",
    to: "Banglore",
    arrival: "8:00 PM",
    departure: "6:00 AM",
    seats: 25,
    category: "busdetails",
    operator: "ABC Travels",
    rating: 4.5,
    status: false,
    contact: 1234567899,
    mail: "abctravels@gmail.com",
  },
  {
    id: 1,
    from: "Hyderabad",
    to: "Amalapuram",
    arrival: "8:00 PM",
    departure: "6:00 AM",
    seats: 25,
    category: "busdetails",
    operator: "ABC Travels",
    rating: 4.5,
    status: false,
    contact: 1234567899,
    mail: "abctravels@gmail.com",
  },
  {
    id: 2,
    from: "Warangal",
    to: "Vizag",
    arrival: "8:00 PM",
    departure: "6:00 AM",
    seats: 25,
    category: "busdetails",
    operator: "ABC Travels",
    rating: 4.5,
    status: false,
    contact: 1234567899,
    mail: "abctravels@gmail.com",
  },
  {
    id: 3,
    from: "Hyderabad",
    to: "Guntur",
    arrival: "8:00 PM",
    departure: "6:00 AM",
    seats: 25,
    category: "busdetails",
    operator: "ABC Travels",
    rating: 4.5,
    status: false,
    contact: 1234567899,
    mail: "abctravels@gmail.com",
  },
  {
    id: 4,
    from: "Guntur",
    to: "Chennai",
    arrival: "8:00 PM",
    departure: "6:00 AM",
    seats: 25,
    category: "busdetails",
    operator: "ABC Travels",
    rating: 4.5,
    status: false,
    contact: 1234567899,
    mail: "abctravels@gmail.com",
  },
];

const BusDetails = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("finalBusData") === null) {
    localStorage.setItem("finalBusData", JSON.stringify(initialBusData));
  }
  const [searchInput, setSearchInput] = useState("");
  const [busNote, setBusNote] = useState("");
  const [storedNotes, setstoredNotes] = useState(
    JSON.parse(localStorage.getItem("finalBusNotes") || "[]"),
  );
  const [AddingBusNotes, setAddingBusNotes] = useState([]);

  useEffect(() => {
    const l = AddingBusNotes.filter(
      (presentNote) =>
        !storedNotes.some((eachStored) => eachStored.id === presentNote.id),
    );
    const data = [...storedNotes, ...l];
    localStorage.setItem("finalBusNotes", JSON.stringify(data));
    setstoredNotes(JSON.parse(localStorage.getItem("finalBusNotes") || "[]"));
  }, [AddingBusNotes]);

  const changeSearch = (event) => {
    setSearchInput(event.target.value);
  };
  const onchangeBusNote = (event) => {
    setBusNote(event.target.value);
  };
  const onclickBusAddNote = () => {
    const newNote = { id: uuidv4(), notes: busNote };
    setAddingBusNotes((prev) => [...prev, newNote]);
    setBusNote("");
  };

  const busData = JSON.parse(localStorage.getItem("finalBusData"));
  const searchResults = busData.filter(
    (each) =>
      each.to.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.from.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const NoteItem = (props) => {
    const { data } = props;
    const { notes } = data;
    return (
      <div className="noteCard">
        <p>{notes}</p>
      </div>
    );
  };

  const onclickleft = () => {
    navigate("/details", { replace: true });
  };

  return (
    <>
      <div className="mainContainer">
        <div className="placesSection">
          <div className="arrow-container" onClick={onclickleft}>
            <FaArrowLeft className="arrow-icon" />
          </div>
          <h1 className="sectionTitle">Search Buses</h1>
          <div className="searchContainer">
            <input
              type="search"
              placeholder="Search your favourite place..."
              className="searchInput"
              onChange={changeSearch}
              value={searchInput}
            />
          </div>
          <ul className="placesResults">
            {searchResults.length > 0 ? (
              searchResults.map((eachresult) => (
                <EachItem details={eachresult} key={eachresult.id} />
              ))
            ) : (
              <div className="empty-container">
                <p>No Buses</p>
              </div>
            )}
          </ul>
        </div>
        <div className="notesSection">
          <h1 className="sectionTitle">Add Note</h1>
          <div className="notesInputContainer">
            <input
              type="text"
              placeholder="Add your notes..."
              className="notesInput"
              onChange={onchangeBusNote}
              value={busNote}
            />
            <button className="addBtn" onClick={onclickBusAddNote}>
              Add
            </button>
          </div>
          <ul className="notesContainer">
            {storedNotes.length > 0 ? (
              storedNotes.map((note) => <NoteItem data={note} key={note.id} />)
            ) : (
              <div className="emptyNotes">No Notes</div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default BusDetails;
