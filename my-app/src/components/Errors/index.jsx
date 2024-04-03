import React from "react";
import { Link } from "react-router-dom"; // Importation du composant Link pour gérer les liens internes dans React
import './Error.scss'; // Importation des styles CSS du composant Error

function Error() {
    return (
        // Contenu de la page d'erreur 404
        <main className="error">
            {/* Titre de l'erreur */}
            <h1 className="error__heading">404</h1>
            {/* Message d'erreur */}
            <p className="error__paragraph">Oups! La page que vous demandez n'existe pas.</p>
            {/* Lien pour retourner sur la page d'accueil */}
            <Link className="error__link" to="/">Retourner sur la page d'accueil</Link>
        </main>
    );
}
 
export default Error;