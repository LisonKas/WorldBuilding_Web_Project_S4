import {useState} from "react"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ContentArea from "./components/ContentArea"
import WelcomeArea from "./components/WelcomeArea"
import ResultCard from "./components/ResultCard";
import ChoicePage from "./components/ChoicePage";
import Form from "./components/Form";
import "./css/App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedResult, setSelectedResult] = useState(null);

  const navigateTo = (page, result = null) => {
    setCurrentPage(page);
    if (result) {
      setSelectedResult(result); // On met à jour le résultat sélectionné
    }
  };

  let content;
  if (currentPage === "home") {
    content = (
      <>
        <WelcomeArea />
        <ContentArea onNavigate={navigateTo} /> 
      </>
    );
  } else if (currentPage === "allResultPage") {
    content = (
          <Form />
    );
  }
  else if(currentPage === "choicePage"){
    content = (
      <ChoicePage onNavigate={navigateTo} />
    );
  }
  else if(currentPage === "SingleResultPage"){
    content = (
      <div className="single-result-card">
        <ResultCard result={selectedResult}/>
      </div>
    );
  }

  return (
    <>
      <Header onNavigate={navigateTo} />
      {content}
      <Footer />
    </>
  );
}