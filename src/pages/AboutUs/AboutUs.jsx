import React from "react";
import { PageHero, TeamCard } from "../../components";
import BannerAboutUs from "../../assets/img/banner-aboutus.png";
import teamData from "../../data/teamData.js";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div>
      <PageHero headingText="About Us" img={BannerAboutUs} />
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
        <div className="mission__container">
          <div className="mission-div-50">
            <div className="mission-div-50-content">
              <h3>Mission</h3>
              <p>
                Our mission is to improve local healthcare for those living in
                poverty globally. We will help advance accessible healthcare for
                those in underserved areas by providing innovative, sustainable
                and scalable solutions for chronic healthcare needs.
              </p>
            </div>
            <div className="mission-div-50-content">
              <h3>Vision</h3>
              <p>To be promoters of good health to the poor of the world.</p>
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
        <div className="team__container">
          <h2>Meet our team</h2>
          <span>Meet our team</span>
          <div className="team__container-card">
            {teamData.map((item) => (
              <TeamCard teamData={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
