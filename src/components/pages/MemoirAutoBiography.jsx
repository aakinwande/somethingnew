import React from "react";
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

const MemoirAutoBiography = () => {
  return (
    <div className="ghost-container">
      <div className="ghost">
        <div class="main-ghost">
          <h5 className="main-header-ghost">
            Memoir and Autobiography Ghostwriting{" "}
          </h5>
          <p className="para-ghost">
            Work with kick's team to bring your story to life
          </p>
          <a
            href="https://calendly.com/kalukalu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-ghost-one">
              <h3>BOOK A CONSULT</h3>
            </button>
          </a>{" "}
        </div>
      </div>

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

      <div className="what-we-do">
        <h2 className="what-we-do-head">What We Do</h2>
        <div className="content grid">
          <div className="box btn_shadow">
            <a href="/marketing">
              <h2 className="what-we-do-headers">Professional Ghostwriting</h2>
              <p className="what-we-do-params">
                A unique and discrete way to bring your ideas and stories to
                life. Experienced ghostwriters is to assist you in articulating
                your thoughts, concepts, and tales into polished and
                entertaining material while keeping completely confidential.
              </p>
            </a>
          </div>
          <div className="box btn_shadow">
            <a href="/copywriting">
              <h2 className="what-we-do-headers">Copywriting</h2>
              <p className="what-we-do-params">
                Enhance your message, captivate the attention of your audience,
                and motivate real action. We offer expert copywriting services
                that are aimed to provide your organization with convincing and
                compelling material that has a long-term impact.
              </p>
            </a>
          </div>
          <div className="box btn_shadow">
            <a href="/marketing">
              <h2 className="what-we-do-headers">
                Marketing and Public Relations
              </h2>
              <p className="what-we-do-params">
                Through our Marketing and Public Relations services. We are
                committed to helping your business prosper and connect with your
                target audience on a meaningful level by having a strong
                awareness of the ever-changing marketing landscape and a passion
                for developing great storytelling.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoirAutoBiography;
