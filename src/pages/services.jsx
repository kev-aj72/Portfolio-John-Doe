
const Services = () => {
    return (
        <div className="container-fluid mt-5">
            <img className="img-fluid mt-4" src="/image/banner.jpg" alt="bandeaux décoratifs couleur bleu " />
        <h2>Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>

        <div className="card">
        <div className="card-body">
        <h3 className="card-title">UX Design</h3>
    <p className="card-text">l'UX Design est une discipline qui consiste à concevoir des produits 
                        (sites web, applications mobile, logiciels, objets connectés, etc.) 
                        en plaçant l'utilisateur au centre des préoccupations. 
                        L'objectif est de rendre l'experience utilisateur la plus fluide et
                        agréable possible</p>
        </div>
        </div>
        <div className="card">
        <div className="card-body">
        <h3 className="card-title">Développement web</h3>
    <p className="card-text">Le développement de sites web consiste à créer des sites internet en *
                        utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                        et des frameworks (Bootstrap, React, Angular, etc.)</p>
        </div>
        </div>

        <div className="card">
        <div className="card-body">
        <h3 className="card-title">Référencement</h3>
    <p className="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser 
                        un site web pour le faire remonter dans les résultats des moteurs de recherche 
                        (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés
                        sur le site.</p>
        </div>
        </div>
        
        </div>
    )
}

export default Services;