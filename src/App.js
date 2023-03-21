import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import PortfolioContainer from "./components/PortfolioContainer";
import React, { useState } from "react";

function App() {
    const [pages] = useState([
        {
            name: "about me"
        },
        {
            name:"portfolio"
        },
        {
            name: "contact"
        },
        {
            name: "resume"
        }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className= "App">

      <Nav

      className="App-nav"
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pages={pages}
      
      />

    <Header className="App-header"/>
    <PortfolioContainer currentPage={currentPage} />
    <Footer className="App-footer"/>

    </div>
  );
}

export default App;
