import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onchangeUsername = (e) => setUsername(e.target.value);
  const onchangePassword = (e) => setPassword(e.target.value);

  const onclickSignIn = () => {
    if (username === "" || password === "") {
      setError("Please enter username and password");
      return;
    }
    Cookies.set("jwt_token", "sample_token_123", { expires: 7 });
    navigate("/", { replace: true });
  };

  const onclickSignUp = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-heading">Sign In</h1>
        <div className="input-group">
          <label className="input-label">Username</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter username"
            value={username}
            onChange={onchangeUsername}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter password"
            value={password}
            onChange={onchangePassword}
          />
        </div>
        {error && <p className="error-msg">{error}</p>}
        <button className="signin-btn" onClick={onclickSignIn}>
          Sign In
        </button>
        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={onclickSignUp} className="signup-span">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
