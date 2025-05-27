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
      description: "Incoming Software Engineer Intern at Fidelity Investments, leveraging Angular, Spring Boot, and SQL to develop and optimize scalable software solutions."
    },
    {
      id: 2,
      title: "Machine Learning Research Intern",
      company: "University of Massachusetts Lowell",
      location: "Lowell, MA",
      period: "July 2024 – Aug 2024",
      description: [
        "Optimized data preparation pipeline by eliminating 50+ irrelevant endoscopy images and establishing an 80/20 train–test split, boosting model accuracy and training throughput for medical imaging applications.",
        "Developed and integrated a custom PyTorch Dataset class with advanced augmentations (rotation, flipping, cropping) and automated COCO API driven mask generation, producing 1,000+ precise segmentation masks via Python (OS, Pillow, NumPy) and reducing preprocessing errors while enhancing robustness of downstream neural models."
      ]
    },
    {
      id: 3,
      title: "Test Engineering Intern",
      company: "Charm Sciences",
      location: "Andover, MA",
      period: "Jun 2022 – Sep 2022",
      description: [
        "Performed end-to-end testing and QA for firmware powering 100+ ROSA and Digital Dry Block Incubators, ensuring 100% reliability and performance for clients.",
        "Gained hands-on experience with the full hardware product lifecycle, from design through assembly, while applying insights to streamline workflows and improve operational efficiency."
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