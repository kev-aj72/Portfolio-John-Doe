import React, {useState,useEffect} from "react";
import Ipsum from "../components/Ipsum";
  
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
     
        <section className="d-flex flex-column align-items-center justify-content-center" id="heroBg"> 
          <h1 className="text-light m-2 text-center">Bonjour, je suis John Doe</h1>

          <h2 className="text-light m-2 text-center">Développeur web full stack</h2> 
    
          <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#savoirPlus">En savoir plus</button>

<div class="modal" id="savoirPlus" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">Mon profil GitHub</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div><img src={user.avatar_url} width="150" alt="avatar du profil" /></div>
        <div>
        <p><a href={user.html_url} target="blank" rel="noopener noreferrer">{user.name}</a></p>
        <p>{user.location}</p>
        <p>{user.bio}</p>
        <p>{user.public_repos}</p>
        <p>{user.followers}</p>
        <p>{user.following}</p>
        
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </section>

        <section className="card container-md mx-auto m-5 p-3 h-100 shadow">
          <div className="row">
              
              <article className="col-md-6 p-2">
                <h3 className="border-bottom border-primary border-4 pb-3">A propos</h3>
                <img className="img-fluid my-4 " src="/image/john-doe-about.jpg" alt="un developpeur qui travail sur son ordinateur " />
                  <Ipsum/>
                  <Ipsum/>
                  <Ipsum/>
              </article>
              
              <article className="col-md-6 p-2">
          
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