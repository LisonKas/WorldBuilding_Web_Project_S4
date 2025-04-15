import "../css/Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="/">
          <h1 className="site-title">ATLAS</h1>
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
