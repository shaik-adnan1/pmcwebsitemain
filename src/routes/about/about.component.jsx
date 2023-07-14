import { Fragment } from "react";

import AboutData from "../../components/about_info_comp/aboutData.component";

import "./about.component.css";
import Footer from "../footer/footer.component";
import Carousel from "../../components/carousel/carousel.component";
import carouselData from "../../components/carousel/carouselData.component";

const About = () => {
  return (
    <Fragment>
      <div className='about_section section'>
        <div className='about_section_header'>
          <h1>About</h1>
        </div>
        <div className='abt_sec_container'>
        <AboutData />

        </div>
      </div>
    </Fragment>
  );
};

export default About;
