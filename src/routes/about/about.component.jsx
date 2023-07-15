import { Fragment } from "react";

import AboutData from "../../components/about_info_comp/aboutData.component";

import "./about.component.css";
const About = () => {
  return (
    <Fragment>
      <div className='about_section'>
        <div className='about_section_header header'>
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
