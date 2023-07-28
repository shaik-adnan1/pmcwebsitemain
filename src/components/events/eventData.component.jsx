import "./eventData.component.css";

import Carousel from "../carousel/carousel.component";

const eventsdata = [
  {
    eventName: "UNIVERSITY DAY CELEBRATIONS 2022",
    eventImgs: [
      { src: require("../carousel/hero_carousel/hc_1.jpg"), id: 1 },
      { src: require("../carousel/hero_carousel/hc_2.jpg"), id: 2 },
      { src: require("../carousel/hero_carousel/hc_3.jpg"), id: 3 },
      { src: require("../carousel/hero_carousel/hc_4.jpg"), id: 4 },
    ],
  },
  {
    eventName: "INDEPENDENCE DAY CELEBRATIONS 2020",
    eventImgs: [
      { src: require("../carousel/hero_carousel/hc_3.jpg"), id: 1 },
      { src: require("../carousel/hero_carousel/hc_1.jpg"), id: 2 },
      { src: require("../carousel/hero_carousel/hc_4.jpg"), id: 3 },
      { src: require("../carousel/hero_carousel/hc_2.jpg"), id: 4 },
    ],
  },
  {
    eventName: "VITOPIA SPORTS 2018",
    eventImgs: [
      { src: require("../carousel/hero_carousel/hc_2.jpg"), id: 1 },
      { src: require("../carousel/hero_carousel/hc_3.jpg"), id: 2 },
      { src: require("../carousel/hero_carousel/hc_1.jpg"), id: 3 },
      { src: require("../carousel/hero_carousel/hc_4.jpg"), id: 4 },
    ],
  },
  {
    eventName: "WOMEN'S DAY CELEBRATIONS",
    eventImgs: [
      { src: require("../carousel/hero_carousel/hc_4.jpg"), id: 1 },
      { src: require("../carousel/hero_carousel/hc_1.jpg"), id: 2 },
      { src: require("../carousel/hero_carousel/hc_3.jpg"), id: 3 },
      { src: require("../carousel/hero_carousel/hc_2.jpg"), id: 4 },
    ],
  },
];

const EventData = () => {
  return (
    <div className='events_container'>
      

      <div className='events_carousel_container'>
        {eventsdata.map((cur, i) => {
          return (
            <div className='event_blocks'>
              <h1 className='event_heading heading'>{cur.eventName}</h1>
              <div className='event_carousel_container'>
                <Carousel className="testclass" slides={cur.eventImgs} />
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventData;
