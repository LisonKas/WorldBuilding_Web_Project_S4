// import "../css/Header.css"

// export default function Header({onNavigate}) {
//     return (
//         <div className="content-div">
//             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}><h1>ATLAS</h1></a>
//             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("choicePage"); }}><h3>Return to choose</h3></a>
//         </div>
//     )
// }

import "../css/Header.css";

export default function Header({ onNavigate }) {
  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          <h1 className="site-title">ATLAS</h1>
        </a>
        <p className="site-subtitle">A Worldbuilding Companion</p>
      </div>
      <div className="nav-links">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} className="nav-link">
          Home
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("choicePage"); }} className="nav-link">
          Choose World
        </a>
      </div>
    </div>
  );
}
