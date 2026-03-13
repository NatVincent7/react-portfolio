import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const technicalSkills = [
    "SQL", "MySQL", "BigQuery", "Python", "Pandas", "NumPy",
    "Tableau", "Power BI", "Matplotlib", "Seaborn",
    "Google Analytics", "Excel", "ETL & SQL Pipelines",
    "Hypothesis Testing", "Git", "GitHub", "Jupyter Notebook",
];

const softSkills = [
    "Structured Problem Solving", "Data Storytelling",
    "Stakeholder Management", "Business Acumen", "Bias for Action",
];

const TechnicalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

const SoftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

function Expertise() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Technical & Soft Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <TechnicalIcon />
                    <h3>Technical Skills</h3>
                    <div className="flex-chips">
                        {technicalSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <SoftIcon />
                    <h3>Soft Skills</h3>
                    <div className="flex-chips">
                        {softSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;