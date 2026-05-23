import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onclickExplore = () => {
    navigate("/details", { replace: true });
  };
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <img
            className="home-image"
            src="https://cdn.prod.website-files.com/614c65bf88e28697954b39f9/6892e84165794ac5d5c25b4d_modern-buses.webp"
            alt="home img"
          />
        </div>
        <div className="home-content">
          <h1 className="home-heading">
            Moving with purpose, delivering with passion.
          </h1>
          <div className="button-alignment">
            <button className="explore-btn" onClick={onclickExplore}>
              Let's Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
