import officeImage from "../assets/office-building.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>
          Save a job
          <br />
          application in two
          <br />
          seconds.
        </h2>

        <div className="hero-buttons">
          <nav onClick={()=> navigate("/applications")} className="Add-App">Add Application</nav>
          <nav className="Bro-App">Browse Applications</nav>
        </div>
      </div>

      <div className="hero-image-container">
        <img className="ofzImg" src={officeImage} alt="Office Building" />
      </div>
    </section>
  );
}