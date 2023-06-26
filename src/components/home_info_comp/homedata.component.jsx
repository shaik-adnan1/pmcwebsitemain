import { Fragment } from "react";

import "./homedata.component.css";

import arrowRightB from "../../assets/arrow_right.png";
import arrowLeftB from "../../assets/arrow_left.png";

const homeData = [
  // {
  //   heading: "Who are peer mentors",
  //   content:
  //     "Peer Mentors guide mentees while they pursue academics or career opportunities. They are role models who provide emotional support and validation, assist their mentees in navigating the campus resources, and help their peers become more engaged in the VIT-AP community. The mentors are not necessarily always a professor or alumni. ",
  //   id: 0,
  // },
  {
    heading: "Peer mentoring program",
    content: `This program pairs students with more experienced peers to help navigate their transition as students of VIT-AP university.So what essentially is peer mentoring? Peer mentoring is a term used to describe a student-student relationship in which one student mentors the other through college. Students can also help their juniors and seniors likewise
             According to research, peer mentoring can assist students in adjusting to college life, strengthening their sense of belonging on campus, and increasing their level of interest and involvement in their studies. `,
    id: 1,
    arrow_position: "right",
  },
  {
    heading: "Objectives",
    content:
      "Participating in peer mentoring programs will help first-year mentees: Understand and utilize the campus resources that VITAP has to offer.Create and make progress toward goals that matter to them.Enhance their feeling of connection and belonging at VITAP.",
    id: 2,
    arrow_position: "left",
  },
  {
    heading: "BENEFITS",
    content:
      "Research suggests that peer mentoring can help students navigate college, feel greater connection to campus and become more engaged and involved in their learning. That’s why we’re dedicated in developing robust and supportive mentoring programs: these are critical factors that affect student succes",
    id: 3,
    arrow_position: "right",
  },
];

const HomeData = () => {
  // let left = 'left';
  return (
    <Fragment>
      {/* console.log({`arrow_` + left}) */}
      <div className='home_content_container'>
        <div className='home_content home_content_1'>
          <div className='home_content_1_text'>
            <h1 className='home_content_heading'>Who are peer mentors</h1>
            <p className='home_content_text'>
              Peer Mentors guide mentees while they pursue academics or career
              opportunities. <span className='highlight_span'>They are role models who provide emotional support
              and validation, assist their mentees in navigating the campus
              resources, and help their peers become more engaged in the VIT-AP
              community </span>. The mentors are not necessarily always a professor or
              alumni.
            </p>
          </div>
          <div className='test_video'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/TX9qSaGXFyg'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='home_content_2'>
          {homeData.map((cur, i) => {
            return (
              <Fragment>
                <div className='home_content'>
                  <h1 className='home_content_heading'>{cur.heading}</h1>
                  <p className='home_content_text'>{cur.content}</p>
                </div>
                {!(i + 1 === homeData.length) ? (
                  <img
                    src={cur.id % 2 == 0 ? arrowLeftB : arrowRightB}
                    id={`arrow_` + cur.arrow_position + `_style`}
                    className='arrow_big_style'
                    alt=''
                  />
                ) : null}
              </Fragment>
            );
          })}
        </div>
        <div className='home_content_3 home_content'>
          <h1 className='home_content_heading'>CONNECT WITH A MENTOR</h1>
          <p className='home_content_text'>
            If you are a current or prospective{" "}
            <span className='highlight_span'>
              first-year student looking to connect with a mentor
            </span>
            , please contact
            <a
              href='peermentoringservices.vitap@gmail.com'
              className='mail_link'
            >
              {" "}
              <span className='highlight_span'>
                peermentoringservices.vitap@gmail.com
              </span>
            </a>{" "}
            to learn more about what your college has to offer.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeData;
