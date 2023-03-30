import React from "react";
import { PageHero, TeamCard } from "../../components";
import BannerAboutUs from "../../assets/img/banner-aboutus.png";
import teamData from "../../data/teamData.js";
import "./AboutUs.scss";

// const teamData = [
//   {
//     id: 1,
//     name: "Dr Elisha Caldwell, DHA MPH",
//     position: "Founder and President of Envision",
//     description:
//       "Elisha was born in Liberia, Africa.  He emigrated from Liberia through Sierra Leone as a refugee. During his journey he was internally displaced many times before he settled in the United States of America. He has worked in Sierra Leone, South Sudan, Liberia and the USA. /n Dr. Eli holds a Masters degree in Global Public Health and his Doctorate in Healthcare Management and Administration. With more than 10 years experience in the global healthcare system he is an expert in leadership, program planning, implementation and evaluation./n The idea for Envision started in South Sudan, the sum of Elisha’s life experiences, his refugee journey, and his education.  He was drawn to return to humanitarian work as “part of a global citizenship effort to improve the livelihood of vulnerable people and communities.”  Envision was founded in 2018 as his passion project.",
//     img: "img/image1.png",
//     twiterLink: "",
//     instragramLink: "",
//     facebookLink: "",
//     linkedinLink: "",
//   },
//   {
//     id: 2,
//     name: "Steve Mullins, MBA",
//     position: "Chief Financial Officer",
//     description:
//       "Steve Mullins, the Chief Financial Officer for Envision Health Access Initiative, has 37 years’ experience in international business, with postings and experience in Japan and Germany as well as US, the last 25 in positions of general management, including operations, finance and accounting. He holds a MBA in finance and management from California State University. He holds a Black belt certification in six sigma. He has led global companies with responsibility of $100MM+ in Asia, Europe and North America and consulted some 60+ companies in financial restructuring and fiscal management.",
//     img: "img/image2.png",
//     twiterLink: "",
//     instragramLink: "",
//     facebookLink: "",
//     linkedinLink: "",
//   },
//   {
//     id: 3,
//     name: "Deconktee Jallah",
//     position: "Deputy Country Director - Liberia",
//     description:
//       "Deconktee Stryker-Jallah, a resident of Liberia, holds a BBA in Administration from the United Methodist University and a certificate in Project Planning &amp-vamp; Proposal writing from the Liberia Institute of Public Administration, is the Deputy Country Director.",
//     img: "img/image3.png",
//     twiterLink: "",
//     instragramLink: "",
//     facebookLink: "",
//     linkedinLink: "",
//   },
//   {
//     id: 4,
//     name: "Harrison Fayia",
//     position: "Wash Project Manager",
//     description: "",
//     img: "img/image4.png",
//     twiterLink: "",
//     instragramLink: "",
//     facebookLink: "",
//     linkedinLink: "",
//   },
//   {
//     id: 5,
//     name: "Larry M. Tuah",
//     position: "M&E Manager",
//     description: "",
//     img: "img/image5.png",
//     twiterLink: "",
//     instragramLink: "",
//     facebookLink: "",
//     linkedinLink: "",
//   },
// ];

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
        <div className="team-container">
          {/* TODO: Create a team member card and insert here */}
          <h2>Meet our team</h2>
          <span>Meet our team</span>
          <div className="team-container-card">
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
