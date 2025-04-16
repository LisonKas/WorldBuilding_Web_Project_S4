import "../css/Header.css";
import Logo from "../../data/images/Logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="/">
          <img src={Logo} alt="Atlas Little Logo" className="little-logo" />
        </a>
        <p className="site-subtitle">A Worldbuilding Companion</p>
      </div>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/choice" className="nav-link">
          Choose World
        </a>
      </div>
    </div>
  );
}
