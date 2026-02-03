import React from "react";
import { Link } from "react-router-dom";

const Footbar = () => {
    return(
        <footer className="bg-light text-center text-lg-start">
<div className="container p-4">
<div className="row">
<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
<h3>John Doe</h3>
<address>
    <li>40 rue Laure Diebold</li>
    <li>69009 Lyon, France</li>
    <li>10 20 30 40 50</li>
    <li>john.doe@gmail.com</li>
</address>
</div>
<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
<h3>Liens utiles</h3>
<ul className="list-unstyled mb-0">
<li><Link to="/" className="text-dark">Accueil</Link></li>
<li><Link to="/services" className="text-dark">Services</Link></li>
<li><Link to="/portfolio" className="text-dark">Portfolio</Link></li>
<li><Link to="/contact" className="text-dark">Me contacter</Link></li>
<li><Link to="/mentions" className="text-dark">Mentions légales</Link></li>
</ul>
</div>
<div>
    <h3>Mes derniéres réalisations</h3>
    <ul>
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

