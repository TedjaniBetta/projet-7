import React from 'react';
import '../Card/Card.scss'; // Importation des styles CSS du composant Card
import { Link } from "react-router-dom"; // Importation du composant Link pour gérer les liens internes dans React

function Card({ title, cover, id }) {
    // Rendu du composant Card
    return (
        // Utilisation du composant Link pour créer un lien vers le logement spécifique avec l'ID
        <Link className="card" to={"/logement/" + id}>
            {/* Contenu de la carte */}
            <div className="card__content">
                {/* Titre du logement */}
                <h3 className="card__content__title">{title}</h3>
            </div>
            {/* Image de couverture du logement */}
            <img className="card__image" src={cover} alt={title} />
        </Link>
    );
}

export default Card;