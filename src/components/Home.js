import React from 'react';
import { Typography } from "@material-tailwind/react";
import { FullpageSection } from '@ap.cx/react-fullpage';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <FullpageSection id="home">
        <div className="relative h-full w-full">
            <img
            src="./images/Home.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                  <div
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                  <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                  Hello! Je suis Dylan Andrew
                  </Typography>
                  <TypeAnimation
                    sequence={[
                      'En recherche d\'alternance',
                      1500,
                      'Développeur Web',
                      1000,
                      'Développeur mobile',
                      1000,
                      'Développeur logiciel',
                      1000,
                      'Développeur VR',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '0.8em', display: 'inline-block', color: 'white' }}
                    repeat={Infinity}
                    className='font-sans'
                  />
                  </div>
              </div>
            </div>
        </div>
    </FullpageSection>
  )
}
