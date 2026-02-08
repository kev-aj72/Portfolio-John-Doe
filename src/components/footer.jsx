import React from "react";
import { Link } from "react-router-dom";

const Footbar = () => {
    return(
        <footer className="container-fluid bg-dark text-light pt-5 pb-3">
            
                <div className="row justify-content-center ps-5 ps-md-0 text-md-start">
                    <div className="col-md-3 list-unstyled">
                        <h3>John Doe</h3>
                        <address>
                            <li>40 rue Laure Diebold</li>
                            <li>69009 Lyon, France</li>
                            <li>10 20 30 40 50</li>
                            <li>john.doe@gmail.com</li>
                                <div className="bloc-icon-reseau pt-2">
                                    <i className="bi bi-github fs-3 pt-0 icon-reseau"></i>
                                    <i className="bi bi-twitter fs-3 ps-2 icon-reseau"></i>
                                    <i className="bi bi-linkedin fs-3 ps-2 icon-reseau"></i>
                                </div>
                        </address>       
                    </div>
                    
                    <div className="col-md-3">
                        <h3>Liens utiles</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-light text-decoration-none">Accueil</Link></li>
                                <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
                                <li><Link to="/portfolio" className="text-light text-decoration-none">Portfolio</Link></li>
                                <li><Link to="/contact" className="text-light text-decoration-none">Me contacter</Link></li>
                                <li><Link to="/mentions" className="text-light text-decoration-none">Mentions légales</Link></li>
                            </ul>
                    </div>
                    
                    <div className="col-md-3">
                    <h3>Mes derniéres réalisations</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/portfolio" className="text-light text-decoration-none">Fresh Food</Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none">Restaurant Akira</Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none">Espace bien-être</Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none">SEO</Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none">Créaation d'une API</Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none">Maquette d'un site</Link></li>
                        </ul>
                    </div>
                </div>
            
        </footer>
    )
} 

export default Footbar;

