import React from "react";
import { PageHero } from "../../components";
import bannerVolunteer from "../../assets/img/banner-volunteer.png";
import "./Volunteer.scss";

function VolunteerSuccess() {
  return (
    <div>
      <PageHero headingText="Volunteer With Us" img={bannerVolunteer} />
      <div className="page-section">
        <div className="volunteer__success-container">
          <h2>Thank You!</h2>
          <p>
            I appreciate you taking the time to submit your application to
            volunteer. Whenever we have openings for volunteers, we will be sure
            to get in touch with you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VolunteerSuccess;
