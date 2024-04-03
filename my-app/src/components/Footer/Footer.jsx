import React from "react";
import './Footer.scss'; // Importation des styles CSS du composant Footer
import logoFooter from '../Footer/logoFooter.png'; // Importation du logo du footer

function Footer() {
    return (
        // Pied de page
        <footer className="footer">
            {/* Logo du footer */}
            <img className="footer__logo" src={logoFooter} alt="Logo" />
            {/* Mention de droits d'auteur */}
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;