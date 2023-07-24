import { faCookieBite, faFaceAngry, faDiscord } from "@fortawesome/free-solid-svg-icons";
import "./mentors.component.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// faFaceAngry
// faCookieBite

// faDiscord


import { LinkedinLogo } from "@phosphor-icons/react";
import {FacebookLogo} from "@phosphor-icons/react";
import {InstagramLogo} from "@phosphor-icons/react";

const mentorsData = [
  {
    name: "Sai Vamsi",
    Image: require("../../assets/images/mentors/vamsi anna.jpeg"),
    quote: `I’m an individual who thrive on helping others, 
                  paying it forward and going above and beyond with every task. 
                  I’m enthusiastic about growing and gaining new skills on my journey
                as a student in the VIT-AP university. I value learning from others
                , genuine connections and hearing other people’s passions and how 
                I can possibly help. I also believing in getting shit done smiling
                , laughing and even twirling along the way!`,
    socialLinks: ["#", "#", "#"],
    email: " vamsi.19bcn7258@vitap.ac.in",
    id: 0,
  },
  {
    name: "Monkey D. Luffy",
    Image: require("../../assets/images/mentors/luffy.jpeg"),
    quote: `Luffy first appears as a young boy in Windmill Village located in the Goa kingdom, who befriends the pirate "Red-Haired" Shanks and intends to become one himself. He accidentally eats the Human Human fruit, model: "Nika" fruit and acquires rubber powers at the cost of being unable to swim.`,
    socialLinks: ["#", "#", "#"],
    email: "vamsi.19bcn7258@vitap.ac.in",
    id: 0,
  },
  {
    name: "Rocks",
    Image: require("../../assets/images/mentors/rocks.jpeg"),
    quote: `Rocks appeared to be an incredibly vicious and ambitious man, having no care as to who he attacked as long as he could garner power for himself and leading his crew to destroy whoever interfered with his ambitions. He was also quite fearless and indiscriminately ruthless, as he had no issue with killing World Nobles or their slaves if it suited his wishes. Rocks' dream was to become the King of the World`,
    socialLinks: ["#", "#", "#"],
    email: "vamsi.19bcn7258@vitap.ac.in",
    id: 0,
  },
  {
    name: "Gol D. Roger",
    Image: require("../../assets/images/mentors/Gol.jpg"),
    quote: `Gol D. Roger, more commonly known as Gold Roger, was a legendary pirate who, as captain of the Roger Pirates, held the title of Pirate King and owned the legendary treasure known as One Piece. He was also the lover of Portgas D. Rouge and the biological father of Portgas D. Ace.`,
    socialLinks: ["#", "#", "#"],
    email: "vamsi.19bcn7258@vitap.ac.in",
    id: 0,
  },
  {
    name: "Monkey D. Garp",
    Image: require("../../assets/images/mentors/garp.jpeg"),
    quote: `He is the father of Monkey D. Dragon,[13] the paternal grandfather of Monkey D. Luffy,[14] and the adoptive grandfather of Portgas D. Ace. He was responsible for overseeing Ace's birth and raising a young Luffy, before entrusting them both to the Dadan Family.

Garp is one of the major figures, along with Kong, Sengoku, Shiki, Silvers Rayleigh, Tsuru, and Whitebeard, from the times when Gol D. Roger, the "Pirate King", was still alive.`,
    socialLinks: ["#", "#", "#"],
    email: "vamsi.19bcn7258@vitap.ac.in",
    id: 0,
  },
];

const Mentors = () => {
  return (
    <>
      <div className='mentor_section_container'>
        <div className='mentor_section_heading'>
          <h1 className='mentors_heading'>Meet the peer mentors</h1>
        </div>
        <div className='mentors_main_container'>
          {mentorsData.map((cur, i) => {
            return (
              <div className='mentor_card'>
                <div className='mentor_picture'>
                  <img src={cur.Image} alt='' />
                </div>
                <div className='mentor_details'>
                  <div className='mentor_name'>
                    <h1>{cur.name}</h1>
                  </div>
                  <div className='mentor_quote'>
                    <p>{cur.quote}</p>
                    <p className='mentor_email'>
                      Email:
                      <a
                        href={
                          "https://mail.google.com/mail/?view=cm&to=" +
                          cur.email
                        }
                        className='mentor_email_link'
                        target='_blank'
                      >
                        {cur.email}
                      </a>
                    </p>
                  </div>
                  <div className='mentor_social_links'>
                    <a
                      className='mentor_social_icon'
                      href={cur.socialLinks[cur.id]}
                    >
                      <ion-icon name='logo-linkedin'></ion-icon>
                    </a>
                    <a
                      className='mentor_social_icon'
                      href={cur.socialLinks[cur.id + 1]}
                    >
                      <ion-icon
                        name='logo-instagram'
                        
                      ></ion-icon>
                    </a>
                    <a
                      className='mentor_social_icon'
                      href={cur.socialLinks[cur.id + 2]}
                    >
                      <ion-icon
                        name='logo-facebook'
                       
                      ></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mentors;
