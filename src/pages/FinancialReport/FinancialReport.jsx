import React from "react";
import { PageHero, ReportCard } from "../../components";
import bannerFinancial from "../../assets/img/banner-financial.png";
import "../Pages.scss";

function FinancialReport() {
  const reportYear = [
    {
      year: 2019,
      urlBtn:
        "https://drive.google.com/file/d/1DpBYsnqZcao0Gc3zxXu1IJE5dvT_aqpI/view?usp=share_link",
    },
    {
      year: 2020,
      urlBtn:
        "https://drive.google.com/file/d/12EhAwGiw9iQM4BKkb7Rpw00ZwHOnImyc/view?usp=share_link",
    },
    {
      year: 2022,
      urlBtn:
        "https://drive.google.com/file/d/1AdQ_jtiipXzrr8dsIMX2FJ5NSoOjwnMF/view?usp=share_link",
    },
  ];

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
          {reportYear.map((item) => (
            <ReportCard
              textInput={`Financial reports for ${item.year}`}
              textBtn="See Document"
              urlBtn={item.urlBtn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FinancialReport;
