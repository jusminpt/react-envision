import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import founder from "../../assets/img/founder.png";
import video from "../../assets/img/places video.mp4";
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="home__video">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" autoPlay={true} loop />
        </video>
        <div className="home__video-content">
          <div className="home__video-content-text">
            <h1>Our Commitment </h1>
            <p>
              Envision Health Access Initiative is a 501(c)3 non-profit that
              promotes social justice, human development, important healthcare
              services, public health education, healthcare strengthening, and
              use in underprivileged areas.
            </p>
            <Button
              textInput="Learn more"
              styleBtn="primary"
              urlBtn="/whatwedo"
            />
          </div>
        </div>
      </div>
      <div className="page-section">
        <h2>What We Do</h2>
        <p>
          Conduct community-based projects in Malaria, tuberculosis, and
          HIV/AIDS (Incorporating Technology into Healthcare and logistics),
          Maternal and Child Health, Water, Hygiene, and Sanitation (WASH),
          Healthcare Access and Delivery (Medical Education), and Global Health
          Security (improve disease detection/laboratory/pharmaceuticals) based
          on the unique experience of the management team and the available
          skilled healthcare and community service labor that we have access to
          in developing countries.
        </p>
      </div>

      <div className="home__explore">
        <div className="page-section">
          <h3>Explore Projects</h3>
          <hr />
          <ul>
            <li>
              <Link to="/whatwedo">Tanzania</Link>
            </li>
            <li>
              <Link to="/whatwedo">Liberia</Link>
            </li>
            <li>
              <Link to="/whatwedo">Malawi</Link>
            </li>
            <li>
              <Link to="/whatwedo">United States</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-section">
        <h2>Our Achivement</h2>
        <p>
          Envision Health Access is an emerging NGO with a track record in 2019
          of distributing over $600,000 worth of pharmaceutical products to
          underserved clinics  and hospitals with history of stockouts in and
          around Monrovia as part of its mission to strengthen access to primary
          healthcare in Liberia.
        </p>
        <div className="founder__content">
          <div className="founder__content-header">
            <h2>Meet Our Founder</h2>
          </div>
          <div className="founder__content-detail">
            <div className="founder__content-detail-left">
              <img src={founder} alt="img-founder" />
            </div>
            <div className="founder__content-detail-right">
              <span>Founder and CEO</span>
              <p>
                Liberian refugee Elisha founded Envision Health Access
                Initiative. He has over 10 years of global healthcare expertise
                and a background in Global Public Health and Healthcare
                Management. He is a specialist in leadership, program planning,
                execution, and assessment. Envision was inspired by Elisha's
                refugee experience and desire to help vulnerable communities.
                His passion project, started in 2018, provides important public
                health services to those in need.
              </p>
              <Button
                textInput="Meet the Team"
                styleBtn="primary"
                urlBtn="/aboutus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
