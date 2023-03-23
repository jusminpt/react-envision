import React from "react";
import { PageHero } from "../../components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./WhatWeDo.scss";

//Project Card Images
import image from "../../assets/proj-img.png"
import imageTwo from "../../assets/proj-img02.png"

function WhatWeDo() {
  return (
    <div className="container">
      <PageHero headingText="What We Do" />
      <div className="page-section">

        <p className="description">
        Non-governmental organizations and civil society groups from the US, Liberia, Malawi, and Tanzania are providing essential public health services to underserved populations. Envision is working to prevent HIV/AIDS and malaria, enhance maternal and child health, and provide access to clean water and proper sanitation. Public health and access to healthcare are two areas that can benefit greatly from collaboration across institutions. Their efforts are especially important in areas where access to healthcare is hampered by factors such as low income and other social and economic factors. By working together, we are able to build communities and provide health benefits for everyone.
        </p>

        <div className="projects">

          <div className="line"></div>
          
          {/* 1st Project Card */}
          <div className="card">
            <ProjectCard
              imageChoice={image}
              //Places text on LEFT or RIGHT side of container
              textPosition="left"
              headerText="The WASH Project"
              pText="Girls are the breadwinners in impoverish communities, walking away from home to fetch water envision builds boreholes and hand pumps to provide clean and safe drinking water enabling woman and girls to have clean water close to their homes."
            />
          </div>

          {/* 2nd Project Card */}
          <div className="card">
            <ProjectCard
              imageChoice={imageTwo}
              //Places text on LEFT or RIGHT side of container
              textPosition="right"
              headerText="Mother and Child Health Project"
              pText="our work is not complete until pregnant woman living under $1 dollar per day receive readily accessible medical care to give birth in a skilled medical facility."
            />
          </div>

          <div className="line-2"></div>

        </div>
   
      </div>

    </div>
  );
}

export default WhatWeDo;