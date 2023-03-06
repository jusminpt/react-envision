import React from "react";
import "./AboutUs.scss";
import { PageHero } from "../../components";

function AboutUs() {
  return (
    <div>
      <PageHero headingText="About Us" />
      <div className="page-section">
        <p>
          Envision Health Access Initiative, formerly called Eli Health System,
          is a 501 (c)3 organization founded in 2018 by Dr. Elisha Caldwell to
          promote access to HIV care services. Envision is committed to ending
          the HIV epidemic through its collaborative works with governments at
          national and local levels, national and international organizations,
          community-based organizations, faith-based organizations, and HIV
          research institutions.
        </p>
        {/* TODO: Style the section */}
        <div className="mission-container">
          <div className="mission-div-50">
            <div className="mission-div-50-content">
              <h3>Mission</h3>
              <p>
                We promote healthy lives in the world’s impoverished
                communities, work to improve longevity for people living with
                HIV/AIDS, and work to reduce the social stigma, transmission,
                and HIV-related morbidity and mortality by innovative methods.
              </p>
            </div>
            <div className="mission-div-50-content">
              <h3>Vision</h3>
              <p>
                A world without fear of HIV/AIDS, reduced social stigma and
                improved the quality of life for people living in the world’s
                most impoverished communities.
              </p>
            </div>
          </div>
          <div className="mission-div-100">
            <div>
              <h3>Values</h3>
              <p>
                Our core values are an integrated public health workforce,
                excellence, innovation, compassion, and respect for human
                dignity.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutUs-teamMember">
          {/* TODO: Create a team member card and insert here */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
