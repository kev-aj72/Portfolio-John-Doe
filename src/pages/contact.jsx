import React from "react";
import GoogleMapIframe from "../components/googlemapiframe";

const Contact = () => {
    return (
        <div className="container-fluid mt-5">
            <h2>Contact</h2>
            <p>Pour me contacter en vue d'un entretien ou d'une futur collaboration, merci de remplir le formulaire de contact.</p>

            <section>
                <article>
                    <h3>Formulaire de contact</h3>

                    <form>
                        <div class="mb-3">
                        <label for="InputName1" class="form-label"></label>
                        <input type="password" class="form-control"  placeholder="Votre nom" id="InputPassword1" aria-describedby="votre nom"required/>
                        </div>
                         <div class="mb-3">
                     <  label for="InputPassword1" class="form-label"></label>
                        <input type="password" class="form-control" placeholder="Votre adresse email" id="InputPassword1" aria-describedby="Votre adresse email" required></input>
                        </div>
                         <div class="mb-3">
                        <label for="InputPhone1" class="form-label"></label>
                        <input type="text" class="form-control"  placeholder="Votre numéro de téléphone" id="InputPhone1" aria-describedby="votre numéro de téléphone"required/>
                        </div>
                        <div className="mb-3">
                         <label for="InputSujet1" class="form-label"></label>
                        <input type="text" class="form-control" placeholder="Sujet" id="InputSujet1" aria-describedby="Sujet" required></input>
                        </div>
                        <div class="mb-3">
                        <label for="FormControlTextarea1" class="form-label"></label>
                        <textarea class="form-control" placeholder="Votre message" id="FormControlTextarea1" rows="3" aria-describedby="Votre message" required></textarea>
                        </div>
  
  
                        <button type="submit" class="btn btn-primary">Envoyer</button>
                        </form>
                </article>
                <article>
                    <h3>Mes coordonnées</h3>
                    <address>
                        <li>John Doe</li>
                        <li>40 rue Laure Diebold</li>
                        <li>69009 Lyon,France</li>
                        <li>1020304050</li>
                        <li>john.doe@gmail.com</li>
                    </address>
                    <div>
                    <GoogleMapIframe/>
                    </div>
                </article>
            </section>

        </div>
    )
}

export default Contact;