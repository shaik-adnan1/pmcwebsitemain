import "./navigation.component.css";

import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import pmcLogo from "../../assets/images/logo.png";

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        {/*  */}
        <Link to='/' className='logo-container'>
          <img src={pmcLogo} alt='' className='main_logo' />
          {/* <div className='logo-text'>peer mentoring committee</div> */}
        </Link>
        {/*  */}
        <div className='nav_links-container'>
          <Link to='/' className='nav-link link_btn'>
            Home
          </Link>
          <Link to='/About' className='nav-link link_btn'>
            About
          </Link>
          <Link to='/events' className='nav-link link_btn'>
            Events
          </Link>
          <Link to='/peermentors' className='nav-link link_btn'>
            Peer Mentors
          </Link>
          <Link to='/contacts' className='nav-link link_btn'>
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
