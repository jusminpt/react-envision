import React from "react";
import { PageHero, ReportCard } from "../../components";
import bannerFinancial from "../../assets/img/banner-financial.png";
import "../Pages.scss";

function FinancialReport() {
  return (
    <div>
      <PageHero headingText="Financial Report" img={bannerFinancial} />
      <div className="page-section">
        <p>
          The finances of the Envision Health Access Initiative are completely
          open and available to all of the initiative's funders. As Envision
          relies on donations, it is transparent about how money is used to
          carry out its mission. Donors can have faith that Imagine is making
          good use of their money to aid those in need all throughout the world.
          To ensure transparency and accountability, Envision provides its
          donors with access to annual financial reports detailing the
          organization's operations. By emphasizing transparency and
          accountability, Envision inspires trust among donors and other
          stakeholders while also advancing the cause of justice and equity.
        </p>
        <div className="card-section">
          {/* TODO: Wait for report */}
          <ReportCard
            textInput="Financial reports for 2022"
            textBtn="See Document"
            urlBtn="/"
          />
          <ReportCard
            textInput="Financial reports for 2022"
            textBtn="See Document"
            urlBtn="/"
          />
          <ReportCard
            textInput="Financial reports for 2022"
            textBtn="See Document"
            urlBtn="/"
          />
        </div>
      </div>
    </div>
  );
}

export default FinancialReport;
