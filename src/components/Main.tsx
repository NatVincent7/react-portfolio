import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
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
          </div>

          <h1>Nathaniel Vincent</h1>
          <p>Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/NatVincent7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vincent68/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nathaniel.vincent68@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;