import React from 'react';
import { Typography } from "@material-tailwind/react";
import { FullpageSection } from '@ap.cx/react-fullpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <FullpageSection id="about">
        <div className="relative h-full w-full">
            <img
            src="./images/About.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full place-items-center bg-black/75 lg:grid lg:grid-cols-6 gap-4">
              <div className="about-avatar w-1/2 lg:w-3/4 flex justify-center lg:col-span-2 lg:ml-auto my-avatar">
                  <img
                      src="/images/Dylan_Andrew.png"
                      alt=""
                      className="w-1/4 lg:w-3/4 h-auto rounded-full"/>
              </div>
              <div className="about-content w-3/4 md:w-3/4 lg:col-span-4">
                  <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-lg sm:text-2xl lg:text-4xl"
                  >
                    Dylan Andrew RAZAFINTSALAMA
                  </Typography>
                  <Typography
                  variant="lead"
                  color="white"
                  className="mb-4 text-justify sm:text-sm md:text-lg">
                  Passionné à la fois par les jeux vidéo, notamment DOTA 2, et par les sports automobiles, 
                  je suis un développeur informatique titulaire d'une double licence obtenue à l'<a href="https://esti.mg/accueil" className="text-blue-600 visited:text-purple-600" title="Ecole Supérieure des Technologies de l'Information">ESTI</a> et à 
                  l'<a href="https://www.u-pec.fr/" className="text-blue-600 visited:text-purple-600" title="Université Paris-Est Créteil">UPEC</a>. 
                  Je suis ravi d'annoncer que je vais poursuivre mes études en Master à l'<a href="https://www.esiee-it.fr/fr" className="text-blue-600 visited:text-purple-600">ESIEE-IT</a>, 
                  spécialisé dans le domaine de la <a href="https://www.esiee-it.fr/fr/formation-bac-5-manager-en-ingenierie-informatique-m2i-dev-vr-et-jeux-video" className="text-blue-600 visited:text-purple-600">réalité virtuelle, 
                  des jeux vidéo et des métavers.</a> Cette opportunité m'offre un cadre idéal pour approfondir mes compétences et connaissances dans le développement, 
                  en exploitant ma passion pour les technologies immersives et les mondes virtuels. Grâce à ma solide formation académique et à ma détermination, 
                  je suis prêt à relever de nouveaux défis et à contribuer activement à des projets innovants dans le domaine en constante évolution de la VR et des jeux vidéo.
                  </Typography>
                  <div className="grid grid-cols-2 flex justify-evenly about-icons">
                    <a
                    href="/pdf/CVDylanAndrew.pdf"
                    download="CV-Dylan_Andrew.pdf"
                    className="col-span-1 about-icon"
                    title="CV Dylan Andrew"
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} size="2xl" style={{ color: "white" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/dylan-andrew-razafintsalama/" className="col-span-1 about-icon" title="LinkedIn Dylan Andrew">
                      <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "white" }} />
                    </a>
                  </div>
              </div>
            </div>
        </div>
    </FullpageSection>
  );
}
