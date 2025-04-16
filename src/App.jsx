import {useState} from "react";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import "./css/App.css";

export default function App() {
  return (
    <>
      <Header />
        {content}
      <Footer />
    </>
  );
}