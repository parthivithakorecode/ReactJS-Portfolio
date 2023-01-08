import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'
import { SiCodechef} from 'react-icons/si'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Parthivi Thakore</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects and Publications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/parthivi-thakore-12345p678/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/parthivithakorecode" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/parthivithakore/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
      <a href="https://www.codechef.com/users/parthivit" target="_blank" rel="noreferrer" ><SiCodechef /></a>

      </div>
      
    </footer>
  )
}

export default Footer