import React from 'react';
import WelcomeArea from "./WelcomeArea.jsx";
import ContentArea from "./ContentArea.jsx";
import "../css/App.css";

export default function Home() {
    return (
      <>
        <WelcomeArea />
        <ContentArea />
      </>
    );
}  