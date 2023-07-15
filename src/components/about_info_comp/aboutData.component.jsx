import { Fragment } from "react";
import "./aboutData.component.css";
import AbtMain from "./abtDataMain.component";

import introImg from "../../assets/background/about_intro.png";
import abtImg1 from "../../assets/images/about/1.png";
import abtImg2 from "../../assets/images/about/2.png"
import abtImg3 from "../../assets/images/about/3.png"
import abtImg4 from "../../assets/images/about/4.png"
import abtImg5 from "../../assets/images/about/5.png"

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
    imgSrc: abtImg1,
    quote: null,
    content: `A Peer Mentor is a current student in their second year or above, who offers support and tips for being a successful student. Peer Mentors help to welcome new students and show them how things work at university and around campus. They are willing to share their own knowledge and experiences at VIT-AP University and are full of tips and tricks that can unlock the mysteries of academic study. Peer Mentors know how to connect the dots and make the experience of coming to University a little less overwhelming.`,
  },
  {
    dataId: "main",
    heading: "ABOUT MENTEE-MENTOR INTERACTION",
    imgSrc: abtImg2,
    quote: null,
    content: `Stressful or depressed – personal, study or health-related problems make it hard to manage the demands of daily life, career and professional life. Talking to someone who understands the pressures and difficulties that are experienced can always assist in rejuvenating life. `,
  },
  {
    dataId: "main",
    heading: "ADMIN DEPARTMENT",
    imgSrc: abtImg3,
    quote: "“Powerful people make places powerful.”",
    content: `The Admin department organizes, handles and holds the committee together through success and setbacks. They primarily provide administrative and secretarial support for the committee and the program. Experienced, collaborating, and a trained cross-functional communicator are some of the many traits of these members. The admin department is the backbone of our peer mentoring committee .`,
  },
  {
    dataId: "main",
    heading: "EMOTIONAL WELLNESS AND SUPPORT",
    imgSrc: abtImg4,
    quote: "“If you are broken, you do not have to stay broken.”",
    content: `Provides evidence-based tips to improve the  thoughts of peers and the ability to overcome situations in life by empathetic advice. This department seeks its peers to be acquainted with their peers and be free with them for their emotional well being . The emotional wellness and support department is always here to support its peers in any difficulty related to their emotions.`,
  },
  {
    dataId: "main",
    heading: "HOSTEL DEPARTMENT-MENS",
    imgSrc: abtImg5,
    quote: null,
    content: `Stressful or depressed – personal, study or health-related problems make it hard to manage the demands of daily life, career and professional life. Talking to someone who understands the pressures and difficulties that are experienced can always assist in rejuvenating life. `,
  },
  {
    dataId: "main",
    heading: "HOSTEL DEPARTMENT-WOMENS",
    imgSrc: abtImg1,
    quote: null,
    content: `Stressful or depressed – personal, study or health-related problems make it hard to manage the demands of daily life, career and professional life. Talking to someone who understands the pressures and difficulties that are experienced can always assist in rejuvenating life. `,
  },
  {
    dataId: "main",
    heading: "EVENT DEPARTMENT",
    imgSrc: abtImg2,
    quote: null,
    content: `Event management involves overseeing all works leading up to and during an event, whether a conference or any organized gathering. Specific responsibilities of an event manager might include:`,
  },
  {
    dataId: "main",
    heading: "DESIGN AND MEDIA DEPARTMENT",
    imgSrc: abtImg3,
    quote: "Design is intelligence made visible.",
    content: `The design and media team is responsible for works related to posters and for maintaining social media accounts and also communications for the program.`,
  },
  {
    dataId: "main",
    heading: "DOCUMENTATION DEPARTMENT",
    imgSrc: abtImg4,
    quote:
      "Documentation is not a step on a linear timeline, and certainly not the one at the end.",
    content: `Documentation refers to a set of records that students keep to provide evidence or information that can be used to inform decisions. In the workplace, documentation is retained records of student and committee actions and events as required by the committee.`,
  },
  {
    dataId: "main",
    heading: "ACADEMICS DEPARTMENT",
    imgSrc: abtImg5,
    quote: "An investment in knowledge pays the best interest.",
    content: `The Academics department deals with helping the students in completing their degree smoothly, without any bumps and problems. This includes help in course registrations, effective reading and much more. It also helps students with study tips for their examinations.`,
  },
];

const AboutData = () => {
  return (
    <>
      <div className='abt_container'>
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
          <AbtMain abtData={aboutdata}/>
        
      </div>
    </>
  );
};

export default AboutData;
