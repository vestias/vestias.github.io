import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Accueil from './components/Accueil';
import Decouvert from './components/Decouvert';
import Contact from './components/Contact';
import Error from './components/Error';
import Fiche from './components/Fiche';
import users from './components/Users';
import Annonces from './components/Annonces';
import slides from './components/slides';

import { SocialIcon } from 'react-social-icons';

import Navbar from './components/Navbar';
import 'bootstrap';


function App() {
 
  
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin=""
      ></link>
      

      
      <header className="App-header">
      <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
             <Route path="/" component={Accueil} exact/>
             <Route path="/Accueil" component={Accueil} exact/>
             <Route path="/Decouvert" component={Decouvert}/> 
             <Route path="/Contact" component={Contact}/>
             <Route path="/Fiche" component={Fiche}/>
             <Route path="/users" component={users}/>
             <Route path="/Annonces" component={Annonces}/>
             <Route path="/slides" component={slides}/>

            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      </header>
      <footer>
        <div class="footer-links-container">
          <div class="links1">
            <h3>Contact</h3>
            <p>E-mail:</p>
            <span>Contact@immobilio.ma</span>
            <p>Tél / WhatsApp :</p>
            <span>(+212) 0660163232</span>
          </div>
          <div class="links2">
            <h3>Besoin d’aide ?</h3>
            <span>Publier une annonce</span>
            <span>Trouver une maison</span>
            <span>Conditions d’utilisation</span>
          </div>
          <div class="links3">
            <h3>Suivez-nous sur</h3>
            <div class="icons-footer">
              <div class="ts"><SocialIcon style={{ height: 40, width: 40 }} bgColor="#fff" fgcolor="#1a789a" url="https://twitter.com/" /></div>
              <div><SocialIcon bgColor="#fff" style={{ height: 40, width: 40 }} fgcolor="#1a789a" url="https://facebook.com" /></div>
              <div><SocialIcon bgColor="#fff" style={{ height: 40, width: 40 }} fgcolor="#1a789a"  url="https://instagram.com" /></div>
              <div><SocialIcon bgColor="#fff" style={{ height: 40, width: 40 }} fgcolor="#1a789a"  url="https://youtube.com" /></div>
            </div>
            <img  alt="alt" src="https://www.immobilio.ma/wp-content/uploads/2018/09/Logo-01.png"/>
           
          </div>

        </div>
        <div class="cpy">Copyright &copy; 2021. Tous droits réservés.</div>
    </footer>
    
    </div>
  );
}

export default App;
