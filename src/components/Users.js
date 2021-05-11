import React from "react";
import "./users.css";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  render() {
    
    
    const users_data = {
      columns: [
        {
          label: "id",
          field: "id",
          sort: "asc",
          width: 150,
        },
        {
          label: "pseudo",
          field: "pseudo",
          sort: "asc",
          width: 270,
        },
        {
          label: "actions",
          field: "actions",
          sort: "asc",
          width: 200,
        },
      ],
      rows: [
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        }, {
          id: "645",
          pseudo: "Utilisateur",
          actions: <div className="action_div">
             <Link
                    className="nav-link Modifier"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Modifier</span>
                  </Link>
                  <Link
                    className="nav-link Supprimer"
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Supprimer</span>
                  </Link>
          </div>,
        },
      ],
    };
    return (
      <div className="div99"> 
            <div>
              <h1 className="title11">List des utilisteurs</h1>
              <div>
                <MDBDataTable striped bordered small data={users_data} />
              </div>{" "}
            </div>
          </div>
    );
  }
}

export default Admin;
