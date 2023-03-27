import React from "react";

// Nav bar items render page in between header and footer
function Nav({ setCurrentPage, currentPage, pages }) {
  return (
    <header>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
                <a
                  aria-current="page"
                  href="#aboutme"

                  onClick={() => setCurrentPage(pages[0])}
                  className={
                    currentPage === "AboutMe" ? "nav-item active" : "nav-link"
                  }
                >
                  Shellby Miller
                </a>
              </li>
              <li className="nav-item active">
                <a
                  aria-current="page"
                  href="#aboutme"

                  onClick={() => setCurrentPage(pages[0])}
                  className={
                    currentPage === "AboutMe" ? "nav-item active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"

                  onClick={() => setCurrentPage(pages[1])}
                  className={
                    currentPage === "Portfolio" ? "nav-item active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"

                  onClick={() => setCurrentPage(pages[2])}
                  className={
                    currentPage === "Contact" ? "nav-item active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => setCurrentPage(pages[3])}
                  className={
                    currentPage === "Resume" ? "nav-item active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;