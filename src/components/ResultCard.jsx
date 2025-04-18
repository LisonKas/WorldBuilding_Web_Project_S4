import "../css/ResultCard.css";

export default function ResultCard({result}) {
    if (!result) return null;
    return (
        <div className="result-card-content">
            <h2>{result.environment}</h2>
            <h5>Relief : {result.relief}</h5>
            <p>Temperature : from {result.temperature_min} to {result.temperature_max}°C<br/>
            Water percentage : from {result.percentage_water_min} to {result.percentage_water_max}%<br/>
            Salt percentage : from {result.percentage_salt_min} to {result.percentage_salt_max}%<br/>
            Realism percentage : from {result.percentage_realism_min} to {result.percentage_realism_max}%</p>
            <ul> Ressources :
                {result.ressources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                ))}
            </ul>
        </div>
    )
}