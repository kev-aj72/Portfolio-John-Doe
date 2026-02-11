import React, {useState,useEffect} from "react";
import Ipsum from "../components/Ipsum";
 
// code pour le lien entre l'api et le modale
const Home = () => {
  const [user,setUser] = useState("");
  useEffect (() => {
    const getUser = async () => {
      const res = await fetch ("https://api.github.com/users/github-john-doe");
      const data = await res.json();
    setUser(data);
  };
  getUser();
  },[])
 
    return (
    
      
    <div className="container-fluid mt-5 p-0 mt-2">

        {/*haut de page avec titre et la background image*/}
        <section className="d-flex flex-column align-items-center justify-content-center" id="heroBg"> 
          <h1 className="text-light m-2 text-center">Bonjour, je suis John Doe</h1>

          <h2 className="text-light m-2 text-center">Développeur web full stack</h2> 
    
          <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#savoirPlus">En savoir plus</button>
      
      {/*code pour le modale*/}
<div className="modal" id="savoirPlus" tabIndex="-1">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content bg-dark text-light">
      <div className="modal-header">

        <h3 className="modal-title fs-4">Mon profil GitHub</h3>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-fluid pb-3" src={user.avatar_url} alt="avatar du profil" />
          </div>
            {/*lien de l'api pour les valeur afficher dans le modale*/}
          <div className="col-md-6 px-5">
            <p className="border-bottom pb-2"><i className="bi bi-person pe-2"></i><a href={user.html_url} target="blank" rel="noopener noreferrer">{user.name}</a></p>
            <p className="border-bottom pb-2"><i className="bi bi-geo-alt pe-2"></i>{user.location}</p>
            <p className="border-bottom pb-2"><i className="bi bi-card-text pe-2"></i>{user.bio}</p>
            <p className="border-bottom pb-2"><i className="bi bi-box pe-2"></i>Repositories : {user.public_repos}</p>
            <p className="border-bottom pb-2"><i className="bi bi-people pe-2"></i>Followers : {user.followers}</p>
            <p><i className="bi bi-people pe-2"></i>following : {user.following} </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    
    </div>
  </div>
</div>
        </section>
        {/*partie a propos avec le composant Ipsum voir le code dans le fichier components*/}
        <section className="card container-md mx-auto m-5 px-5 py-2 h-100 shadow">
          <div className="row">
              
              <article className="col-md-6 p-2">
                <h3 className="border-bottom border-primary border-4 pb-3">A propos</h3>
                <img className="img-fluid my-4" src="/image/john-doe-about.jpg" alt="un developpeur qui travail sur son ordinateur " />
                  <Ipsum/>
                  <Ipsum/>
                  <Ipsum/>
              </article>
              
              <article className="col-md-6 p-2">
              {/*partie avec les progress bar Bootstrap*/}
                <h3 className="border-bottom border-primary border-4 pb-3">Mes compétences</h3>
                  <div className="mb-4 mt-4">
                    <strong className="fs-5">HTML5 90%</strong>
                      <div className="progress my-1" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-danger" style={{width: "90%"}}>
                      </div>
                      </div>
                  </div>

                  <div className="mb-4">
                    <strong className="fs-5">CSS3 80%</strong>
                      <div className="progress my-1" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: "80%"}}>
                      </div>
                      </div>
                  </div>

                  <div className="mb-4">
                    <strong className="fs-5">JAVASCRIPT 70%</strong>
                      <div className="progress my-1" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{width: "70%"}}>
                      </div>
                      </div>
                  </div>

                  <div className="mb-4">
                    <strong className="fs-5">PHP 60%</strong>
                      <div className="progress my-1" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{width: "60%"}}>
                      </div>
                      </div>
                  </div>

                  <div className="mb-4">
                    <strong className="fs-5">REACT 50%</strong>
                      <div className="progress my-1" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{width: "50%"}}>
                      </div>
                      </div>
                  </div>

              </article>
          </div>

      
        </section>

    </div>
       
     
    )
}

export default Home;