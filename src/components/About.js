import React from 'react';
import { Button, Typography } from "@material-tailwind/react";
import { FullpageSection } from '@ap.cx/react-fullpage';

export default function About() {
  return (
    <FullpageSection id="about">
        <div className="relative h-full w-full">
            <img
            src="./images/About.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 grid grid-cols-6 gap-4">
              <div className="w-3/4 flex justify-center col-span-2 ml-auto">
                  <img
                      src="/images/Dylan_Andrew.png"
                      alt=""
                      className="w-3/4 h-auto rounded-full"/>
              </div>
              <div className="w-3/4 md:w-3/4 col-span-4">
                  <Typography
                  variant="h2"
                  color="white"
                  className="mb-4"
                  >
                    Dylan Andrew RAZAFINTSALAMA
                  </Typography>
                  <Typography
                  variant="lead"
                  color="white"
                  className="mb-4 text-justify">
                  Passionné à la fois par les jeux vidéo, notamment DOTA 2, et par les sports automobiles, 
                  je suis un développeur informatique titulaire d'une double licence obtenue à l'<a href="https://esti.mg/accueil" className="text-blue-600 visited:text-purple-600" title="Ecole Supérieure des Technologies de l'Information">ESTI</a> et à 
                  l'<a href="https://www.u-pec.fr/" className="text-blue-600 visited:text-purple-600" title="Université Paris-Est Créteil">UPEC</a>. 
                  Je suis ravi d'annoncer que je vais poursuivre mes études en Master à l'<a href="https://www.esiee-it.fr/fr" className="text-blue-600 visited:text-purple-600">ESIEE-IT</a>, 
                  spécialisé dans le domaine de la <a href="https://www.esiee-it.fr/fr/formation-bac-5-manager-en-ingenierie-informatique-m2i-dev-vr-et-jeux-video" className="text-blue-600 visited:text-purple-600">réalité virtuelle, 
                  des jeux vidéo et des métavers.</a> Cette opportunité m'offre un cadre idéal pour approfondir mes compétences et connaissances dans le développement, 
                  en exploitant ma passion pour les technologies immersives et les mondes virtuels. Grâce à ma solide formation académique et à ma détermination, 
                  je suis prêt à relever de nouveaux défis et à contribuer activement à des projets innovants dans le domaine en constante évolution de la VR et des jeux vidéo.
                  </Typography>
                  <a
                  href="/pdf/CVDylanAndrew.pdf"
                  download="CV-Dylan_Andrew.pdf"
                  >
                    <Button>Télécharger mon CV</Button>
                  </a>
              </div>
            </div>
        </div>
    </FullpageSection>
  );
}
