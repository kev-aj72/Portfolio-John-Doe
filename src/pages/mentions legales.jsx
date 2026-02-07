import React from "react";
import Address from "../components/address"
const Mentions = () => {
    return (
        <div className="container-fluid pt-5">
          <div className="title-page pt-5 text-center">
            <h3 className="w-25 mx-auto border-bottom  pb-4 border-5 border-primary">Mentions légales</h3>
          </div>
          
          <div class="accordion container-md mx-auto py-5" id="accordionExample">
            <div class="accordion-item">
              <h4 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="true" aria-controls="collapseOne">Editeur du site
                </button>
              </h4>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <Address/>
              </div>
            </div>
            </div>

            <div class="accordion-item">
              <h4 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                aria-expanded="false" aria-controls="collapseTwo">Hébergeur
                </button>
              </h4>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <span>alwaysdata</span>
                <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
                <i class="bi bi-globe pe-2"></i><a href="https://www.alwaysdata.com"target="_blank"
                  rel="noopener noreferrer">www.alwaysdata.com</a>
              </div>
            </div>
            </div>
  
            <div class="accordion-item">
              <h4 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                aria-expanded="false" aria-controls="collapseThree">Crédits
                </button>
              </h4>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <span>Crédits</span>
                  <p>Ce site a été réalisé par John Doe, étudiant au
                    <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=4464&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&utm_source=bing&utm_medium=cpc&msclkid=0e0dee9adfa11e95b934871e151705db"target="_blank"
                      rel="noopener noreferrer"> Centre Européen de formation.</a></p>
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
    )
}

export default Mentions;