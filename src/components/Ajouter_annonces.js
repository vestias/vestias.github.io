import React from "react";
import "./Ajouter_annonces.css";
import { NavLink } from "react-router-dom";

const Ajouter_annonces = () => {
  return (
    <div className="add_div">
      <div className="a3">
        <form>
          <div className="line">
            <p>titre : </p>
            <input type="text" name="name" />
          </div>
          <div className="line">
          <p>description :</p>
          <input className="Message" type="text" name="Téléphone" />
          </div>
          <div className="line">
          <p>prix :</p>
          <input type="text" name="Email" />
          </div>
          <div className="line">
          <p>Nombre de lits :</p>
          <input type="text" name="Message" />
          </div>
          <div className="line">
          <p>surface :</p>
          <input type="text" name="Email" />
          </div>
          <div className="line">
          <p>Nombre de bains :</p>
          <input type="text" name="Email" />
          </div>
          <div className="line">
          <p>gallery :</p>
          <input type="text" name="Email" />
          </div>
         
          
          
          
          
          
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Ajouter_annonces;
