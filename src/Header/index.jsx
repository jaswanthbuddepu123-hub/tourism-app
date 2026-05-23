import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const onclickLogout = () => {
    Cookies.remove("Access_Token");
    navigate("/signin", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05RL26Sn8uhgjB2uZvGyienTwIzDgTxOF4w&s"
          className="logoImage"
        />
      </div>
      <ul className="navMenu">
        <Link to="/" className="link">
          {" "}
          <li className="navItem"> Home </li>{" "}
        </Link>
        <Link to="/bookings" className="link">
          {" "}
          <li className="navItem"> Bookings </li>{" "}
        </Link>
        <li className="navItem logoutBtn" onClick={onclickLogout}>
          {" "}
          Logout{" "}
        </li>
      </ul>
    </nav>
  );
};
export default Header;
