import {
  Envelope,
  FacebookLogo,
  YoutubeLogo,
  DiscordLogo,
} from "@phosphor-icons/react";

import "./footer.component.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <>
      <div className='footer_container'>
        <div className='footer_content'>
          <a className='facebook_link' href='#'>
            <FacebookLogo className='footer_icons facebook_icon' size={50} />
          </a>
          <a href='#' className='discord_link'>
            <DiscordLogo className='footer_icons discord_icon' size={50} />
          </a>
          <a href='#' className='gmail_link'>
            <Envelope className='footer_icons gmail_icon' size={50} />
          </a>
          <a href='#' className='youtube_link'>
            <YoutubeLogo className='footer_icons youtube_icon' size={50} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
