import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultCard from '../components/ResultCard.jsx';
import "../css/ResultCard.css";

export default function SingleResultPage({ selectedResult }) {
    const location = useLocation();
    const { result } = location.state || {}; 

    if (!result) return <p>No result selected.</p>;

    return (
        <div className="single-result-card">
            <ResultCard result={result} />
        </div>
    );
}