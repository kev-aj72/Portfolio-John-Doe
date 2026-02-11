import React from "react";
import { Link } from "react-router-dom";

const Footbar = () => {
    return(
        <footer className="container-fluid bg-dark text-light pt-5 pb-3">
            
                <div className="row justify-content-center ps-5 ps-md-0 text-md-start">
                    
                    {/*1er partie Nom du developpeur+adresse*/}
                    <div className="col-md-3">
                        <h3>John Doe</h3>
                        <address>
                            <p className="mb-0">40 rue Laure Diebold</p>
                            <p className="mb-0">69009 Lyon, France</p>
                            <p className="mb-0">10 20 30 40 50</p>
                            <p className="mb-0">john.doe@gmail.com</p>
                                <div className="bloc-icon-reseau pt-2">
                                    <a href="https://github.com/github-john-doe" target="blank" rel="noopener" className="iconReseau"><i className="bi bi-github fs-3 pt-0 "></i></a>
                                    <a href="https://x.com/JohnDoe" target="blank" rel="noopener" className="iconReseau"><i className="bi bi-twitter fs-3 ps-2 "></i></a>
                                    <a href="https://fr.linkedin.com/in/john-doe-51a61016a" target="blank" rel="noopener" className="iconReseau"><i className="bi bi-linkedin fs-3 ps-2"></i></a>
                                </div>
                        </address>       
                    </div>
                    
                    {/*2eme partie lien menu vers differente pages*/}
                    <div className="col-md-3">
                        <h3>Liens utiles</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="footerLink">Accueil</Link></li>
                                <li><Link to="/services" className="footerLink">Services</Link></li>
                                <li><Link to="/portfolio" className="footerLink">Portfolio</Link></li>
                                <li><Link to="/contact" className="footerLink">Me contacter</Link></li>
                                <li><Link to="/mentions" className="footerLink">Mentions légales</Link></li>
                            </ul>
                    </div>

                    {/*3eme partie lien menu vers page portfolio provisoire avant creation des different sites*/}
                    <div className="col-md-3">
                    <h3>Mes derniéres réalisations</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/portfolio" className="footerLink">Fresh Food</Link></li>
                            <li><Link to="/portfolio" className="footerLink">Restaurant Akira</Link></li>
                            <li><Link to="/portfolio" className="footerLink">Espace bien-être</Link></li>
                            <li><Link to="/portfolio" className="footerLink">SEO</Link></li>
                            <li><Link to="/portfolio" className="footerLink">Création d'une API</Link></li>
                            <li><Link to="/portfolio" className="footerLink">Maquette d'un site</Link></li>
                        </ul>
                    </div>
                </div>
            
        </footer>
    )
} 

export default Footbar;

