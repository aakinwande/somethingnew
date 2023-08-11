import React from 'react'
import GhostBook from "../../images/whatwedo-icons/ghostwriting.svg";
import CopyBook from "../../images/whatwedo-icons/copywriting.svg";
import MarketingImg from "../../images/whatwedo-icons/marketing.svg";

const WhatweDo = () => {
  return (
    <div className="what-we-do">
    <p className="what-we-do-head">What We Do</p>
    <div className="what-we-do-headers">
      <h2 className="what-we-do-header-1">
        Professional
     Ghostwriting
      </h2>
      <h2 className="what-we-do-header-2">Copywriting</h2>
      <h2 className="what-we-do-header-3">
        Marketing and Public Relations
      </h2>
    </div>

    <div className="newbox">
      <div className="box">
        <img className="what-we-do-img" src={GhostBook} alt="ghostimg" />
      </div>
      <div className="box">
        <img className="what-we-do-img" src={CopyBook} alt="ghostimg" />
      </div>
      <div className="box">
        <img className="what-we-do-img" src={MarketingImg} alt="ghostimg" />
      </div>
    </div>
    <div className="what-we-do-params">
      <p className="what-we-do-params-1">
        A unique and discrete way to bring your ideas and stories to life.
        Experienced ghostwriters is to assist you in articulating your
        thoughts.
      </p>
      <p className="what-we-do-params-2">
        A unique and discrete way to bring your ideas and stories to life.
        Experienced ghostwriters is to assist you in articulating your
        thoughts.
      </p>
      <p className="what-we-do-params-3">
        A unique and discrete way to bring your ideas and stories to life.
        Experienced ghostwriters is to assist you in articulating your
        thoughts.
      </p>
    </div>
    <div className="what-we-do-button">
    <a
        href="/ghostwriting"
      >
        <button className="what-we-do-button-1">
          <h3>LEARN MORE</h3>
        </button>
      </a>{" "}
      <a
        href="/copywriting"
      >
        <button className="what-we-do-button-2">
          <h3>LEARN MORE</h3>
        </button>
      </a>{" "}
      <a
        href="/marketing"
      >
        <button className="what-we-do-button-3">
          <h3>LEARN MORE</h3>
        </button>
      </a>{" "}
    </div>
  </div>
  )
}

export default WhatweDo
