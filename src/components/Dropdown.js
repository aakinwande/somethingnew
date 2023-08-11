import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li className="dropdown-link">
          <a className="header-dropdown" href="/ghostwriting">Professional Ghostwriting</a>
          <ul className="secondrop">
            <li>
              <a className="list-items" href="/business-books">Business Books</a>
            </li>
            <li>
              <a className="list-items" href="/memoir-autobiography">Memoir/Autobiography</a>
            </li>
            <li>
              <a className="list-items" href="/general-nonfiction">General Nonfiction</a>
            </li>
            <li>
              <a className="list-items" href="/self-help">Self-help</a>
            </li>
            <li>
              <a className="list-items" href="/fiction">Fiction</a>
            </li>
            <li>
              <a className="list-items" href="/childrens">Children’s</a>
            </li>
            <li>
              <a className="list-items" href="/social-media">Social Media</a>
            </li>
            <li>
              <a className="list-items" href="/speeches">Speeches</a>
            </li> 
          </ul>
        </li>
        <li className="dropdown-link">
          <a className="header-dropdown" href="/copywriting">Copywriting</a>
          <ul className="secondrop">
            <li>
              <a className="list-items" href="/sales-funnel-scripts">Sales funnel scripts</a>
            </li>
            <li>
              <a className="list-items" href="/email-campaign">Email campaign</a>
            </li>
            <li>
              <a className="list-items" href="/thought-leadership-articles">
                Thought leadership articles
              </a>
            </li>
            <li>
              <a className="list-items" href="/sales-call-scripts">Sales call scripts</a>
            </li>
            <li>
              <a className="list-items" href="/website-content">Website content</a>
            </li>
          </ul>
        </li>
        <li className="dropdown-link">
          <a className="header-dropdown" href="/marketing">Marketing and Public Relations</a>
          <ul className="secondrop">
            <li>
              <a className="list-items" href="/brand-content-strategy">Brand content strategy</a>
            </li>
            <li>
              <a className="list-items" href="/personality-public-image">Personality public image</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
