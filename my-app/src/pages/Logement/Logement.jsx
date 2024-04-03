import React, { useState, useEffect } from "react";
import Host from "../../components/Host/Host";
import Carousel from '../../components/Carousel/Carousel'
import TagName from "../../components/TagName/TagName";
import Stars from '../../components/Stars/Stars'
import Dropdown from '../../components/Dropdown/Dropdown'
import Error from '../../components/Errors/index'
import { useParams } from "react-router-dom";
import axios from 'axios';  // Importez Axios
import './Logement.scss'

export default function Logement () {
    const params = useParams()
    const [logement, setLogement] = useState(null); // Utilisez useState pour stocker les données du logement

    useEffect(() => {
        // Utilisez Axios pour charger les données du fichier JSON
        axios.get('/Data/logements.json')
            .then(response => {
                // Une fois les données chargées avec succès, trouvez le logement correspondant aux paramètres de l'URL
                const logementData = response.data.find(item => item.id === params.id);
                setLogement(logementData);
                if (!logementData) return <Error />; // Mettez à jour l'état avec les données du logement
            })
            .catch(error => {
                console.error('Error fetching logement data:', error);
            });
    }, [params.id]); // Assurez-vous de charger les données à chaque fois que les paramètres de l'URL changent

    // Si le logement n'a pas encore été chargé, affichez un  message d'er
    if (logement){

    // Destructurez les données du logement
    const { title, description, pictures, equipments, tags, location, host, rating } = logement;
    
    return (
        <main className="logement">
          <Carousel photos={pictures} />
    
          <section className="info-logement-part-1 flex-between">
            <div>
              <h1 className="logement__title">{title}</h1>
              <h2 className="logement__location">{location}</h2>
              <TagName className="logement__tagName" tags={tags} />
            </div>
            
            <div className="flex-reverse">
              <Host className="logement__host" name={host.name} picture={host.picture}/>
              <Stars className="logement__rating" rating={rating}/>
            </div>
          </section>
    
          <section className="info-logement-part-2">
            <Dropdown className="logement__dropdownDescription" title="Description" content = {description} page="logement"/>
            <Dropdown className="logement__dropdownEquipements" title="Equipements" content = {equipments} page="logement"/>
          </section>
          
        </main>
      );
    }
}