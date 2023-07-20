import React from "react";
import Slider from 'react-slick';
import { FullpageSection } from '@ap.cx/react-fullpage';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { skills } from "../data";

export default function Skills() {

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }, 
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }, 
      }
    ],
    variableWidth: true,
  };

  return (    
    <FullpageSection id="about" className="bg-[url(../public/images/Skills.jpg)] bg-cover">
      <div className="relative h-full w-full bg-black/75">
        <Typography
        variant="h1"
        color="white"
        className="text-3xl md:text-4xl lg:text-5xl text-center p-10 mb-2"
        >
        Compétences
        </Typography>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index}>
            <Card className="w-96 m-5 bg-black/50">
              <CardHeader floated={false} className="h-80 bg-transparent">
                <img src={skill.logo} alt="" className="w-9/12 h-9/12 m-auto mt-7"/>
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-2">
                  {skill.title}
                </Typography>
              </CardBody>
            </Card>
            </div>
          ))}
        </Slider>
      </div>
    </FullpageSection>
     
  );
}