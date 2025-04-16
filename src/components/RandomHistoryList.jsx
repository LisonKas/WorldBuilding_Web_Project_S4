import "../css/ChoicePage.css";

export default function RandomHistoryList({ history }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="random-history">
      <h3 className="choice-h3">Recently Chosen by Random Choice :</h3>
      <ul className="history-list">
        {history.map((result, index) => (
          <li key={index}>{result.environment}</li>
        ))}
      </ul>
    </div>
  );
}
