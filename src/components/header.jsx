import React from "react";
import {Link} from "react-router-dom";

//barre de navigation
const Navbar =() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">John Doe</Link>    
    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/services">services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/portfolio">portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/contact">contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/mentions">mentions légales</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>      
    )
}

export default Navbar;

