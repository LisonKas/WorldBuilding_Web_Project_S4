import {useState} from "react"
import ContentArea from "./components/ContentArea"
import WelcomeArea from "./components/WelcomeArea"
import ResultCard from "./components/ResultCard";
import worldbuilding from "../data/worldbuilding.json";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let results = worldbuilding.results;

  let content;
  if (currentPage === "home") {
    content = (
      <>
        <WelcomeArea />
        <ContentArea onNavigate={navigateTo} /> 
      </>
    );
  } else if (currentPage === "newPage") {
    content = (
      <div>
        {results.map((result, index) => (
          <ResultCard key={index} result={result} />))
        }
      </div>
    );
  }

  return (
    <main>
      {content}
    </main>
  );
}