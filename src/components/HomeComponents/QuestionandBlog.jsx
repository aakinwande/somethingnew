import React from "react";

const QuestionandBlog = () => {
  return (
    <div className="questionblog">
      <div className="questionblog-container">
        <div className="questionblog-left">
          <h3>Questions?</h3>
          <a href="https://calendly.com/kalukalu/30min">
            <button className="btn btn-header-one">
              <h5>SEE OUR FAQ</h5>
            </button>
          </a>{" "}
        </div>
        <div class="vertical"></div>

        <div className="questionblog-right">
          <h3>Blog</h3>
          <a href="https://calendly.com/kalukalu/30min">
            <button className="btn btn-header-one">
              <h5>VISIT OUR BLOG</h5>
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default QuestionandBlog;
