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
        <div className="resourcesCard-section">
          {resourcesData.map((resourceData) => (
            <ResourceCard key={resourceData.id} resourcesData={resourceData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
