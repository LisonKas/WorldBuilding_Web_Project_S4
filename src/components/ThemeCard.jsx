import Theme from './Theme.jsx'

export default function ThemeCard({onNavigate}) {
    const handleClick = () => {
        onNavigate("choicePage");
    };
    return (
        <div>
            <Theme />
            <button onClick={handleClick} className="custom-button">
                Click me
            </button>
        </div>
    )
}