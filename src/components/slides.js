import React from "react";
import "./users.css";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  render() {
    const data = {
      columns: [
        {
          label: "title",
          field: "title",
          sort: "asc",
          width: 150,
        },
        {
          label: "image",
          field: "image",
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
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions:  <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>,
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: <div className="action_div">
          <Link
                 className="nav-link Modifier"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Modifier</span>
               </Link>
               <Link
                 className="nav-link Supprimer"
                 to="#"
                 style={{ textDecoration: "none" }}
               >
                 <span href="#">Supprimer</span>
               </Link>
       </div>
        }
      ],
    };
    
    
    return (
      <div className="div99"> 
            <div>
              <h1 className="title11">Gestion des slides Logement</h1>
              <div>
                <MDBDataTable striped bordered small data={data} />
              </div>{" "}
            </div>
          </div>
    );
  }
}

export default Admin;
