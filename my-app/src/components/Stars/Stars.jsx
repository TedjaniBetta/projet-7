import React from "react";
import "./Stars.scss";

function Stars({ rating }) {
  // Initialisation du tableau pour stocker les étoiles
  const stars = [];

  // Boucle pour créer les étoiles en fonction de la note
  for (let i = 1; i <= 5; i++) {
    // Vérifie si l'indice de l'étoile est inférieur ou égal à la note
    if (i <= rating) {
      // Si oui, ajoute une étoile pleine au tableau
      stars.push(
        <span className="star star--full" key={i}>
          <img className="star__icone" src="/assets/stars.png" alt="icone_rating" />
        </span>
      );
    } else {
      // Si non, ajoute une étoile vide au tableau
      stars.push(
        <span className="star star--empty" key={i}>
          <img className="star__icone" src="/assets/starsempty.png" alt="icone_rating" />
        </span>
      );
    }
  }

  // Renvoie le composant étoiles avec les étoiles créées
  return (
    <div className="stars">
      {stars}
    </div>
  );
}

export default Stars;