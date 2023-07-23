import "./mentors.component.css";

const mentorsData = [
  {
    name: "Sai Vamsi",
    Image: "",
    quote: `I’m an individual who thrive on helping others, 
                  paying it forward and going above and beyond with every task. 
                  I’m enthusiastic about growing and gaining new skills on my journey
                as a student in the VIT-AP university. I value learning from others
                , genuine connections and hearing other people’s passions and how 
                I can possibly help. I also believing in getting shit done smiling
                , laughing and even twirling along the way!`,
    socialLinks: [],
    email: " vamsi.19bcn7258@vitap.ac.in",
  },
  {
    name: "Monkey D. Luffy",
    Image: "",
    quote: `I’m an individual who thrive on helping others, 
                  paying it forward and going above and beyond with every task. 
                  I’m enthusiastic about growing and gaining new skills on my journey
                as a student in the VIT-AP university. I value learning from others
                , genuine connections and hearing other people’s passions and how 
                I can possibly help. I also believing in getting shit done smiling
                , laughing and even twirling along the way!`,
    socialLinks: [],
    email: " vamsi.19bcn7258@vitap.ac.in",
  },
  {
    name: "Rocks",
    Image: "",
    quote: `I’m an individual who thrive on helping others, 
                  paying it forward and going above and beyond with every task. 
                  I’m enthusiastic about growing and gaining new skills on my journey
                as a student in the VIT-AP university. I value learning from others
                , genuine connections and hearing other people’s passions and how 
                I can possibly help. I also believing in getting shit done smiling
                , laughing and even twirling along the way!`,
    socialLinks: [],
    email: " vamsi.19bcn7258@vitap.ac.in",
  },
  {
    name: "Gol D. Roger",
    Image: "",
    quote: `I’m an individual who thrive on helping others, 
                  paying it forward and going above and beyond with every task. 
                  I’m enthusiastic about growing and gaining new skills on my journey
                as a student in the VIT-AP university. I value learning from others
                , genuine connections and hearing other people’s passions and how 
                I can possibly help. I also believing in getting shit done smiling
                , laughing and even twirling along the way!`,
    socialLinks: [],
    email: " vamsi.19bcn7258@vitap.ac.in",
  },
  {
    name: "Monkey D. Garp",
    Image: "",
    quote: `I’m an individual who thrive on helping others, 
                  paying it forward and going above and beyond with every task. 
                  I’m enthusiastic about growing and gaining new skills on my journey
                as a student in the VIT-AP university. I value learning from others
                , genuine connections and hearing other people’s passions and how 
                I can possibly help. I also believing in getting shit done smiling
                , laughing and even twirling along the way!`,
    socialLinks: [],
    email: " vamsi.19bcn7258@vitap.ac.in",
  },
];

const Mentors = () => {
  return (
    <>
      <div className='mentor_section_container'>
        <div className='mentor_section_heading'>
          <h1 className='mentors_heading'>Meet the peer mentors</h1>
        </div>

        {mentorsData.map((cur, i) => {
          return (
            <div className='mentors_container'>
              <div className='mentor_card'>
                <div className='mentor_picture'></div>
                <div className='mentor_details'>
                  <div className='mentor_name'>
                    <h1>{cur.name}</h1>
                  </div>
                  <div className='mentor_quote'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, dolore! Dolorem officiis nulla quae sit. Facere
                      nobis soluta animi? Qui corporis reprehenderit nostrum
                      voluptas quis distinctio possimus rem laborum numquam.
                    </p>
                    <p className='mentor_email'>
                      Email:
                      <a
                        href='https://mail.google.com/mail/?view=cm&to=vamsi.19bcn7258@vitap.ac.in'
                        className='mentor_email_link'
                        target='_blank'
                      >
                        abc@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className='mentor_social_links'></div>
                </div>
              </div>
            </div>
          );
        })}

        
      </div>
    </>
  );
};

export default Mentors;
