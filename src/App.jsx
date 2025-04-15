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

  return (
    <>
      <Header />
        {content}
      <Footer />
    </>
  );
}