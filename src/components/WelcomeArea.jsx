import BigLogo from "../../data/images/Big_Logo.png";
import "../css/WelcomeArea.css";

export default function WelcomeArea() {
    return (
        <div className="welcome-area">
            <img src={BigLogo} alt="Atlas Logo" className="logo" />
        </div>
    )
}