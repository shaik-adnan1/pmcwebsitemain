import { Fragment } from "react";
import "./home.component.css";
import { ArrowCircleRight, ArrowRight } from "@phosphor-icons/react";

import heroBackground from "../../assets/background/hero_bg_left.svg";
import { Link } from "react-router-dom";

import carouselData from "../../components/carousel/carouselData.component";
import Carousel from "../../components/carousel/carousel.component";
import HomeData from "../../components/home_info_comp/homedata.component";
import Footer from "../footer/footer.component";
// import { carouselData } from "./carouseData.component";

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
              Know More <ArrowRight size={20} className='arrow-right' />
            </Link>
          </div>
        </div>
        <div className='hero_section_carousel'>
          <Carousel slides={carouselData} />
        </div>
        <img src='' alt='' />
      </div>

      <div className='home_content_section'>
        <HomeData />
      </div>
      {/* <div className="footer_section">
        <Footer />
      </div> */}
    </Fragment>
  );
};

export default Home;
