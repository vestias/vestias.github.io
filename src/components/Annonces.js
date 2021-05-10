import React from "react";
import "./users.css";
import { MDBDataTable } from "mdbreact";

class Annonces extends React.Component {
  render() {
    const annonces_data = {
      columns: [
        {
          label: 'id',
          field: 'id',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'title',
          field: 'title',
          sort: 'asc',
          width: 270
        },
        {
          label: 'actions',
          field: 'actions',
          sort: 'asc',
          width: 200
        }
      ],
      rows: [
        {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        },
        {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        }, {
          id: '645',
          title: 'Appartement À Vendre à Nejma Tanger',
          actions: 'Modifier Supprimer'
        },
      ]
    };
    return (
      <div className="div99"> 
            <div>
              <h1 className="title11">List des Annonces</h1>
              <div>
                <MDBDataTable striped bordered small data={annonces_data} />
              </div>{" "}
            </div>
          </div>
    );
  }
}

export default Annonces;
