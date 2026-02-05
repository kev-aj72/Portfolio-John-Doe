
const Mentions = () => {
    return (
        <div className="container-fluid mt-5">
            <h2>Mentions légales</h2>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Editeur du site
      </button>
    </h3>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <address>
            <li>John Doe</li>
            <li>40 rue Laure Diebold</li>
            <li>69009 Lyon,France</li>
            <li>1020304050</li>
            <li>john.doe@gmail.com</li>
        </address>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h3>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h4>alwaysdata</h4>
        <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
        <a href="https://www.alwaysdata.com"target="_blank"
        rel="noopener noreferrer">www.alwaysdata.com</a>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h3>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h4>Crédits</h4>
        <p>Ce site a été réalisé par John Doe, étudiant au
             <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=4464&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&utm_source=bing&utm_medium=cpc&msclkid=0e0dee9adfa11e95b934871e151705db"target="_blank"
        rel="noopener noreferrer">Centre Européen de formation.</a></p>
        <p>Les image utilisées sur ce site sont libres de droits et ont été obtenues sur le site
          <a href="https://pixabay.com/fr/"target="_blank"
        rel="noopener noreferrer">Pixabay</a> </p>
        <p>La favicon de ce site a été fournie par
        <a href="https://www.flaticon.com/"target="_blank"
        rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a> </p> 
      </div>
    </div>
  </div>
</div>
 </div>  </div> </div>     
       
    )
}

export default Mentions;