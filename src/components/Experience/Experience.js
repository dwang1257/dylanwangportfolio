import React, { useState } from 'react';
import './Experience.scss';
import Animate from '../Animate/Animate';

const Experience = () => {
  const expArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];
  const [letterClass, setLetterClass] = useState('text-animate');
  const [expandedCard, setExpandedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Fidelity Investments",
      location: "Merrimack, NH",
      period: "June 2025 – Aug 2025",
      description: ["Modernized and migrated a legacy metadata application by redesigning the UI and reducing load times by 30% through Redis caching and optimized SQL queries which supports 100% of the business unit’s APIs, enabling engineers to manage metadata across 1000+ microservices.",
        "Automated daily API reporting by building a tool that extracts usage metrics from Splunk for Tomcat/WSO2 APIs, generating data delivered to AWS S3 buckets, which are ingested into Snowflake, then visualized via PowerBI, processing 1,500+ API requests daily",
        "Implemented Open Policy Agent enforcement across multiple Kubernetes deployed applications on Amazon EKS, integrating automated security policy checks within Jenkins CI/CD pipelines, reducing security risks found through penetration testing."
      ]
    },
    {
      id: 2,
      title: "Machine Learning Research Intern",
      company: "University of Massachusetts Lowell",
      location: "Lowell, MA",
      period: "July 2024 – Aug 2024",
      description: [
        "Built a custom PyTorch dataset class with automated mask generation and advanced augmentations, reducing preprocessing errors by 45% and generating 1,000+ segmentation masks for endoscopy classification.",
        "Optimized data preparation pipeline by filtering 50+ irrelevant endoscopy images and implementing an 80 to 20 train/test split, boosting model accuracy by 30% and increasing training throughput by 15% for medical imaging applications."
      ]
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "Charm Sciences",
      location: "Andover, MA",
      period: "Jun 2022 – Sep 2022",
      description: [
        "Wrote Python test scripts to validate ROSA incubators and digital dry block incubators, reducing manual testing time by 85% and ensuring consistent QA across 500+ hardware units.",
      ]
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className='experience-block'>
      <h1 className='experience-header'>
        <Animate strArray={expArray} letterClass={letterClass} index={0} />
      </h1>
      
      <div className='experience-container'>
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className={`experience-card ${expandedCard === exp.id ? 'expanded' : ''}`}
            onClick={() => toggleCard(exp.id)}
          >
            <div className='card-header'>
              <h2 className='experience-title'>{exp.title}</h2>
              <h3 className='experience-company'>{exp.company}</h3>
              <div className='experience-meta'>
                <span className='experience-location'>{exp.location}</span>
                <span className='experience-period'>{exp.period}</span>
              </div>
            </div>
            
            {expandedCard === exp.id && (
              <div className='card-content'>
                <div className='experience-description'>
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item, index) => (
                      <p key={index} className='description-item'>• {item}</p>
                    ))
                  ) : (
                    <p className='description-item'>• {exp.description}</p>
                  )}
                </div>
              </div>
            )}
            
            <div className='expand-indicator'>
              {expandedCard === exp.id ? '−' : '+'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;