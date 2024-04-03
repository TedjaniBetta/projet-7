import React from "react";
import "./Banner.scss";

function Banner({ page, txt }) {
    // Diviser le texte en mots séparés par des virgules
    const words = txt.split(",");
    // Extraire la première partie et la dernière partie du texte
    const firstPart = words[0];
    const lastPart = words[words.length - 1];

    // Rendu du composant Banner
    return (
        <section className={"banner banner--mobile banner--" + page}>
            {/* Vérifier si la première partie n'est pas vide */}
            {firstPart !== "" ? (
                <div>
                    {/* Afficher la première partie suivie d'une virgule */}
                    <span className="banner__txt">{firstPart + ","}</span>
                    {/* Afficher la dernière partie */}
                    <span className="banner__txt">{lastPart}</span>
                </div>
            ) : (
                // Si la première partie est vide, ne rien afficher
                ""
            )}
        </section>
    );
}

export default Banner;