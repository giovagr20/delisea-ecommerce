import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../logocode.png";
import { CartWidget } from "./Cart/CartWidget";

const nombreApp = "Delisea Gourmet";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-color">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://giovaapp.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          id="title-app"
        >
          <img src={logo} alt="" width="30" height="24" /> {nombreApp}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {" "}
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {" "}
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Mariscos</a></li>
                <li><a className="dropdown-item" href="#">Pulpos y Camarones</a></li>
                <li><a className="dropdown-item" href="#">Pescados</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {" "}
                Contactenos
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse d-right">
          <ul className="navbar-nav">
            <li className="nav-item">
              <CartWidget />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Registro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicia sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
