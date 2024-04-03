import React from 'react';
import { NavLink } from 'react-router-dom'; // Importation du composant NavLink pour gérer les liens de navigation
import Kasa from './logo.png'; // Importation du logo

import './Header.scss'; // Importation des styles CSS du composant Header

function Header() {
    return (
        // En-tête de la page
        <header className='header'>
            {/* Logo de l'application */}
            <img className="header__logo" src={Kasa} alt='Logo' />

            {/* Barre de navigation */}
            <nav className='header__navbar'>
                {/* Lien de navigation vers la page d'accueil */}
                <NavLink
                    className="header__navbar__link" // Classe de base pour les liens de navigation
                    activeClassName="active" // Classe à ajouter lorsque le lien est actif
                    exact // Indique que le lien est actif seulement pour l'URL exacte
                    to="/">Accueil</NavLink>

                {/* Lien de navigation vers la page "À propos" */}
                <NavLink
                    className="header__navbar__link" // Classe de base pour les liens de navigation
                    activeClassName="active" // Classe à ajouter lorsque le lien est actif
                    to="/about">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;