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
import AmazonLogo from "../../images/kdp.svg";
import RakutenKobo from "../../images/kobo.svg";
import AbeBooks from "../../images/abebooks.svg";
import "../styles/copywriting.css";


const Copywriting = () => {
  return (
    <div className="ghost-container">
      <div className="copy">
        <div class="main-ghost">
          <h5 className="main-header-ghost">
            We’ll sell your products by positioning them to sell themselves.
          </h5>
          <p className="para-ghost">
            We’ll digest your vision and weave narratives that sell it to your
            target audience.
          </p>
          <button className="btn btn-ghost-one">BOOK A CONSULT</button>
          <p className="featured-header">As featured in</p>
          <img className="img-header" src={AmazonLogo} alt="" />
          <img className="img-header" src={RakutenKobo} alt="" />
        </div>
        <div class="menu-ghost">
          <img className="img-header-left" src={AbeBooks} alt="" />
        </div>
      </div>

      <div className="ghost-writring-what-we-do">
        <h4 className="ghost-header">COPYWRITING</h4>
        <p className="ghost-service">
          Some our comprehensive copywriting services by genre are:
        </p>
        <section className="featured-background">
          <div className="box">
            <h4>
              <a className="gtext" href="link_to_sales_funnel_scripts">Sales funnel scripts</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="link_to_email_campaign">Email campaign</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="link_to_sales_call_scripts">Sales call scripts</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="link_to_website_content">Website content</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="link_to_thought_leadership_articles">
                Thought leadership articles
              </a>
            </h4>
          </div>
        </section>
      </div>

      <div className="what-we-do">
        <h2 className="what-we-do-head">What We Do</h2>
        <div className="content grid">
          <div className="box btn_shadow">
            <a href="/ghostwriting">
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
    </div>
  );
};

export default Copywriting;
