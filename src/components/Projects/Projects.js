import React, { useState } from 'react';
import './Projects.scss';
import Animate from '../Animate/Animate';

const Projects = () => {
  const expArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
  const [letterClass, setLetterClass] = useState('text-animate');
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Lightbulb",
      subtitle: "AI-Powered Learning Platform",
      liveLink: "https://uselightbulb.vercel.app",
      githubLink: "https://github.com/dwang1257/lightbulb",
      period: "2024 - Present",
      description: "An intelligent learning platform that uses AI to help students understand complex concepts through personalized explanations and interactive learning experiences."
    },
    {
      id: 2,
      title: "VCT Data Analytics",
      subtitle: "Esports Statistics Dashboard",
      liveLink: null,
      githubLink: "https://github.com/dwang1257/VCT-Data",
      period: "2024",
      description: [
        "Comprehensive data analytics platform for Valorant Champions Tour (VCT) esports statistics and performance metrics.",
        "Built with React and data visualization libraries to provide insights into player performance, team strategies, and tournament trends."
      ]
    },
    {
      id: 3,
      title: "Temperature Sensor System",
      subtitle: "IoT Hardware Project",
      liveLink: null,
      githubLink: "https://github.com/dwang1257/temperature-sensor",
      period: "2023",
      description: [
        "Arduino-based temperature monitoring system with real-time data logging and alert capabilities.",
        "Integrated with web dashboard for remote monitoring and historical data analysis."
      ]
    },
    {
      id: 4,
      title: "PomFocus App",
      subtitle: "Productivity Timer Application",
      liveLink: "https://dwang1257.github.io/pomofocus-app/",
      githubLink: "https://github.com/dwang1257/pomofocus-app",
      period: "2023",
      description: "A modern Pomodoro timer application built with React, featuring customizable work/break intervals, progress tracking, and productivity analytics."
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="experience-block">
      <div className="experience-header">
        <Animate
          letterClass={letterClass}
          strArray={expArray}
          idx={0}
        />
      </div>

      <div className="experience-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`experience-card ${expandedCard === project.id ? 'expanded' : ''}`}
            onClick={() => toggleCard(project.id)}
          >
            <div className="card-header">
              <h3 className="experience-title">{project.title}</h3>
              <h4 className="experience-company">{project.subtitle}</h4>
              
              <div className="experience-meta">
                <div className="project-links">
                  {project.liveLink && (
                    <button
                      className="project-link live-link"
                      onClick={(e) => handleLinkClick(e, project.liveLink)}
                      title="View Live Demo"
                    >
                      Link to Website!
                    </button>
                  )}
                  <button
                    className="project-link github-link"
                    onClick={(e) => handleLinkClick(e, project.githubLink)}
                    title="View GitHub Repository"
                  >
                    GitHub Repository
                  </button>
                </div>
                <span className="experience-period">{project.period}</span>
              </div>
            </div>

            {expandedCard === project.id && (
              <div className="card-content">
                <div className="experience-description">
                  {Array.isArray(project.description) ? (
                    project.description.map((item, index) => (
                      <p key={index} className="description-item">
                        • {item}
                      </p>
                    ))
                  ) : (
                    <p className="description-item">• {project.description}</p>
                  )}
                </div>
              </div>
            )}
            
            <div className="expand-indicator">
              {expandedCard === project.id ? '−' : '+'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;