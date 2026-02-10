import React from "react";
import Ipsum from "../components/Ipsum";


const Home = () => {
    return (
      
    <div className="container-fluid mt-5 p-0 mt-2">
     
        <section className="d-flex flex-column align-items-center justify-content-center" id="heroBg"> 
          <h1 className="text-light m-2 text-center">Bonjour, je suis John Doe</h1>

          <h2 className="text-light m-2 text-center">Développeur web full stack</h2> 
    
          <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#savoirPlus">En savoir plus</button>
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