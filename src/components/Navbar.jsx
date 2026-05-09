import logo from "../assets/Onboard-logo-design.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-section">
        <img className="Logo" src={logo} alt="logo" />
      </div>

      <div className="board-menu">
        <span>Boards</span>
        <span className="arrow">▼</span>
      </div>
    </header>
  );
}