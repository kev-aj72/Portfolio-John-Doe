import React from "react";
import Ipsum from "../components/composant"

const Home = () => {
    return (
    <div className="flex-column">
       <section className="heroBg"> 
        <h1>Bonjour, je suis John Doe</h1>

        <h2>Développeur web full stack</h2>

        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#savoirPlus">Danger</button>

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

       <section>
        <article>
        <h2>A propos</h2>
        <img src="/image/john-doe-about.jpg" alt="js" />
        <Ipsum/>
        <Ipsum/>
        <Ipsum/>
        </article>
        <article>
            <h2>Mes compétences</h2>

<div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-success" style={{width: "25%"}}></div>
</div>
<div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-info" style={{width: "50%"}}></div>
</div>
<div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "75%"}}></div>
</div>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger" style={{width: "100%"}}></div>
</div>
        </article>
       </section>
       
       </div>
    )
}

export default Home;