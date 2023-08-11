import React from "react";
import "../styles/contact.css";
import NewsLetter from "../newsletter/NewsLetter";

export default function ContactUs() {
  return (
    <>
      <div className="ghost-container">
        <div className="contact">
          <div class="main-contact">
            <h5 className="main-header-copy">Contact</h5>
          </div>
        </div>

        <div className="contact-second">
          <h5 className="contact-head">Need Help? Say Hello</h5>
          <p className="kick-second">
            Our support team is ever ready to provide{" "}
            <span className="contact-span">answers</span> to all your questions!
            Let's tell your story to the world!
          </p>
          <div className="contact-kick">
            <form className="shadow">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  style={{ width: "20%", height: "40px" }}
                />
                <input
                  type="text"
                  placeholder="Email"
                  style={{ width: "40%", height: "40px" }}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                style={{ width: "100%", height: "40px" }}
              />
              <textarea
                cols="30"
                rows="10"
                style={{ width: "100%" }}
              ></textarea>
              <button className="submit-button">Submit Request</button>
            </form>
          </div>
        </div>

        <div className="contact-below">
          <div className="contact-location">
            <h5 className="contact-all-head">Location</h5>
            <p>
              Address:{" "}
              <span className="con-foot">
                PLOT 2450 CADASTRAL ZONE E27, APO RESETTLEMENT ABUJA, NGERIA
              </span>{" "}
            </p>
          </div>
          <div className="contact-info">
            <h5 className="contact-all-head">Contact Info</h5>
            <p>
              Phone:{" "}
              <a className="con-foot" href="tel:+2347039365403">
                +234 70-393-65403
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="con-foot" href="mailto:info@kickandcosynergy.com">
                info@kickandcosynergy.com
              </a>
            </p>
          </div>
        </div>

      <NewsLetter />
      </div>
    </>
  );
}
