import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionIcon from '@mui/icons-material/Description';
import profilePic from '../assets/images/profile.jpeg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Nathaniel Vincent" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NatVincent7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vincent68/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nathaniel.vincent68@gmail.com"><EmailIcon/></a>
            <a href="https://wa.me/6289519839355" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="/react-portfolio/resume.pdf" target="_blank" rel="noreferrer" download><DescriptionIcon/></a>
          </div>

          <h1>Nathaniel Vincent</h1>
          <p>Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/NatVincent7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vincent68/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nathaniel.vincent68@gmail.com"><EmailIcon/></a>
            <a href="https://wa.me/6289519839355" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="/react-portfolio/resume.pdf" target="_blank" rel="noreferrer" download><DescriptionIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;