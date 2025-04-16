import React from 'react';
import WelcomeArea from "../components/WelcomeArea.jsx";
import ContentArea from "../components/ContentArea.jsx";
import "../css/App.css";

export default function Home() {
    return (
      <>
        <WelcomeArea />
        <ContentArea />
      </>
    );
}  