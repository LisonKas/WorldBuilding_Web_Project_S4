export default function Button({onNavigate}) {
    const handleClick = () => {
        onNavigate("newPage");
    };
    return (
        <button onClick={handleClick} className="custom-button">
            Click me
        </button>
    );
}