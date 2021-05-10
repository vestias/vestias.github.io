import React from "react";
import "./users.css";
import { MDBDataTable } from "mdbreact";

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
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
        },
        {
          id: "645",
          pseudo: "Utilisateur",
          actions: "Modifier Supprimer",
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
