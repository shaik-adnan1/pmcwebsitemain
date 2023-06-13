
import { Fragment } from 'react'
import './carousel.component.css'

{/**

carousel -- images(slider) -- dots(navigating) -- 

carousel_heading: ''
carousel_img_srcs = [src1, src2, src3]

*/}


const Carousel = () => {    
    return (
      <Fragment>
        <div className='carousel-container'>
          <div className='carouse_img-container'>
            <img
              src='E:\code\PMC\pmcwebsite\src\assets\images\hero_carousel\hc_1.jpg'
              alt=''
            />
            <h1>Hey there</h1>
          </div>
        </div>
      </Fragment>
    );

}

export default Carousel;