import React from "react";
import { PageHero, ResourceCard } from "../../components";
import "./Resources.scss";
import "../Pages.scss";

function Resources() {
  return (
    <div>
      <PageHero headingText="Resources" />
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
        <div className="resourcesCard-section">
          {/* TODO: Find the info and doc associate with content */}
          <ResourceCard
            textInput="HIV and Covid-19 Prevention"
            urlBtn="resourses/hiv-covid-19"
          />
          <ResourceCard textInput="Our financial reports" />
        </div>
      </div>
    </div>
  );
}

export default Resources;
