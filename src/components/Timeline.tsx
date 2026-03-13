import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
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
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: 12,
                padding: '1.2rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#5000ca')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
              >
                {c.logoUrl ? (
                  <img src={c.logoUrl} alt="logo" style={{ width: 42, height: 42, borderRadius: 8, objectFit: 'contain', flexShrink: 0 }} />
                ) : (
                  <div style={{
                    width: 42, height: 42, borderRadius: 8, background: c.logoColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', fontWeight: 700, color: '#fff', flexShrink: 0,
                  }}>{c.logoText}</div>
                )}
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff' }}>{c.name}</div>
                  <div style={{ color: '#a855f7', fontSize: '0.78rem' }}>{c.issuer}</div>
                  <div style={{ color: '#9ca3af', fontFamily: 'monospace', fontSize: '0.72rem', marginTop: '0.2rem' }}>{c.year}</div>
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