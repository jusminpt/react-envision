import React from "react";
import { PageHero } from "../../components";
import TopGrid from "../../components/GetInvolvedTopGrid/GetInvolvedTopGrid.jsx";
import GetInvolvedCard from "../../components/GetInvolvedCard/GetInvolvedCard";
import GetInvolvedFlexCard from "../../components/GetInvolvedFlexCard/GetInvolvedFlexCard";
import bannerGetinvolved from "../../assets/img/banner-getinvolved.png";
import "./GetInvolved.scss";

function GetInvolved() {
  return (
    <div>
      <PageHero headingText="Get Involved" img={bannerGetinvolved} />

      <div className="page-section">
        <h2 className="involved-title">Ways to Support Us</h2>
        <p className="involved-p">
          Your contribution will significantly improve the lives of the people
          in Liberia, Malawi, and Tanzania by providing them access to
          education, healthcare, and sustainable development initiatives.
          Additionally, you can also consider volunteering your time and skills
          to support Envision's initiatives and make a positive difference in
          the world.
        </p>

        <div className="top-grid">
          <TopGrid />
        </div>

        <div className="middle-card">
          <GetInvolvedCard
            textInput="Join us in making a difference in the world by lending your support to our cause."
            textBtn="See Document"
            urlBtn="/"
          />
        </div>

        <div className="end-card">
          <GetInvolvedFlexCard
            textInputOne="More People"
            textInputTwo="More Impact"
            pInput="Together, we can create a healthier world with Envision Health Access Initiative."
            textBtn="Join Us"
            urlBtn="/"
          />
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
