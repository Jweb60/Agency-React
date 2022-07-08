import React from "react";

const Card = (biens) => {
  // console.log({biens});

  // const nbrBedrooms = (biens) => {
  //   // let bedroom = {biens.biens.bedrooms}
  //   // console.log(biens.biens.bathrooms);
  // }

  return (
    <li className="card">
      <div id="container">
        <div className="product-details">
          <h1>{biens.biens.property_type.name.fr} de {biens.biens.bedrooms} chambre</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p className="information">{biens.biens.description.fr}</p>
        <div className="control">
          <button className="btn">
              <span className="buy">Plus d'informations</span>
          </button>
        </div>
        </div>

        <div className="product-image">
          <img
            src={biens.biens.images[0].url}
            alt={"Photo du bien " + biens.biens.id}
          />

          <div className="info">
            <h2> Description :</h2>
            <ul>
              <li>
                <strong>Chambre(s) : </strong> {biens.biens.bedrooms}
              </li>
              <li>
                <strong>Salle de bain : </strong>
                {biens.biens.bathrooms}
              </li>
              <li>
                <strong>Surface : </strong>
                {biens.biens.surface_m2} m²
              </li>
              <li>
                <strong>Île : </strong>
                {biens.biens.island.name.fr}
              </li>
              <h3>
                <strong>Prix : </strong>
                {biens.biens.transaction_value} {biens.biens.currency.symbol}
              </h3>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
