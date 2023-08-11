import React from "react";
import "../styles/allcategoriespage.css";
import AllBlogPic from "../../images/blogpics/1.jpg";

const AllCategoriesBlogPage = () => {
  return (
    <div className="all-container">
      <a href="/blog" className="all-back">
        <i className="fa-solid fa-arrow-left"></i>
        <h3 className="back-text">BACK TO BLOG</h3>
      </a>

      <div className="all-body">
        <p className="all-date">25th January, 2023</p>
        <h4 className="all-topic">Take The Risk</h4>

        <img className="all-pic" src={AllBlogPic} alt="" />
        <p className="all-fulldesc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          <br />
          <br/>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>

      <div className="newsletter-head">
        <div>
          <h5>
            Subcribe to our Newsletter for{" "}
            <span className="newsletter-span">$15/Month</span>
          </h5>
          <a
            href="https://sandbox-flw-web-v3.herokuapp.com/pay/pap6co8trgg1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="newsletter-btn">
              <h3>SUBCRIBE</h3>
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesBlogPage;
