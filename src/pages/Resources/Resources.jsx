import React from "react";
import { PageHero, ResourceCard } from "../../components";
import bannerResources from "../../assets/img/banner-resources.png";
import resourcesData from "../../data/resourcesData";
import covidPic from "../../assets/img/Rectangle-35.jpg";
import financialPic from "../../assets/img/image-1.jpg";
import "./Resources.scss";
import "../Pages.scss";

function Resources() {
  return (
    <div>
      <PageHero headingText="Resources" img={bannerResources} />
      <div className="page-section">
        <div className="resourcesCard-section">
          {/* TODO: find nested route solution */}
          <ResourceCard resourcesData={resourcesData[0]} img={covidPic} />
          <ResourceCard resourcesData={resourcesData[1]} img={financialPic} />
        </div>
      </div>
    </div>
  );
}

export default Resources;
