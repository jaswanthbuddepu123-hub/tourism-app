import "./index.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const Signup = () => {
  const navigate = useNavigate();
  const [blurerrormsgone, setblurerrormsgone] = useState("");
  const [blurerrormsgtwo, setblurerrormsgtwo] = useState("");
  const [blurerrormsgthree, setblurerrormsgthree] = useState("");
  const [blurerrormsgfour, setblurerrormsgfour] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [mainerrormsg, setmainerrormsg] = useState("");
  const blurerrormessage = "Please Fill the Field";
  const onChangeusername = (event) => {
    setusername(event.target.value);
  };
  const onChangeemail = (event) => {
    setemail(event.target.value);
  };
  const onChangepassword = (event) => {
    setpassword(event.target.value);
  };
  const onChangeconfirmpassword = (event) => {
    setconfirmpassword(event.target.value);
  };
  const checkBlurone = (event) => {
    const value = event.target.value;
    if (value === "") {
      setblurerrormsgone(blurerrormessage);
    } else {
      setblurerrormsgone("");
    }
  };
  const checkBlurtwo = (event) => {
    const value = event.target.value;
    if (value === "") {
      setblurerrormsgtwo(blurerrormessage);
    } else {
      setblurerrormsgtwo("");
    }
  };
  const checkBlurthree = (event) => {
    const value = event.target.value;
    if (value === "") {
      setblurerrormsgthree(blurerrormessage);
    } else {
      setblurerrormsgthree("");
    }
  };
  const checkBlurfour = (event) => {
    const value = event.target.value;
    if (value === "") {
      setblurerrormsgfour(blurerrormessage);
    } else {
      setblurerrormsgfour("");
    }
  };
  const onsubmitsignupform = (event) => {
    event.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      if (username === "") {
        setblurerrormsgone(blurerrormessage);
      }
      if (email === "") {
        setblurerrormsgtwo(blurerrormessage);
      }
      if (password === "") {
        setblurerrormsgthree(blurerrormessage);
      }
      if (confirmpassword === "") {
        setblurerrormsgfour(blurerrormessage);
      }
    } else {
      const data = localStorage.getItem(JSON.stringify(email));
      if (data !== null) {
        setmainerrormsg("Email already exists, Please sign in");
      } else {
        if (password !== confirmpassword) {
          setmainerrormsg("Both passwords are not same");
        } else {
          setmainerrormsg("");
          const details = {
            username: username,
            email: email,
            confirmpassword: confirmpassword,
          };
          localStorage.setItem(JSON.stringify(email), JSON.stringify(details));
          Cookies.set("Access_Token", "Access_Permited", { expires: 30 });
          setusername("");
          setemail("");
          setpassword("");
          setconfirmpassword("");
          navigate("/", { replace: true });
        }
      }
    }
  };

  const onclicksignin = () => {
    navigate("/signin", { replace: true });
  };
  const access_token = Cookies.get("Access_Token");
  if (access_token !== undefined) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className="signupPage">
        <div className="signupCard">
          <div className="imageSection">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="signup"
              className="signupImage"
            />
          </div>
          <form className="formSection" onSubmit={onsubmitsignupform}>
            <h1 className="signupTitle">Create Account</h1>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Enter Username"
                className="signupInput"
                onChange={onChangeusername}
                onBlur={checkBlurone}
                value={username}
              />
              <p className="error-msg">{blurerrormsgone}</p>
            </div>
            <div className="inputContainer">
              <input
                type="email"
                placeholder="Enter Email"
                className="signupInput"
                onChange={onChangeemail}
                onBlur={checkBlurtwo}
                value={email}
              />
              <p className="error-msg">{blurerrormsgtwo}</p>
            </div>
            <div className="inputContainer">
              <input
                type="password"
                placeholder="Enter Password"
                className="signupInput"
                onChange={onChangepassword}
                onBlur={checkBlurthree}
                value={password}
              />
              <p className="error-msg">{blurerrormsgthree}</p>
            </div>
            <div className="inputContainer">
              <input
                type="password"
                placeholder="Confirm Password"
                className="signupInput"
                onChange={onChangeconfirmpassword}
                onBlur={checkBlurfour}
                value={confirmpassword}
              />
              <p className="error-msg">{blurerrormsgfour}</p>
            </div>
            <p className="error-msg">{mainerrormsg}</p>
            <button type="submit" className="create-account-btn">
              Create account
            </button>
            <div className="buttonContainer">
              <button className="loginBtn" onClick={onclicksignin}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
export default Signup;
