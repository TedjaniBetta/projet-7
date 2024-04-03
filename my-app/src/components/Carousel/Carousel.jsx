import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.scss";

function Carousel({ photos }) {
  // État pour suivre l'index de la photo actuellement affichée
  const [index, setIndex] = useState(0);

  // Fonction pour passer à la prochaine photo
  const nextSlide = useCallback(() => {
    // Utilisation de prevIndex pour garantir la mise à jour de l'index en toute sécurité
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  // Effet pour déclencher le changement de photo automatiquement toutes les 5 secondes
  useEffect(() => {
    if (photos.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [photos.length, nextSlide]);

  // Fonction pour passer à la photo précédente
  function prevSlide() {
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  }

  // Rendu du composant Carousel
  return (
    <section className="carousel">
      {/* Affichage de la photo actuelle */}
      <img className="carousel__img" src={photos[index]} alt={`Logement ${index + 1}`} />

      {/* Boutons de navigation et compteur */}
      {photos.length > 1 && (
        <>
          <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
            <img src="/assets/icone_carousel_prev.svg" alt="Prev" />
          </button>
          <button className="carousel__button carousel__button--next" onClick={nextSlide}>
            <img src="/assets/icone_carousel_next.svg" alt="Next" />
          </button>
          <p className="carousel__counter">
            {index + 1} / {photos.length}
          </p>
        </>
      )}
    </section>
  );
}

export default Carousel;