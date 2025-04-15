import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx'; 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import "./css/App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </main>
  </React.StrictMode>
);

