import { Fragment } from "react";
import "./home.component.css";
import { ArrowCircleRight, ArrowRight } from "@phosphor-icons/react";

import heroBackground from '../../assets/background/hero_bg_left.svg'
import { Link } from "react-router-dom";

import Carousel from "../../components/carousel/carousel.component";

const Home = () => {
  return (
    <Fragment>
      <div className='home_hero_section'>
        <div className='hero_img'>
          <img src={heroBackground} alt='' className='hero_bg_img' />
        </div>
        <div className='hero_section-content'>
          <div className='hero_section_name_main'>
            <h1 className='hero_section_name_main_1'>
              Peer mentoring <br /> <span>"A</span> committee
              <span> is not about the king,</span>
              <br />
              <span>it's about the kingdom</span>
            </h1>
            <Link to='/' className='link_btn hero_action_btn'>
              Know More <ArrowRight size={20} className="arrow-right"/>
            </Link>
          </div>
        </div>
      </div>
      <Carousel />
    </Fragment>
  );
};

export default Home;
