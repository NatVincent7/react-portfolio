import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import Chip from '@mui/material/Chip';
import { workExperience, orgExperience, educationList, certifications } from '../data/portfolioData';

const iconStyle = { background: '#5000ca', color: '#fff' };
const cardStyle = { background: 'white' as const, color: 'rgb(39, 40, 34)' as const };
const arrowStyle = { borderRight: '7px solid white' };

const LogoHeader = ({ logo, title }: { logo?: string; title: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
    {logo && (
      <img src={logo} alt="logo" style={{
        height: 36, width: 36, borderRadius: 8, objectFit: 'contain',
        flexShrink: 0, background: '#f5f5f5', padding: 2,
      }} />
    )}
    <h3 className="vertical-timeline-element-title" style={{ margin: 0 }}>{title}</h3>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
    {items.map((point, j) => (
      <li key={j} style={{ marginBottom: '0.4rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{point}</li>
    ))}
  </ul>
);

const IconDataAnalyst = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-5h5v5zm5 0h-3V7h3v10z"/>
  </svg>
);

const IconPython = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

const IconSQL = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17c0 .5-2.13 2-6 2zm0-4c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13c0 .5-2.13 2-6 2z"/>
  </svg>
);

const IconLanguage = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
  </svg>
);

const getCertIcon = (name: string) => {
  if (name.toLowerCase().includes('python')) return <IconPython />;
  if (name.toLowerCase().includes('sql')) return <IconSQL />;
  if (name.toLowerCase().includes('ielts')) return <IconLanguage />;
  return <IconDataAnalyst />;
};

function Timeline() {
  const [tab, setTab] = useState<'work' | 'org'>('work');

  return (
    <>
      {/* ── EXPERIENCE ── */}
      <div id="experience">
        <div className="items-container">
          <h1>Work & Organization Experience</h1>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            {(['work', 'org'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  background: tab === t ? '#5000ca' : 'transparent',
                  color: tab === t ? '#fff' : '#9ca3af',
                  border: `1px solid ${tab === t ? '#5000ca' : '#444'}`,
                  borderRadius: '999px',
                  padding: '0.5rem 1.4rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                }}
              >
                {t === 'work' ? 'Work' : 'Organization'}
              </button>
            ))}
          </div>

          {tab === 'work' && (
            <VerticalTimeline>
              {workExperience.map((exp, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={cardStyle}
                  contentArrowStyle={arrowStyle}
                  date={exp.date}
                  iconStyle={iconStyle}
                  icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                  <LogoHeader logo={exp.logo} title={exp.title} />
                  <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                  <BulletList items={exp.description} />
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          )}

          {tab === 'org' && (
            <VerticalTimeline>
              {orgExperience.map((exp, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={cardStyle}
                  contentArrowStyle={arrowStyle}
                  date={exp.date}
                  iconStyle={iconStyle}
                  icon={<FontAwesomeIcon icon={faBuilding} />}
                >
                  <LogoHeader logo={exp.logo} title={exp.title} />
                  <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                  <BulletList items={exp.description} />
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          )}
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div id="education">
        <div className="items-container">
          <h1>Education</h1>
          <VerticalTimeline>
            {educationList.map((edu, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={cardStyle}
                contentArrowStyle={arrowStyle}
                date={edu.date}
                iconStyle={iconStyle}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
              >
                <LogoHeader logo={edu.logo} title={edu.title} />
                <h4 className="vertical-timeline-element-subtitle">{edu.subtitle}</h4>
                <BulletList items={edu.description} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* ── CERTIFICATIONS ── */}
      <div id="certifications">
        <div className="items-container">
          <h1>Certifications</h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '1rem',
          }}>
            {certifications.map((c, i) => (
              <div key={i} style={{
                border: '1px solid rgba(128,128,128,0.25)',
                borderRadius: 12,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.75rem',
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(128,128,128,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(128,128,128,0.25)')}
              >
                {getCertIcon(c.name)}
                <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>{c.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <Chip label={c.issuer} className="chip" size="small" />
                  <Chip label={c.year} className="chip" size="small" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;