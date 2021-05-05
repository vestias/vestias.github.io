import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
       <div className="contact_div">

         <div class="grid-container5">
         <div class="a1">
            <p class="title1">Vous souhaitez faire appel à nos services ?</p>
            <p class="title2">N’hésitez pas à nous contacter via WhatsApp ou via le formulaire ci-après :</p>
            <p class="title3">(+212) 06 60 16 32 32</p>
            <p class="title3">Contact@immobilio.ma</p>
            <p class="title3">201, Rue Mustapha Al Maâni, 2ème étage, Bureau 9, Casablanca.</p>

         </div>
         <div class="a2">
         <form>
            <p>Nom & Prénom *</p>
            <input type="text" name="name" />
            <p>Téléphone *</p>
            <input type="text" name="Téléphone" />
            <p>Email</p>
            <input type="text" name="Email" />
            <p>Message</p>
            <input class="Message" type="text" name="Message" />
            <input type="submit" value="Envoyer" />
            </form>
         </div>
         </div>
        

       </div>
    );
}
 
export default Contact;