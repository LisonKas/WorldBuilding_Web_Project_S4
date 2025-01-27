export default function ChoicePage({onNavigate}){
    const handleClick = () => {
        onNavigate("allResultPage");
    };
    const new_handleClick = () => {
        onNavigate("SingleResultPage");
    };
    return (
        <div>
            <Theme />
            <button onClick={handleClick} className="custom-button">
                See all
            </button>
        </div>
    )
}