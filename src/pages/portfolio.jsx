
const Portfolio = () => {
    return (
        <div className="container-fluid mt-5">
             <img className="img-fluid mt-4" src="/image/banner.jpg" alt="bandeaux décoratifs couleur bleu " />
            <h2>Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/image/portfolio/fresh-food.jpg" class="card-img-top img-fluid" alt="panier-de-légumes"/>
      <div class="card-body">
        <h5 class="card-title">Fresh Food</h5>
        <p class="card-text">Site de vente de produits frais en ligne</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Site réalisé avec PHP et MySQL</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/image/portfolio/restaurant-japonais.jpg" class="card-img-top img-fluid" alt="suchi-restaurant-japonnais"/>
      <div class="card-body">
        <h5 class="card-title">Restaurant Akira</h5>
        <p class="card-text">Site de vente de produits frais en ligne</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Site réalisé avec WorldPress</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/image/portfolio/espace-bien-etre.jpg" class="card-img-top img-fluid" alt="espace-bien-etre"/>
      <div class="card-body">
        <h5 class="card-title">Espace bien-être</h5>
        <p class="card-text">Site de vente de produits frais en ligne</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Site réalisé avec LARAVEL</small>
      </div>
    </div>
  </div>
   <div class="col">
    <div class="card h-100">
      <img src="/image/portfolio/seo.jpg" class="card-img-top img-fluid" alt="écran-seo"/>
      <div class="card-body">
        <h5 class="card-title">SEO</h5>
        <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Utilisation des outils SEO</small>
      </div>
    </div>
  </div>
   <div class="col">
    <div class="card h-100">
      <img src="/image/portfolio/coder.jpg" class="card-img-top img-fluid" alt="screen-écran-du-code-de-developpement-site"/>
      <div class="card-body">
        <h5 class="card-title">Création d'une API</h5>
        <p class="card-text">Création d'une API RESTFULL publique</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">PHP - SYMFONY</small>
      </div>
    </div>
  </div>
   <div class="col">
    <div class="card h-100">
      <img src="/image/portfolio/screens.jpg" class="card-img-top img-fluid" alt="espace-de-travail-bureau"/>
      <div class="card-body">
        <h5 class="card-title">Maquette d'un site web</h5>
        <p class="card-text">Création du prototype d'un site</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Réalisé avec FIGMA</small>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Portfolio;