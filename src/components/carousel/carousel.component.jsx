import { Fragment, useState } from "react";
import "./carousel.component.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

// import hr_Img1 from "./hero_carousel/hc_1.jpg";
// import hr_Img2 from "./hero_carousel/hc_2.jpg";
// import hr_Img3 from "./hero_carousel/hc_3.jpg";
// import hr_Img4 from "./hero_carousel/hc_4.jpg";

// const hero_carousel = [hr_Img1, hr_Img2, hr_Img3, hr_Img4];

{
  /**

carousel -- images(slider) -- dots(navigating) -- 

carousel_heading: ''
carousel_img_srcs = [src1, src2, src3]

*/
}

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  console.log(length);
  if (!Array.isArray(slides) || slides.length <= 0) {
    console.log(null);
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const pervSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <>
      <div className='carousel_container'>
        <div className='carousel_dir'>
          <ArrowLeft
            className='left_arrow carousel_arrows'
            size={15}
            weight='bold'
            onClick={pervSlide}
          />
          <ArrowRight
            className='right_arrow carousel_arrows'
            size={15}
            weight='bold'
            onClick={nextSlide}
          />
        </div>
        <div className="slider_dots">
          {slides.map(( _ , i) => {
            return (
              <div className="slide_indicators"></div>
            )
          })}
        </div>
          {slides.map((cur, index) => {
            return (
              <Fragment>
                
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={cur.id}
                >
                  {index === current && <img src={cur.src} key={cur.id} alt='' />}
                </div>
              </Fragment>
            );
          })}
        </div>
      {/* <div className='carousel-container'>
          <div className='carouse_im  g-container'>
            <img src={carouselImg} alt="" /> 
            <h1>Hey there</h1>
          </div>
        </div> */}
    </>
  );
};

export default Carousel;
