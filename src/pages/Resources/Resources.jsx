import React, { useState, useEffect } from "react";
import { PageHero, ResourceCard } from "../../components";
import bannerResources from "../../assets/img/banner-resources.png";
import resourcesData from "../../data/resourcesData";
import "./Resources.scss";
import "../Pages.scss";

function Resources() {
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
      <PageHero headingText="Resources" img={bannerResources} />
      <div className={!isMobile ? "page-section" : null}>
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
