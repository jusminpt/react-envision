import React, { useEffect, useState } from "react";
import { PageHero } from "../../components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import bannerWhatwedo from "../../assets/img/banner-whatwedo.png";
import projectData from "../../data/projectData";
import "./WhatWeDo.scss";

function WhatWeDo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 980);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 980;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div>
      <PageHero headingText="What We Do" img={bannerWhatwedo} />
      <div className="page-section">
        <p>
          Non-governmental organizations and civil society groups from the US,
          Liberia, Malawi, and Tanzania are providing essential public health
          services to underserved populations. Envision is working to prevent
          HIV/AIDS and malaria, enhance maternal and child health, and provide
          access to clean water and proper sanitation. Public health and access
          to healthcare are two areas that can benefit greatly from
          collaboration across institutions. Their efforts are especially
          important in areas where access to healthcare is hampered by factors
          such as low income and other social and economic factors. By working
          together, we are able to build communities and provide health benefits
          for everyone.
        </p>
      </div>

      <div className={!isMobile ? "page-section" : null}>
        <div className="projects">
          {/* Liberia Projects */}
          <h2 className="projects__header">Liberia</h2>
          <hr />
          {projectData
            .filter((item) => item.imageChoice.includes("liberia"))
            .map((countryItem) => (
              <ProjectCard
                key={countryItem.id}
                imageChoice={countryItem.imageChoice}
                textPosition={countryItem.textPosition}
                headerText={countryItem.headerText}
                pText={countryItem.pText}
              />
            ))}

          {/* Tanzania Projects */}
          <h2 className="projects__header">Tanzania</h2>
          <hr />
          {projectData
            .filter((item) => item.imageChoice.includes("tanzania"))
            .map((countryItem) => (
              <ProjectCard
                key={countryItem.id}
                imageChoice={countryItem.imageChoice}
                textPosition={countryItem.textPosition}
                headerText={countryItem.headerText}
                pText={countryItem.pText}
              />
            ))}

          {/* Malawi  Projects */}
          <h2 className="projects__header">Malawi</h2>
          <hr />
          {projectData
            .filter((item) => item.imageChoice.includes("malawi"))
            .map((countryItem) => (
              <ProjectCard
                key={countryItem.id}
                imageChoice={countryItem.imageChoice}
                textPosition={countryItem.textPosition}
                headerText={countryItem.headerText}
                pText={countryItem.pText}
              />
            ))}

          {/* United States Projects */}
          <h2 className="projects__header">United States</h2>
          <hr />
          {projectData
            .filter((item) => item.imageChoice.includes("usa"))
            .map((countryItem) => (
              <ProjectCard
                key={countryItem.id}
                imageChoice={countryItem.imageChoice}
                textPosition={countryItem.textPosition}
                headerText={countryItem.headerText}
                pText={countryItem.pText}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
