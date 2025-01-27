export default function ResultCard({result}) {
    if (!result) return null;
    return (
        <div>
            <h2>{result.environment}</h2>

        </div>
    )
}