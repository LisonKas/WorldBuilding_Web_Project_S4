import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import worldbuilding from "../../data/worldbuilding.json";
import "../css/ChoicePage.css";

export default function ChoicePage(){
    const [randomResult, setRandomResult] = useState(null);
    const navigate = useNavigate();

    const handleRandomClick = () => {
        const randomIndex = Math.floor(Math.random() * worldbuilding.results.length);
        const randomChosen = worldbuilding.results[randomIndex];
        setRandomResult(randomChosen);

        navigate("/single-result", { state: { result: randomChosen } });
    };

    const handleAllResultsClick = () => {
        navigate("/all-results");
    };

    return (
        <div className="choice-content">
            <h2 className="choice-h2">See all possible results</h2>
            <button onClick={handleAllResultsClick} className="custom-button">
                See all
            </button>
            <h2 className="choice-h2">Random result</h2>
            <button onClick={handleRandomClick} className="custom-button">
                Choose Random
            </button>
        </div>
    );
}