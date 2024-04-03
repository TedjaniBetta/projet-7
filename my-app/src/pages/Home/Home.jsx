import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Home/Home.scss'; // Import du fichier de styles Sass
import Card from '../../components/Card/Card.jsx';
import Banner from '../../components/Banner/Banner.jsx';

export default function Home() {
    // Déclaration d'un état pour stocker les données des logements
    const [logements, setLogements] = useState([]);

    // Utilisation de useEffect pour effectuer une requête HTTP lors du chargement du composant
    useEffect(() => {
        // Appel à l'API pour récupérer les données des logements
        axios.get("/Data/logements.json")
            .then(response => {
                // Mise à jour de l'état avec les données des logements
                setLogements(response.data);
            })
            .catch(error => {
                // Gestion des erreurs de requête
                console.error('Error fetching logement data:', error);
            });
    }, []); // Dépendance vide pour s'assurer que useEffect ne s'exécute qu'une seule fois lors du montage du composant

    return (
        <main className='home'>
            {/* Composant de bannière avec un texte spécifié */}
            <Banner txt="Chez vous, partout ailleurs" page="home" />

            {/* Section pour afficher les cartes de logements */}
            <section className="home__container">
                {/* Mapping des données des logements pour afficher une carte pour chaque logement */}
                {logements.map((appartement) => (
                    <Card className='card' key={appartement.id} id={appartement.id} title={appartement.title} cover={appartement.cover} />
                ))}
            </section>
        </main>
    );
}