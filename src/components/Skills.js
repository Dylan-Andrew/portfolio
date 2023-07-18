import { CheckBadgeIcon } from "@heroicons/react/24/solid";


import { FullpageSection } from '@ap.cx/react-fullpage';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { projects } from "../data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip
} from "@material-tailwind/react";

import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { skills } from "../data";

export default function Skills() {

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
   
        
<FullpageSection id="about">
<div className="relative h-full w-full">
                <Typography
                variant="h1"
                color="red"
                className="text-3xl md:text-4xl lg:text-5xl text-center p-10 mb-2"
                >
                Compétences
                </Typography>
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index}>
              <Card className="w-96 m-5">
                <CardHeader floated={false} className="h-80">
                  <img src={skill.logo} alt="" className="w-9/12 h-9/12 m-auto mt-7"/>
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {skill.title}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
              </div>
            ))}
          </Slider>

          </div>
    </FullpageSection>
     
  );
}