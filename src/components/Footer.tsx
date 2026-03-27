import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/NatVincent7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/vincent68" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:nathaniel.vincent68@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://wa.me/6289519839355" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
        <a href="/react-portfolio/resume.pdf" target="_blank" rel="noreferrer" download><DescriptionIcon/></a>
      </div>
      <p>Let's Connect!</p>
    </footer>
  );
}

export default Footer;