import React from "react";
import { PageHero } from "../../components";
import TopGrid from "../../components/GetInvolvedTopGrid/GetInvolvedTopGrid.jsx";
import './GetInvolved.scss'

function GetInvolved() {
  return (

    
    <div>
      <PageHero headingText="Get Involved" />

      <div className="main-container">
        
        <h1 className="involved-title">Ways to Support Us</h1>
        <p>Your contribution will significantly improve the lives of the people in Liberia, Malawi, and Tanzania by providing them access to education, healthcare, and sustainable development initiatives. Additionally, you can also consider volunteering your time and skills to support Envision's initiatives and make a positive difference in the world.</p>


        <div className="top-grid">
        <TopGrid />
        </div>

      </div>
    
    </div>
  );
}

export default GetInvolved;
