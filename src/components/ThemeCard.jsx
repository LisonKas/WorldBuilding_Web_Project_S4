import "../css/ThemeCard.css"

export default function ThemeCard({onNavigate}) {
    const handleClick = () => {
        onNavigate("choicePage");
    };
    return (
        <div className="theme-card">
            <h2>Environment</h2>
            <p className="custom-desc">Choose and find a new type of environment for your new world !</p>
            <button onClick={handleClick} className="custom-button">
                Click me
            </button>
        </div>
    )
}