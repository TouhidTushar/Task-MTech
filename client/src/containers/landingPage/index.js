import { Link } from "react-router-dom";
import cover from "../../assets/summer.jpg";
import "./style.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <img src={cover} alt="" />
      <h2>New Arrivals Of</h2>
      <h1>Summer 2021</h1>
      <h2>is here!</h2>
      <Link to="/products">Explore</Link>
    </div>
  );
}

export default LandingPage;
