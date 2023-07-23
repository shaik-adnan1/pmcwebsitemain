import "./events.component.css";

import EventData from "../../components/events/eventData.component";
import eventImg from "../../assets/background/events_intro.png"

const Events = () => {
  return (
    <div className='events_section'>
      <div className='events_intro_section'>
        <div className='events_sec_header header'>
          <h1>events</h1>
        </div>
        <div className='event_intro_content'>
          <img className='event_intro_img' src={eventImg} alt='' />
          <p>
            Here at VIT-AP, we encourage the development of students in an
            enriching environment where everyone is enabled to unfold and
            explore their interests even outside the classroom. VITAP frequently
            organize events which are very essential to developing skills such
            as team-work, leadership and management. Here's a breakdown on the
            major kind of events which have took place in VIT-AP.
          </p>
        </div>
      </div>
      <div className='evnts_sec_container'>
        <EventData />
      </div>
    </div>
  );
};

export default Events;
