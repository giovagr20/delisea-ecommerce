import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../logocode.png";
import { CartWidget } from "./Cart/CartWidget";
import { Link } from "react-router-dom";

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

        <ul className="navbar-nav d-center">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {" "}
              Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/1" className="nav-link" >Mariscos</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/2" className="nav-link">Pulpos y Camarones</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/3" className="nav-link">Pescados</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {" "}
              Contactenos
            </a>
          </li>
        </ul>
        <ul className="navbar-nav d-right">
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
    </nav>
  );
};
