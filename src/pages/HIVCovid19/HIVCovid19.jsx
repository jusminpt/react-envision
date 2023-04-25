import React from "react";
import { PageHero, ReportCard } from "../../components";
import bannerHiv from "../../assets/img/banner-hiv.png";
import "../Pages.scss";

function HIVCovid19() {
  return (
    <div>
      <PageHero headingText="HIV and Covid-19 Prevention" img={bannerHiv} />
      <div className="page-section">
        <p>
          The Envision Health Access Initiative recognizes that the pandemic has
          disproportionately affected vulnerable populations, including
          HIV-positive people. We educate and equip them to avoid COVID-19.
          Education is essential to avoiding the spread of the illness and
          ensuring community health. We also teach people how to protect others
          from COVID-19 by wearing masks and staying away. Envision provides
          knowledge and services to keep communities safe and healthy through
          difficult times.
        </p>
        <div className="card-section">
          <ReportCard
            textInput="Visit the CDC for more information"
            textBtn="Visit Page"
            urlBtn="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
          />
        </div>
      </div>
    </div>
  );
}

export default HIVCovid19;
