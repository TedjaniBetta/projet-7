import React from "react";
import "./Host.scss"; // Importation des styles CSS du composant Host

function Host({ name, picture }) {
  // Séparation du nom complet en prénom et nom de famille
  const words = name.split(" ");
  const firstName = words[0];
  const lastName = words[words.length - 1];

  return (
    // Conteneur pour afficher le nom de l'hôte et sa photo
    <div className="host">
      {/* Bloc pour afficher le prénom et le nom de famille de l'hôte */}
      <div>
        <p className="host__name host__name--firstName">{firstName}</p>
        <p className="host__name host__name--lastName">{lastName}</p>
      </div>
      {/* Affichage de la photo de l'hôte */}
      <img src={picture} alt={name} className="host__picture" />
    </div>
  );
}

export default Host;