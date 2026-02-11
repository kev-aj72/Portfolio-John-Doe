import React from "react";

const Services = () => {
    return (
    <div className="container-fluid p-0">
            <img className="img-fluid mt-5 h-auto" src="/image/banner.jpg" alt="bandeaux décoratifs couleur bleu " />
        <div className="mx-auto my-5  text-center">
                <h2>Mon offre de services</h2>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="w-25 mx-auto border-bottom  border-4 border-primary">
            </div>
        </div>
        
        <div className="row cols-md-3 g-4 pb-5 container-md mx-auto">
            {/*carte UX design*/}
            <div className="col-md-4">
                <div className="card cardCustom h-100 d-flex flex-column align-items-center">
                    <i className="bi bi-brush fs-1 pt-5 iconBlue"></i>
                <div className="card-body mb-2 text-center">
                    <h3 className="card-title">UX Design</h3>
                    <p className="card-text text-justify">l'UX Design est une discipline qui consiste à concevoir des produits 
                                                        (sites web, applications mobile, logiciels, objets connectés, etc.) 
                                                        en plaçant l'utilisateur au centre des préoccupations. 
                                                        L'objectif est de rendre l'experience utilisateur la plus fluide et
                                                        agréable possible.</p>
                </div>
                </div>
            </div>
            
            {/*carte Developpement web*/}
            <div className="col-md-4">
                <div className="card cardCustom h-100 d-flex flex-column align-items-center">
                    <i className="bi bi-code-slash fs-1 pt-5 iconBlue"></i>
                <div className="card-body mb-2 text-center">
                    <h3 className="card-title">Développement web</h3>
                    <p className="card-text text-justify">Le développement de sites web consiste à créer des sites internet en *
                                                        utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                                                        et des frameworks (Bootstrap, React, Angular, etc.).</p>
                </div>
                </div>
            </div>
            
            {/*carte Référencement*/}
            <div className="col-md-4">
                <div className="card cardCustom h-100 d-flex flex-column align-items-center">
                    <i className="bi bi-search fs-1 pt-5 iconBlue"></i>
                <div className="card-body mb-2 text-center">      
                    <h3 className="card-title">Référencement</h3>
                    <p className="card-text text-justify">Le référencement naturel (SEO) est une technique qui consiste à optimiser 
                                                        un site web pour le faire remonter dans les résultats des moteurs de recherche 
                                                        (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés
                                                        sur le site.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Services;