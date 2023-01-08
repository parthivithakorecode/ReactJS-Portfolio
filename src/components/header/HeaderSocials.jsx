import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {SiCodechef} from 'react-icons/si'

import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/parthivi-thakore-12345p678/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/parthivithakorecode" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.codechef.com/users/parthivit" target="_blank" rel="noreferrer" ><SiCodechef /></a>
      <a href="https://leetcode.com/parthivithakore/" target="_blank" rel="noreferrer" ><SiLeetcode/></a>
      

    </div>
  )
}

export default HeaderSocials