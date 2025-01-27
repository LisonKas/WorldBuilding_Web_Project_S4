import {useState} from "react"
import ContentArea from "./components/ContentArea"
import WelcomeArea from "./components/WelcomeArea"


export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let content;
  if (currentPage === "home") {
    content = (
      <>
        <WelcomeArea />
        <ContentArea onNavigate={navigateTo} /> {/* Passe la fonction à ContentArea */}
      </>
    );
  } else if (currentPage === "newPage") {
    content = <div className="new-page">Bienvenue sur la nouvelle page !</div>;
  }

  return (
    <main>
      {content}
    </main>
  );
}