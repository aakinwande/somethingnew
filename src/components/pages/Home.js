import React from "react";
import "../styles/home.css";
import QuestionandBlog from "../HomeComponents/QuestionandBlog";
import NewsLetter from "../newsletter/NewsLetter";
import HomeHero from "../HomeComponents/HomeHero";
import OurWorkBooks from "../HomeComponents/OurWorkBooks";
import Testimonial from "../HomeComponents/Testimonial";
import Masterpiece from "../HomeComponents/Masterpiece";
import WhatweDo from "../HomeComponents/WhatweDo";
import CallToAction from "../HomeComponents/CallToAction";

export default function Home() {
  return (
    <>
     <HomeHero />
      <OurWorkBooks />
      <CallToAction />
      <Testimonial />
      <WhatweDo />
      <Masterpiece />
      <QuestionandBlog />
      <NewsLetter />
    </>
     
 
  );
}
