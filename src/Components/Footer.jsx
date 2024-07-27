import React from 'react';
import { pagesData } from './data';
import { socialLinks } from './data';

export default function Footer() {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pagesData.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <a href="#featured" className="footer-link">
              featured
            </a>
          </li>
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((socialLink)=> {
            let {id,link,icon} = socialLink;
            return (
              <li key={id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
          
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
}
