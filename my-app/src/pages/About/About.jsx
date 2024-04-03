import React, { useEffect, useState } from "react"
import Banner from "../../components/Banner/Banner"
import Dropdown from '../../components/Dropdown/Dropdown'
import './About.scss'
import axios from "axios"


export default function About() {
  const [Aboutdata, setAboutdata] = useState([])
    useEffect(() => {
         axios.get("/Data/about.json")
    .then(response => setAboutdata(response.data))
    }, [])

    return (
      <main className="about">
        <Banner txt="" page="about"/>
        {Aboutdata.map((aboutItem) => {
          console.log(aboutItem.title)
          return (
            <Dropdown className="dropdown" key={aboutItem.title} title={aboutItem.title} content={aboutItem.description} page="about"/>
        );})}
      </main>
    );
  }