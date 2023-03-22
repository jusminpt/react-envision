import React from "react";
import { PageHero, ResourceCard } from "../../components";
import bannerResources from "../../assets/img/banner-resources.png";
import resourcesData from "../../data/resourcesData";
import "./Resources.scss";
import "../Pages.scss";

function Resources() {
  return (
    <div>
      <PageHero headingText="Resources" img={bannerResources} />
      <div className="page-section">
        {/* TODO: Wait for updated paragraph */}
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
          {resourcesData.map((item) => (
            <ResourceCard resourcesData={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
