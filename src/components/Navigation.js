import React from "react";

// Nav bar items render page in between header and footer
function Nav({ setCurrentPage, currentPage, pages }) {
  return (
    <header>

      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item ">
                <a
                  
                  href="#aboutme"

                  onClick={() => setCurrentPage(pages[0])}
                  class={
                    currentPage === "AboutMe" ? "nav-item active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#portfolio"

                  onClick={() => setCurrentPage(pages[1])}
                  class={
                    currentPage === "Portfolio" ? "nav-item active" : "nav-link"
                    
                  }
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#contact"

                  onClick={() => setCurrentPage(pages[2])}
                  class={
                    currentPage === "Contact" ? "nav-item active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#resume"
                  onClick={() => setCurrentPage(pages[3])}
                  class={
                    currentPage === "Resume" ? "nav-item active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
            <span class="navbar-text"> Shellby Miller</span>
          
            </div>
      </nav>
    </header>
  );
}
export default Nav;