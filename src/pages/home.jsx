import React from "react";
import Ipsum from "../components/ipsum"


const Home = () => {
    return (
      
    <div className="container-fluid mt-5 p-0">
     
       <section className=" p-3 d-flex flex-column align-items-center justify-content-center" id="heroBg"> 
        <h1 className="text-light m-2">Bonjour, je suis John Doe</h1>

        <h2 className="text-light m-2">Développeur web full stack</h2> 
    
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#savoirPlus">En savoir plus</button>
        <div className="modal" id="savoirPlus" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
    </div>
       </section>

       <section className="d-flex justify-content-center">
        
        <div className="card col-lg-8 m-5">
        <div className="card-body d-flex">
        <article className="col-lg-6 p-2">
        <h2 className="border-bottom border-primary border-3 pb-3">A propos</h2>
        <img className="img-fluid mt-4" src="/image/john-doe-about.jpg" alt="un developpeur qui travail sur son ordinateur " />
        <Ipsum/>
        <Ipsum/>
        <Ipsum/>
        </article>
        <article className="col-lg-6 p-2">
          
            <h2 className="border-bottom border-primary border-3 pb-3">Mes compétences</h2>
    <div className="mb-4 mt-4">
<span>HTML5 90%</span>
<div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
</div></div>
<div className="mb-4">
  <span>CSS3 80%</span>
<div className="progress my-2" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-info" style={{width: "80%"}}></div>
</div></div>
<div className="mb-4">
  <span>JAVASCRIPT 70%</span>
<div className="progress my-2" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
</div></div>

<div className="mb-4">
  <span>PHP 60%</span>
<div className="progress my-2" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-success" style={{width: "60%"}}></div>
</div></div>
<div className="mb-4">
  <span>REACT 50%</span>
<div className="progress my-2" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
</div></div>

</article>
</div>
</div>
      
       </section>

       </div>
       
     
    )
}

export default Home;