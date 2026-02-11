import React from "react";
import Address from "../components/Address";

const Mentions = () => {
    return (
      
        <div className="container-fluid pt-5">
          <div className="title-page pt-5 text-center">
            <h2>Mentions légales</h2>
             <div className="w-25 mx-auto border-bottom  border-4 border-primary">
            </div>
          </div>

          {/*premiere partie accordion bootstrap composant address a retrouver dans fichier components*/}
          <div className="accordion container-md mx-auto py-5" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="true" aria-controls="collapseOne">Editeur du site
                </button>
              </h3>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <Address/>
              </div>
            </div>
            </div>

          {/*deuxieme partie accordion bootstrap*/}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                aria-expanded="false" aria-controls="collapseTwo">Hébergeur
                </button>
              </h3>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong className="fs-4">alwaysdata</strong>
                <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
                <i className="bi bi-globe pe-2"></i><a href="https://www.alwaysdata.com"target="_blank"
                  rel="noopener noreferrer">www.alwaysdata.com</a>
              </div>
            </div>
            </div>

                {/*Troisieme partie accordion bootstrap*/}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                aria-expanded="false" aria-controls="collapseThree">Crédits
                </button>
              </h3>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong className="fs-4">Crédits</strong>
                  <p>Ce site a été réalisé par John Doe, étudiant au
                    <a href="https://bit.ly/4qLAQop"target="_blank"
                      rel="noopener noreferrer"> Centre Européen de formation.</a></p>
                <div className="fst-italic">      
                  <p>Les image utilisées sur ce site sont libres de droits et ont été obtenues sur le site
                    <a href="https://pixabay.com/fr/"target="_blank"
                      rel="noopener noreferrer"> Pixabay</a> </p>
                  <p>La favicon de ce site a été fournie par
                    <a href="https://www.flaticon.com/"target="_blank"
                    rel="noopener noreferrer"> John doe Icons erstellt von Freepik - Flaticon</a> </p> 
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    
  )
}

export default Mentions;