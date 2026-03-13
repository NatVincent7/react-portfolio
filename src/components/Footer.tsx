import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/NatVincent7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/vincent68" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:nathaniel.vincent68@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Let's Connect!</p>
    </footer>
  );
}

export default Footer;