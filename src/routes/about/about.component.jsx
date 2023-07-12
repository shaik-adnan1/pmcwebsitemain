import { Fragment } from "react";

import AboutData from "../../components/about_info_comp/aboutData.component";

import "./about.component.css";

const About = () => {
  return (
    <Fragment>
      <div className="about_section section">
      <div className='about_section_header'>
        <h1>About</h1>
      </div>

     <AboutData />
      </div>

    </Fragment>
  );
};

export default About;
