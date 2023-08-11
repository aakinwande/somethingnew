import React from 'react'
import Work1 from "../../images/1.jpg";
import Work2 from "../../images/2.jpg";
import Work3 from "../../images/3.jpg";
import Work4 from "../../images/4.jpg";
import Work5 from "../../images/5.jpg";
import Work6 from "../../images/6.jpg";
import Work7 from "../../images/7.jpg";
import Work8 from "../../images/8.jpg";
import Work9 from "../../images/9.jpg";
import Work10 from "../../images/10.jpg";

const OurWorkBooks = () => {
  return (
    <div className="our-work">
        <h1>Our Work</h1>
        <img className="work-img" src={Work1} alt="img" />
        <img className="work-img" src={Work2} alt="img" />
        <img className="work-img" src={Work3} alt="img" />
        <img className="work-img" src={Work4} alt="img" />
        <img className="work-img" src={Work5} alt="img" />
        <img className="work-img" src={Work6} alt="img" />
        <img className="work-img" src={Work7} alt="img" />
        <img className="work-img" src={Work8} alt="img" />
        <img className="work-img" src={Work9} alt="img" />
        <img className="work-img" src={Work10} alt="img" />
      </div>
  )
}

export default OurWorkBooks
