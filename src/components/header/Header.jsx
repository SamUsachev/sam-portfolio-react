import React from 'react';
import photoLogo from './../../assets/photo-logo.png';

import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <header className="header">
    //   <div className="header_content">
    //     <div className="header_logo-container">
    //       <div className="header_logo_img-container">
    //         <img
    //           src={photoLogo}
    //           alt="Sam Usachev Logo Image"
    //           className="header_logo-img"
    //         />
    //       </div>
    //       <span className="header__logo-sub">Sam Usachev</span>
    //     </div>
    //     <div className="header_main">
    //       <ul className="header_links">
    //         <li className="header_link-wrapper">
    //           <a href="" className="header_link">
    //             Home
    //           </a>
    //         </li>
    //         <li className="header_link-wrapper">
    //           {/* <a className="header_link">

    //           </a> */}
    //           <Link to="/about" className="header_link">
    //             About
    //           </Link>
    //         </li>
    //         <li className="header_link-wrapper">
    //           <a href="" className="header_link">
    //             Projects
    //           </a>
    //         </li>
    //         <li className="header_link-wrapper">
    //           <a href="" className="header_link">
    //             {' '}
    //             Contact{' '}
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="link">
            <div className="header_logo-container">
              <div className="header_logo_img-container">
                <img
                  src={photoLogo}
                  alt="Sam Usachev Logo Image"
                  className="header_logo-img"
                />
              </div>
              <span className="header__logo-sub">Sam Usachev</span>
            </div>
          </Link>
          <ul className="nav-menu">
            <li className="navlink">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="navlink">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="navlink">
              <Link to="/projects" className="link">
                Projects
              </Link>
            </li>
            <li className="navlink">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
