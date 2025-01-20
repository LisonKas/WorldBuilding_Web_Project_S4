export default function Button() {
    const handleClick = () => {
        console.log("Button clicked");
    };
    return (
        <button onClick={handleClick} className="custom-button">
            Click me
        </button>
    );
}