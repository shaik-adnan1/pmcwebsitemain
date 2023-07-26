import "./contact.component.css";

const Contact = () => {
  return (
    <>
      <div className='contact_container'>
        <div className='contact_section_heading'>
          <h1>Contact details.</h1>
        </div>
        <div className='contact_section_details'>
          <div className='email_container'>
            <h3>Email</h3>
            <p>peermentoringservices.vitap@gmail.com</p>
            <a
              href='https://mail.google.com/mail/?view=cm&to=peermentoringservices.vitap@gmail.com'
              className='link_btn mailLink_anchor'
            >
              Mail Us
            </a>
          </div>
          <div className='insta_youtube_container'>
            <div className='insta_container'>
              <h3>Follow out official instagram page!</h3>
              <a href='#' className='link_btn instaLink_anchor'>
                Instagram
              </a>
            </div>
            <div className='youtube_container'>
              <h3>Follow out official instagram page!</h3>
              <a
                href='https://www.youtube.com/channel/UCjUrifb6-9d7Ksy-Mxr1FYA'
                className='Youtube_anchor link_btn'
              >
                Youtube channel
              </a>
            </div>
          </div>
          <div className='discord_container'>
            <h3>
              Join our Official Discord Server to hang out with your batchmates
              and the people behind the Peer Committee!
            </h3>
            <a
              href='https://www.youtube.com/channel/UCjUrifb6-9d7Ksy-Mxr1FYA'
              className='Youtube_anchor link_btn'
            >
              Discord server
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
