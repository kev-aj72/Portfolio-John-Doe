import React from "react";
import { Link } from "react-router-dom";

const Footbar = () => {
    return(
        <footer className="bg-dark text-light text-lg-start p-3">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-4 col-md-4 list-unstyled">
                        <h3>John Doe</h3>
                        <address>
                            <li>40 rue Laure Diebold</li>
                            <li>69009 Lyon, France</li>
                            <li>10 20 30 40 50</li>
                            <li>john.doe@gmail.com</li>
                        </address>
                    </div>
                    
                    <div className="col-lg-4 col-md-4">
                        <h3>Liens utiles</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none">Accueil</Link></li>
                            <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
                            <li><Link to="/portfolio" className="text-light text-decoration-none">Portfolio</Link></li>
                            <li><Link to="/contact" className="text-light text-decoration-none">Me contacter</Link></li>
                            <li><Link to="/mentions" className="text-light text-decoration-none">Mentions légales</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-4">
                    <h3>Mes derniéres réalisations</h3>
                    <ul className="list-unstyled">
                        <li>Fresh Food</li>
                        <li>Restaurant Akira</li>
                        <li>Espace bien-être</li>
                        <li>SEO</li>
                        <li>Créaation d'une API</li>
                        <li>Maquette d'un site</li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footbar;

