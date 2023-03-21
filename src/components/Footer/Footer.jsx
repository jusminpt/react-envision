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
          <p>Help Us In The Fight Against AIDS</p>
          <Button
            textInput="Donate"
            styleBtn="secondary"
            urlBtn="https://www.paypal.com/donate/?hosted_button_id=RYT8VQHJQY8FQ"
          />
        </div>
        <div className="app__footer-links">
          <div className="app__footer-links-left">
            <div>
              <h3>Navigation</h3>
              <ul>
                {linksData.map((item, index) => (
                  <li key={`link-${index}`}>
                    <Link to={`${item.url}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>What We Do</h3>
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
              <h3>About Us</h3>
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
              <h3>Talk to Us</h3>
              <ul>
                <li>
                  655 Morris Avenue STE 2 <br />
                  The Bronx NY 10451 US
                </li>
                <li>Tel 646-589-2589</li>
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
