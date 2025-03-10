import "../css/Header.css"

export default function Header({onNavigate}) {
    return (
        <div className="content-div">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}><h1>ATLAS</h1></a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("choicePage"); }}><h3>Return to choose</h3></a>
        </div>
    )
}