import React, { useState } from "react";
import "../styles/blog.css";
import AllCagories from "../blog/AllCagories";
import BlogBlog from "../blog/BlogBlog";
import ChildrenBlog from "../blog/ChildrenBlog";
import FictionBlog from "../blog/FictionBlog";
import GhostwritingBlog from "../blog/GhostwritingBlog";
import HelpForWritersBlog from "../blog/HelpForWritersBlog";
import YoungAdultBlog from "../blog/YoungAdultBlog";

export default function Blog() {
  const [selectedPage, setSelectedPage] = useState("All Categories");

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };
  return (
    <>
      <div className="blog-container">
        <div className="blog">
          <div class="main-blog">
          </div>
        </div>
        <div className="blog-second">
          <div>
            <h1 className="selected-title">{selectedPage}</h1>
            <select className="blog-select" onChange={handlePageChange}>
              <option className="blog-value" value="All Categories">
                All Categories
              </option>
              <option className="blog-value" value="Blog">
                Blog
              </option>
              <option className="blog-value" value="Children's Books">
                Children's Books
              </option>
              <option className="blog-value" value="Fiction">
                Fiction
              </option>
              <option className="blog-value" value="Ghostwriting Services">
                Ghostwriting Services
              </option>
              <option className="blog-value" value="Help For Writer">
                Help for Writers
              </option>
              <option className="blog-value" value="Young Adult">
                Young Adult
              </option>
            </select>

            {selectedPage === "All Categories" && <AllCagories />}
            {selectedPage === "Blog" && <BlogBlog />}
            {selectedPage === "Children's Books" && <ChildrenBlog />}
            {selectedPage === "Fiction" && <FictionBlog />}
            {selectedPage === "Ghostwriting Services" && <GhostwritingBlog />}
            {selectedPage === "Help For Writer" && <HelpForWritersBlog />}
            {selectedPage === "Young Adult" && <YoungAdultBlog />}
          </div>
        </div>
        <div className="newsletter-head">
          <div>
            <h5>Subcribe to our Newsletter</h5>
            </div>
            <div className="news-text">
            <p>There's only one way to find out...</p>
            <p>
              Give us a call to begin your journey to becoming a published
              author.
            </p>
            <p>
              Enjoy our white-glove approach to the book-writing process and
              experience the <br />best in quality, talent, and professionalism.
            </p>
          </div>
          <div>
            
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
    </>
  );
}
