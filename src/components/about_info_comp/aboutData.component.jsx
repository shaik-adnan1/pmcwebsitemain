import { Fragment } from "react";
import "./aboutData.component.css";

import introImg from "../../assets/background/about_intro.png";

const aboutdata = [
  {
    dataId: "intro",
    heading: "Academics",
    data: `At VIT-AP, all programmes have been carefully crafted for a holistic development
              of the students. The curriculum is designed to build strong fundamental concepts in 
              tandem with applications based on industry requirements. The emphasis is on autonomous 
              learning with a balanced mix of co- and extra-curricular activities enabling students 
              to chart their own course. This is achieved through a Fully Flexible Credit System 
              (FFCSTM) in which students can select courses, faculty, timings, venue and design a 
              personalized time-table in each semester, to suit their interests and aspirations. 
    
          Apart from Engineering, VIT-AP offers various other programs that include BBA, 
          B.Com, BA.LL.B, BA.LL.B, Dual Degree of B.A. - M.A. in Public Services, Dual Degree of B.Sc.
          – M.Sc. in Data Science, M.Sc. Data Science and M.Sc. Physics and M.Sc. Chemistry and the 
          list goes on with new courses offered every passing year. At our university, we believe in 
          gaining knowledge and applying it in our life just like our motto- “Apply Knowledge. 
          Improve Life!”`,
    id: 1,
  },
  {
    dataId: "intro",
    heading: "Community",
    data: `We  provide education, recreation and support opportunities to
            individuals. The peer mentor may challenge the mentee with new
            ideas, and encourage the mentee to move beyond their comfort zone.
            Most peer mentors are picked for their sensibility, confidence,
            social skills and reliability.`,
    id: 2,
  },
  {
    dataId: "main",
    heading: "PEER MENTORING COMMUNITY",
    quote: null,
    content: `A Peer Mentor is a current student in their second year or above, who offers support and tips for being a successful student. Peer Mentors help to welcome new students and show them how things work at university and around campus. They are willing to share their own knowledge and experiences at VIT-AP University and are full of tips and tricks that can unlock the mysteries of academic study. Peer Mentors know how to connect the dots and make the experience of coming to University a little less overwhelming.`,
  },
];

const AboutData = () => {
  return (
    <Fragment>
      <div className='about_section_intro'>
        <div className='abt_sec_cont'>
          <img className='about_intro_img' src={introImg} alt='' />
          <div className='about_intro-content'>
            {aboutdata.map((cur, i) => {
              return cur.dataId === "intro" ? (
                <div className={"sec_intro" + (i + 1) + " sec_intro"}>
                  <h1 className='intro_heading heading'>{cur.heading}</h1>
                  <p className='intro_content'>{cur.data}</p>
                </div>
              ) : null;
            })}{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutData;
