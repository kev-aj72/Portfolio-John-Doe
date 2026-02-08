import React from "react";

const Portfolio = () => {
    return (
      <div className="container-fluid p-0">
             <img className="img-fluid mt-5 h-auto" src="/image/banner.jpg" alt="bandeaux décoratifs couleur bleu " />
            <div className="w-100 my-5  text-center col-md-4">
              <h2>Portfolio</h2>
              <p>Voici quelques-unes de mes réalisations</p> 
            <div className="w-25 mx-auto border-bottom  border-4 border-primary">
            </div>
            </div>

        <div className="row cols-md-3 g-4 pb-5 container-md mx-auto">
          
          <div className="col-md-4">
            <div className="card h-100">
              <img src="/image/portfolio/fresh-food.jpg" className="card-img-top img-fluid" alt="panier-de-légumes"/>
            <div className="card-body text-center">
              <h3 className="card-title">Fresh Food</h3>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <button type="button" className="btn btn-primary">Voir le site</button>
            </div>
            <div className="card-footer text-center">
              <small className="text-body-secondary">Site réalisé avec PHP et MySQL</small>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/image/portfolio/restaurant-japonais.jpg" className="card-img-top img-fluid" alt="suchi-restaurant-japonnais"/>
            <div className="card-body text-center">
              <h3 className="card-title">Restaurant Akira</h3>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <button type="button" className="btn btn-primary">Voir le site</button>
            </div>
            <div className="card-footer text-center">
              <small className="text-body-secondary">Site réalisé avec WorldPress</small>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/image/portfolio/espace-bien-etre.jpg" className="card-img-top img-fluid" alt="espace-bien-etre"/>
            <div className="card-body text-center">
              <h3 className="card-title">Espace bien-être</h3>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <button type="button" className="btn btn-primary">Voir le site</button>
            </div>
            <div className="card-footer text-center">
              <small className="text-body-secondary">Site réalisé avec LARAVEL</small>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/image/portfolio/seo.jpg" className="card-img-top img-fluid" alt="écran-seo"/>
            <div className="card-body text-center">
              <h3 className="card-title">SEO</h3>
              <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
              <button type="button" className="btn btn-primary">Voir le site</button>
            </div>
            <div className="card-footer text-center">
              <small className="text-body-secondary">Utilisation des outils SEO</small>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/image/portfolio/coder.jpg" className="card-img-top img-fluid" alt="screen-écran-du-code-de-developpement-site"/>
            <div className="card-body text-center">
              <h3 className="card-title">Création d'une API</h3>
              <p className="card-text">Création d'une API RESTFULL publique</p>
              <button type="button" className="btn btn-primary">Voir le site</button>
            </div>
            <div className="card-footer text-center">
              <small className="text-body-secondary">PHP - SYMFONY</small>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/image/portfolio/screens.jpg" className="card-img-top img-fluid" alt="espace-de-travail-bureau"/>
            <div className="card-body text-center">
              <h3 className="card-title">Maquette d'un site web</h3>
              <p className="card-text">Création du prototype d'un site</p>
              <button type="button" className="btn btn-primary">Voir le site</button>
            </div>
            <div className="card-footer text-center">
              <small className="text-body-secondary">Réalisé avec FIGMA</small>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Portfolio;