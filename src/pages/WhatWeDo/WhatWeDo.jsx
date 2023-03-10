import React from "react";
import { PageHero } from "../../components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./WhatWeDo.scss";
// import "../Pages.scss";

/* TODO: Might need to create a projectData.js to store info */

function WhatWeDo() {
  return (
    <div className="container">
      <PageHero headingText="What We Do" />
      <div className="page-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.226226Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
          ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
          urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut
          diam quam, semper iaculis condimentum ac, vestibulum eu nisl.226226
        </p>

        <h1 className="title">Explore Projects in United States</h1>

        <div className="projectGrid">
          <div className="card">
            {/* Project Card element for 3x2 Grid */}
            <ProjectCard
              projTitleInput="Title of Project"
              paraInput="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
              style={{ paddingBottom: "30px", paddingTop: "30px" }}
            />
          </div>

          <div className="card">
            {/* Project Card element for 3x2 Grid */}
            <ProjectCard
              projTitleInput="Title of Project"
              paraInput="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
              style={{ paddingBottom: "30px", paddingTop: "30px" }}
            />
          </div>

          <div className="card">
            {/* Project Card element for 3x2 Grid */}
            <ProjectCard
              projTitleInput="Title of Project"
              paraInput="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
              style={{ paddingBottom: "30px", paddingTop: "30px" }}
            />
          </div>
        </div>

        {/* Second H1 Title */}
        <h1 className="title-2">Explore Projects in Liberia </h1>

        <div className="projectGrid">
          <div className="card">
            {/* Project Card element for 3x2 Grid */}
            <ProjectCard
              projTitleInput="Title of Project"
              paraInput="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
              style={{ paddingBottom: "30px", paddingTop: "30px" }}
            />
          </div>

          <div className="card">
            {/* Project Card element for 3x2 Grid */}
            <ProjectCard
              projTitleInput="Title of Project"
              paraInput="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
              style={{ paddingBottom: "30px", paddingTop: "30px" }}
            />
          </div>

          <div className="card">
            {/* Project Card element for 3x2 Grid */}
            <ProjectCard
              projTitleInput="Title of Project"
              paraInput="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
              style={{ paddingBottom: "30px", paddingTop: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
