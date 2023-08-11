import React from 'react'
import BlogPic1 from "../../images/blogpics/1.jpg";
import BlogPic2 from "../../images/market.jpg";
import BlogPic3 from "../../images/children.webp";

const BlogBlog = () => {
  return (
    <div className="allcategories">
      <div class="allcategories-grid">
        <div class="allcategories-item">
          <a href="/allcategories">
            <div className="">
              <div class="allcategories-image-container">
                <img
                  src={BlogPic1}
                  alt="description"
                  class="allcategories-image"
                />
              </div>
              <h3 className="allcategories-topic">Take the Risk</h3>
              <p className="allcategories-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <a href="/allcategories" class="allcategories-params">
                CONTINUE READING <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </a>
        </div>
        <div class="allcategories-item">
          <a href="/allcategories">
            <div className="">
              <div class="allcategories-image-container">
                <img
                  src={BlogPic3}
                  alt="description"
                  class="allcategories-image"
                />
              </div>
              <h3 className="allcategories-topic">Children Book</h3>
              <p className="allcategories-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <a href="/allcategories" class="allcategories-params">
                CONTINUE READING <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </a>
        </div>
        <div class="allcategories-item">
          <a href="/allcategories">
            <div className="">
              <div class="allcategories-image-container">
                <img
                  src={BlogPic2}
                  alt="description"
                  class="allcategories-image"
                />
              </div>
              <h3 className="allcategories-topic">The Statistics</h3>
              <p className="allcategories-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <a href="/allcategories" class="allcategories-params">
                CONTINUE READING <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogBlog
