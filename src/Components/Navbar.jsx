import React from 'react';
import logoImg from '../Images/logo.svg';
import { pagesData } from './data';
import { socialLinks } from './data';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logoImg} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {pagesData.map(link =>{
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              );
            })}
            
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((socialLinks)=>{
              let {id,link,icon} = socialLinks;
              return (
                <li key={id}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

