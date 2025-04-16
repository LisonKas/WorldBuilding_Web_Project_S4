import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import worldbuilding from "../../data/worldbuilding.json";
import RandomHistoryList from "./RandomHistoryList";
import "../css/ChoicePage.css";

const LOCAL_STORAGE_KEY = "randomResultsHistory";

export default function ChoicePage() {
    const [randomResult, setRandomResult] = useState(null);
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedResults = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        setHistory(storedResults);
    }, []);

    const handleRandomClick = () => {
        const randomIndex = Math.floor(Math.random() * worldbuilding.results.length);
        const randomChosen = worldbuilding.results[randomIndex];
        setRandomResult(randomChosen);

        const storedResults = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

        const isAlreadyStored = storedResults.some(
            (r) => r.environment === randomChosen.environment
        );

        let updatedResults = storedResults;
        if (!isAlreadyStored) {
            updatedResults = [randomChosen, ...storedResults].slice(0, 5);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedResults));
            setHistory(updatedResults);
        }

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
            <RandomHistoryList history={history} />
        </div>
    );
}