import React from "react";
import '../assets/styles/Expertise.scss';

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About Me</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '860px' }}>

          <p style={{ lineHeight: 2, fontSize: '1rem', margin: 0 }}>
            I am a certified <strong>BNSP Data Analyst</strong> with a proactive mindset and a
            commitment to continuous learning, experienced in transforming data into actionable
            insights that drive revenue growth and operational efficiency. In my previous role as{' '}
            <strong>Business Analyst for the CEO Office</strong>, I utilized data to shape strategic
            initiatives that contributed to a 7% increase in potential revenue and uncovered 32.3%
            operational cost efficiency opportunities.
          </p>

          <p style={{ lineHeight: 2, fontSize: '1rem', margin: 0 }}>
            I am strengthening my hands-on analytics toolkit through a full-stack data analytics
            bootcamp, focusing on SQL, Python, and statistics to complement my Excel, Power BI, and
            Google Analytics foundation. I am driven to leverage this combination of analytical rigor
            and problem-solving to deliver measurable business impact and help organizations scale
            smarter through data-informed decision-making.
          </p>

        </div>
      </div>
    </div>
  );
}

export default About;