import React from "react";
import GoogleMapIframe from "../components/googlemapiframe";
import Address from "../components/address";

const Contact = () => {
    return (
        <div className=" container-fluid pt-5">
            <div className="title-page pt-4 text-center">
                <h2>Contact</h2>
                <p>Pour me contacter en vue d'un entretien ou d'une futur collaboration, merci de remplir le formulaire de contact.</p>
            <div className="w-25 mx-auto border-bottom  border-3 border-primary">
            </div>
            </div>
            
            <div className="card container-md mx-auto m-5 p-3 h-100 ">
                <section className="row">
                    <article className="col-md-6">
                        <h3 className="border-bottom border-primary border-3 pb-3">Formulaire de contact</h3>
                    
                    <form>
                
                            <label htmlFor="InputName1" className="form-label"></label>
                            <input type="text" className="form-control"  placeholder="Votre nom" id="InputName1" aria-describedby="votre nom"required></input>
                       
                            <label htmlFor="InputEmail1" className="form-label"></label>
                            <input type="email" className="form-control" placeholder="Votre adresse email" id="InputEmail1" aria-describedby="Votre adresse email" required></input>
                        
                            <label htmlFor="InputPhone1" className="form-label"></label>
                            <input type="tel"  className="form-control" placeholder="Votre numéro de téléphone" id="InputPhone1" aria-describedby="votre numéro de téléphone"required></input>
                       
                            <label htmlFor="InputSujet1" className="form-label"></label>
                            <input type="text" className="form-control" placeholder="Sujet" id="InputSujet1" aria-describedby="Sujet" required></input>
                      
                            <label htmlFor="FormControlTextarea1" className="form-label"></label>
                            <textarea className="form-control" placeholder="Votre message" id="FormControlTextarea1" rows="12" aria-describedby="Votre message" required></textarea>
                    
  
                        <div className="text-center m-3">
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                    </article>
                    <article className="row-col-1 col-md-6">
                        <h3 className="border-bottom border-primary border-3 pb-3">Mes coordonnées</h3>
                            <div>
                                <Address/>
                            </div>
                            <div>
                                <GoogleMapIframe/>
                            </div>
                    </article>
                </section>
            </div>
        </div>
      
    )
}

export default Contact;