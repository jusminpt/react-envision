import React, { useState, useEffect } from "react";
import bannerGetinvolved from "../../assets/img/banner-getinvolved.png";
import { PageHero } from "../../components";
import GetInvolvedCard from "../../components/GetInvolvedCard/GetInvolvedCard";
import GetInvolvedEndCard from "../../components/GetInvolvedFlexCard/GetInvolvedEndCard";
// import GridCard from "../../components/GridCard/GridCard";
import "./GetInvolved.scss";

function GetInvolved() {
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
      </div>

      <div className={!isMobile ? "page-section" : null}>
        <>
          <GetInvolvedCard
            textInput=" Empower communities with your donation - help us improve, educate and
          help those in need!"
            img="img/getInvoloved1.png"
            bgImg="img/getInvoloved1-2.png"
            position="left"
            textBtn="Donate"
            urlBtn="https://www.paypal.com/donate/?hosted_button_id=RYT8VQHJQY8FQ"
          />
          <GetInvolvedCard
            textInput=" Join us in making a difference in the world by lending your support to our cause."
            img="img/getInvoloved2.png"
            bgImg="img/getInvoloved2-2.png"
            position="right"
            textBtn="Volunteer"
            urlBtn="https://docs.google.com/forms/u/2/d/1Ft8Pz0H_1SMaF9p4vBLKH0nqm22aXKMZC6E2nK2Q60s/edit?usp=forms_home&ths=true"
          />
        </>

        {!isMobile ? (
          <>
            {/* Volunteer picture section */}
            {/* <div className="volunteerPic__container">
              <h2>Our Volunteers</h2>
              <GridCard />
            </div> */}
            <div className="end-card">
              <GetInvolvedEndCard
                textInputOne="More People"
                textInputTwo="More Impact"
                pInput="Together, we can create a healthier world with Envision Health Access Initiative."
                textBtn="Join Us"
                urlBtn="https://docs.google.com/forms/u/2/d/1Ft8Pz0H_1SMaF9p4vBLKH0nqm22aXKMZC6E2nK2Q60s/edit?usp=forms_home&ths=true"
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default GetInvolved;
