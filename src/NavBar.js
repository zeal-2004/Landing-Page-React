import logo from "./images/logo.png";
import "./App.css";

export default function NavBar() {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid bg-color">
          <a class="navbar-brand" href="#">
            <img src={logo} height="70"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  flex-row-reverse"
            id="navbarNav"
          >
            <ul class="navbar-nav gap-3">
              <li class="nav-item">
                <a
                  class="nav-link active font-mulish"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  font-mulish" href="#">
                  Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
