import React from "react";
import "./footer.css";
import FooterPic from "../../images/kicklogo/KickLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="top-container-footer">
        <div className="top-footer">
          <div>
            <h1 className="top-footer-header">Services</h1>
            <br />
          </div>
        </div>
        <div className="top-footer-bottom">
          <div>
            <h4>
              <a href="/marketing">GHOSTWRITING</a>
            </h4>
            <a className="a-item" href="/businessbooks">Business Books</a>
            <a className="a-item" href="/memoir-autobiography">Memoir/Autobiography</a>
            <a className="a-item" href="/general-non-fiction">General Nonfiction</a>
            <a className="a-item"href="/self-help">Self-help</a>
            <a className="a-item" href="/fiction">Fiction</a>
            <a className="a-item" href="/children">Children's</a>
            <a className="a-item" href="/social-media">Social Media</a>
          </div>
          <div>
            <h4>
              <a href="/marketing">COPYWRITING</a>
            </h4>
            <a className="a-item" href="/sales-funnel">Sales funnel scripts</a>
            <a className="a-item" href="/email-campaign">Email campaign</a>
            <a className="a-item" href="/sales-call">Sales call scripts</a>
            <a className="a-item" href="/website-content">Website content</a>
            <a className="a-item" href="/thought-leadership">Thought leadership articles</a>
          </div>
          <div>
            <h4>
              <a href="/marketing">MARKETING AND PUBLIC RELATIONS</a>
            </h4>
            <a className="a-item" href="/brand-content">Brand content strategy </a>
            <a className="a-item" href="/personal-public-image">Personality public image </a>
          </div>
        </div>
      </div>

      <div className="top-container-footer-down">
        <div className="top-footer-bottom-down">
          <div>
            <img className="footer-img" src={FooterPic} alt="" />
          </div>
          <div>
            <div className="contact-info-down-two">
              <a className="con-foot-down" href="tel:+2347039365403">
                +234 70-393-65403
              </a>
              <br />
              <a
                className="con-foot-down"
                href="mailto:info@kickandcosynergy.com"
              >
                info@kickandcosynergy.com
              </a>
            </div>
          </div>
          <div>
            <div class="navbar-top-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="navbar-top-icon"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="mailto:info@kickandcosynergy.com"
                class="navbar-top-icon"
              >
                <i class="fas fa-envelope"></i>
              </a>
              <a href="tel:+1234567890" class="navbar-top-icon">
                <i class="fas fa-phone-alt"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="navbar-top-icon"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="navbar-top-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kalukalu1/"
                target="_blank"
                rel="noopener noreferrer"
                class="navbar-top-icon"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="top">
          <div>
            <p>&copy; 2023 Kick and Co. All rights reserved.</p>
          </div>
        </div>
        <div className="bottom">
          <h6>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/akinwandealameen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Al-ameen Akinwande
            </a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
