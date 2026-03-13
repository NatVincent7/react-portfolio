import React, { useState } from "react";
import {
  Dialog, DialogContent, DialogTitle, IconButton, Chip, Drawer
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projectsData, ProjectData } from '../data/portfolioData';
import '../assets/styles/Project.scss';

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 700,
  color: '#a855f7',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '0.6rem',
  marginTop: '1.8rem',
};

const categoryColors: Record<string, string> = {
  'Data Analysis': '#0ea5e9',
  'Machine Learning': '#10b981',
  'Marketing Analytics': '#f59e0b',
};

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleOpen = (project: ProjectData) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            className="project"
            key={index}
            onClick={() => handleOpen(project)}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            {/* category badge */}
            <div style={{
              position: 'absolute', top: '1rem', left: '1rem',
              background: categoryColors[project.category] || '#5000ca',
              color: '#fff', fontSize: '0.72rem', fontWeight: 600,
              padding: '0.25rem 0.7rem', borderRadius: '999px',
            }}>
              {project.category}
            </div>

            {project.thumbnail
              ? <img src={project.thumbnail} className="zoom" alt="thumbnail" width="100%" style={{ borderRadius: 8 }} />
              : <div style={{
                  width: '100%', height: 160, borderRadius: 8,
                  background: 'linear-gradient(135deg, #1e1e2e, #3b0764)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.5rem', marginBottom: '0.5rem',
                }}>📊</div>
            }

            <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>{project.title}</h2>
            <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.6 }}>{project.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
              {project.techStack.map((tech, i) => (
                <Chip key={i} label={tech} size="small"
                  sx={{ background: '#5000ca22', color: '#a855f7', border: '1px solid #5000ca55', fontSize: '0.72rem' }} />
              ))}
            </div>

            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#a855f7', fontWeight: 500 }}>
              View case study →
            </div>
          </div>
        ))}
      </div>

      {/* ── DETAIL DRAWER ── */}
      <Drawer
        anchor="right"
        open={!!selectedProject}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '100%',
            maxWidth: 680,
            background: '#111',
            color: '#fff',
            padding: '2rem',
            overflowY: 'auto',
          }
        }}
      >
        {selectedProject && (
          <div>
            {/* header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  background: categoryColors[selectedProject.category] || '#5000ca',
                  color: '#fff', fontSize: '0.75rem', fontWeight: 600,
                  padding: '0.25rem 0.8rem', borderRadius: '999px', marginBottom: '0.6rem',
                }}>
                  {selectedProject.category}
                </div>
                <h2 style={{ margin: 0, fontSize: '1.5rem', lineHeight: 1.3 }}>{selectedProject.title}</h2>
              </div>
              <IconButton onClick={handleClose} sx={{ color: '#fff', flexShrink: 0 }}>
                <CloseIcon />
              </IconButton>
            </div>

            {/* cover image */}
            {(selectedProject.imgUrl || selectedProject.thumbnail) && (
              <img
                src={selectedProject.imgUrl || selectedProject.thumbnail}
                alt={selectedProject.title}
                style={{ width: '100%', borderRadius: 10, marginBottom: '0.5rem', maxHeight: 260, objectFit: 'cover' }}
              />
            )}

            {/* tools */}
            <div style={sectionHeadingStyle}>🛠 Tools & Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selectedProject.techStack.map((tech, i) => (
                <Chip key={i} label={tech}
                  sx={{ background: '#1e1e2e', color: '#a855f7', border: '1px solid #5000ca', fontWeight: 500 }} />
              ))}
            </div>

            {/* background */}
            <div style={sectionHeadingStyle}>📋 Background</div>
            <p style={{ lineHeight: 1.8, color: '#d1d5db', margin: 0 }}>{selectedProject.background}</p>

            {/* scope of work */}
            <div style={sectionHeadingStyle}>🎯 Scope of Work</div>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {selectedProject.scopeOfWork.map((item, i) => (
                <li key={i} style={{ color: '#d1d5db', lineHeight: 1.8, marginBottom: '0.3rem' }}>{item}</li>
              ))}
            </ul>

            {/* process */}
            <div style={sectionHeadingStyle}>⚙️ Process</div>
            <p style={{ lineHeight: 1.8, color: '#d1d5db', margin: 0 }}>{selectedProject.process}</p>

            {/* process diagram if available */}
            {selectedProject.processDiagram && (
              <img
                src={selectedProject.processDiagram}
                alt="Process diagram"
                style={{ width: '100%', borderRadius: 8, marginTop: '1rem', border: '1px solid #333' }}
              />
            )}

            {/* results */}
            <div style={sectionHeadingStyle}>📈 Results</div>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {selectedProject.results.map((item, i) => (
                <li key={i} style={{ color: '#d1d5db', lineHeight: 1.8, marginBottom: '0.3rem' }}>{item}</li>
              ))}
            </ul>

            {/* links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: '#1e1e2e', color: '#fff', padding: '0.6rem 1.2rem',
                  borderRadius: '8px', textDecoration: 'none', fontWeight: 600,
                  border: '1px solid #333',
                }}>
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
              )}
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: '#5000ca', color: '#fff', padding: '0.6rem 1.2rem',
                  borderRadius: '8px', textDecoration: 'none', fontWeight: 600,
                }}>
                  <LaunchIcon fontSize="small" /> View Project
                </a>
              )}
            </div>

            <div style={{ height: '3rem' }} />
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default Project;