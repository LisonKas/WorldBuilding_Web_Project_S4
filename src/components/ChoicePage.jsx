import { useState } from "react";
import worldbuilding from "../../data/worldbuilding.json";

export default function ChoicePage({onNavigate}){
    const [randomResult, setRandomResult] = useState(null);

    const handleRandomClick = () => {
        const randomIndex = Math.floor(Math.random() * worldbuilding.results.length);
        const randomChosen = worldbuilding.results[randomIndex];
        setRandomResult(randomChosen);
        console.log("button  clicked");
        onNavigate("SingleResultPage", randomChosen);
    };

    const handleAllResultsClick = () => {
        console.log("button see all clicked");
        onNavigate("allResultPage");
    };

    const handleChooseResultsClick = () => {
        console.log("button choose result clicked");
        onNavigate("FormPage");
    }

    return (
        <div>
            <h2>See all possible results</h2>
            <button onClick={handleAllResultsClick} className="custom-button">
                See all
            </button>
            <h2>Random result</h2>
            <button onClick={handleRandomClick} className="custom-button">
                Choose Random
            </button>
            <h2>A result from your cho result</h2>
            <button onClick={handleChooseResultsClick} className="custom-button">
                Choose a result
            </button>
        </div>
    );
}