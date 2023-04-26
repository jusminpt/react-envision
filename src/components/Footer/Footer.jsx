import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Button from "../Button/Button";
import { images } from "../../constants";
import linksData from "../../data/linksData";

function Footer() {
  return (
    <footer>
      <div className="app__footer">
        <div className="app__footer-subtract"></div>
        <div className="app__footer-hero">
          <h3>Help Us In The Fight Against AIDS</h3>
          <Button
            textInput="Donate"
            styleBtn="secondary"
            urlBtn="https://www.paypal.com/donate/?hosted_button_id=RYT8VQHJQY8FQ"
          />
        </div>
        <div className="app__footer-links">
          <div className="app__footer-links-left">
            <div>
              <h4>Navigation</h4>
              <ul>
                {linksData.map((item, index) => (
                  <li key={`link-${index}`}>
                    <Link to={`${item.url}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>What We Do</h4>
              <ul>
                <li>
                  <Link to="/whatwedo">Our Work</Link>
                </li>
                <li>
                  <Link to="/resources/financial-report">Financial Report</Link>
                </li>
                <li>
                  <Link to="/resources/hiv-covid-19">Covid-19</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="app__footer-links-right">
            <div>
              <h4>About Us</h4>
              <ul>
                <li>
                  <Link to="/aboutus">Meet the Team</Link>
                </li>
                <li>
                  <Link to="/aboutus">Our Mission</Link>
                </li>
                <li>
                  <Link to="/getinvolved">Volunteer</Link>
                </li>
                <li>
                  <Link to="/getinvolved">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Talk to Us</h4>
              <ul>
                <li>
                  511 N Reilly Rd Ste A108
                  <br />
                  Fayetteville, NC 28303-2440
                </li>
                <li>Tel 646-589-2589</li>
                <li>
                  <a href="mailto:info@envisionhealthaccess.org">
                    info@envisionhealthaccess.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="app__footer-line" />
        <div className="app__footer-copyright">
          <div>
            <p>© 2022 Envision Health Access. All rights reserved.</p>
          </div>
          <div className="app__flex">
            <img src={images.footerLogo} alt="footer-logo" />
          </div>
          <div className="app__footer-copyright-terms">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
