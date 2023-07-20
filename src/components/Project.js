import React from "react";
import { projects } from "../data";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FullpageSection } from '@ap.cx/react-fullpage';
import { Avatar } from "@material-tailwind/react";

export default function Projects() {
  return (
    <FullpageSection id="projects" className="text-gray-400 bg-gray-900 body-font">
      <Carousel className="rounded-xl">
        {projects.map((project) => (
          <div className="relative h-full w-full">
                <img
                src={project.image}
                alt="image 1"
                className="h-full w-full object-cover blur-sm"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                <div className="w-3/4 text-center md:w-2/4 bg-black/50 rounded-lg p-10">
                    <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-lg sm:text-2xl lg:text-4xl"
                    >
                    {project.title}
                    </Typography>
                    <Typography
                    variant="lead"
                    color="white"
                    className="mb-8 opacity-80 text-base sm:text-sm md:text-lg"
                    >
                    {project.description}
                    </Typography>
                    <Typography
                    variant="h4"
                    color="white"
                    className="mb-2 opacity-80 text-xl">
                      Technologies utilisées
                    </Typography>
                    <div className="flex justify-center">
                      <div className="tech-grid my-5 lg:my-10 grid grid-cols-4 gap-2">
                        {project.technologies.map((technology) => (
                          <Avatar src={technology.logo} alt={technology.name} title={technology.name} size="xxl" variant="rounded" className="m-5 md:mx-10 transition duration-300 ease-in-out transform hover:scale-105 tech"/>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" color="white">
                            Explorer
                        </Button>
                      </a>
                    </div>

                </div>
                </div>
            </div>
          ))}
        </Carousel>
    </FullpageSection>
  );
}