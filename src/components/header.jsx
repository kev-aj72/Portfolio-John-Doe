import React from "react";
import {Link,NavLink} from "react-router-dom";

//barre de navigation
const Navbar =() => {
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark text-uppercase fixed-top">
        <div className="container-fluid">
          {/*logo texte lien vers page home*/}
            <Link className="navbar-brand text-light ms-4" to="/">John Doe</Link>    
            <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*different lien page*/}
          <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-4 ms-md-0">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item ms-4 ms-md-0">
                <NavLink className="nav-link" aria-current="page" to="/services">services</NavLink>
              </li>
              <li className="nav-item ms-4 ms-md-0">
                <NavLink className="nav-link" aria-current="page" to="/portfolio">portfolio</NavLink>
              </li>
              <li className="nav-item ms-4 ms-md-0">
                <NavLink className="nav-link" aria-current="page" to="/contact">contact</NavLink>
              </li>
              <li className="nav-item ms-4 ms-md-0">
                <NavLink className="nav-link" aria-current="page" to="/mentions">mentions légales</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    )
}

export default Navbar;

