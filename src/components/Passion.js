import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { passions } from "../data"
import { FullpageSection } from '@ap.cx/react-fullpage';

export default function Passion() {
    return (
        <FullpageSection id="passion">
            <Carousel className="rounded-xl">
                {passions.map((passion) => (
                    <div className="relative h-full w-full">
                        <img
                        src={passion.image}
                        alt="gallery"
                        className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 h-full w-full place-items-center bg-black/75 grid grid-cols-5 gap-4">
                            <figure className="w-3/4 flex justify-center col-span-2 ml-auto">
                                <img
                                    className="h-full w-full rounded-lg"
                                    src={passion.logo}
                                    alt="nature image"
                                />
                            </figure>
                            <div className="w-3/4 text-center md:w-3/4 col-span-3">
                                <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                {passion.title}
                                </Typography>
                                <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                                >
                                {passion.description}
                                </Typography>
                                <div className="flex justify-center gap-2">
                                <a href={passion.link} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" color="white">
                                        Explorer
                                    </Button>
                                </a>
                                {
                                    passion.profile && 
                                    <a href={passion.profile} target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" color="white">
                                            Mon profil
                                        </Button>
                                    </a>
                                }
                                </div>
                            </div>
                        </div>
                    </div>                        
                ))}
            </Carousel>
        </FullpageSection>
    );
}