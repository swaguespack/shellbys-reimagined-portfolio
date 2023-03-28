import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Footer from './components/Footer';
import Nav from './components/Navigation';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // Sets up main page
  return (
    <div class="App">
      <Nav
        class="App-nav"
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
      />

      <PortfolioContainer currentPage={currentPage} />
      <Footer class="App-footer" />
    </div>
  );
}

// Exports app
export default App;