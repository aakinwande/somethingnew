import React from 'react'
import AmazonLogo from "../../images/kdp.svg";
import RakutenKobo from "../../images/kobo.svg";
import CreateSpace from "../../images/createspace.svg";

const HomeHero = () => {
  return (
    <div className="home">
    <div class="main">
      <h5 className="main-header">
        Tell us your rough ideas, we’ll tell the world your polished story{" "}
      </h5>
      <p className="para-header">
        In a couple of months, you can be a <span>published author</span>{" "}
        touching lives or not but time will pass regardless.
      </p>{" "}
      <a
        href="https://calendly.com/kalukalu/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-header-one">
          <h3>BOOK A CONSULT</h3>
        </button>
      </a>{" "}
      <a href="/contact-us">
        <button className="btn btn-header-two">
          <h3>CONTACT US NOW</h3>
        </button>
      </a>{" "}
      <p className="featured-header">OUR PARTNERS</p>
      <img className="img-header" src={AmazonLogo} alt="" />
      <img className="img-header" src={RakutenKobo} alt="" />
      <img className="img-header" src={CreateSpace} alt="" />
    </div>
    <div className="menu">
      {/* <img className="img-header-left" src={AbeBooks} alt="" /> */}
    </div>
  </div>
  )
}

export default HomeHero
