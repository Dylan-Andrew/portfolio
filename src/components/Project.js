import React from "react";
import { projects } from "../data";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FullpageSection } from '@ap.cx/react-fullpage';
import Modal from "./ModalProject";

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
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                    {project.title}
                    </Typography>
                    <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    >
                    {project.description}
                    </Typography>
                   

                    <div className="flex justify-center gap-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" color="white">
                            Explorer
                        </Button>
                      </a>
                      <Button size="lg" color="white" variant="text">
                          <Modal />
                      </Button>
                    </div>

                </div>
                </div>
            </div>
          ))}
        </Carousel>
    </FullpageSection>
  );
}