import React from "react";
//  import "./Gestion_slides.css";
import { MDBDataTable } from "mdbreact";

class Gestion_slides extends React.Component {
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
          actions: "Modifier Supprimer",
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },
        {
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },{
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },{
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },{
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },{
          title: "Appartement À Vendre à Nejma Tanger",
          image:
          <a href="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg">https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg</a>
          ,
          actions: "Modifier Supprimer",
        },
      ],
    };
    return (
      <div className="user_div">
        <h1 className="title11">Gestion des slides</h1>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Accueil
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Logement
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div>
              <MDBDataTable striped bordered small data={data} />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
 <div>
              <MDBDataTable striped bordered small data={data} />
            </div>          </div>
        </div>
      </div>
    );
  }
}

export default Gestion_slides;
