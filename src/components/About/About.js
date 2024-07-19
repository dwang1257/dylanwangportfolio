import './About.scss';
import Animate from '../Animate/Animate';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/download.png';
import react from '../../assets/images/react.png';
import { useState } from 'react';
import 'animate.css';

const About = () => {
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div> 
            <h1 className='about-title'><Animate  strArray = {aboutArray} letterClass = {letterClass}index = {0} /></h1>
            <br />
            <p className='about-content'>
            Hello! I'm currently a junior majoring in Computer Engineering at UMASS Amherst.
             With a solid foundation in software development, I am eager to land a software engineering internship 
             where I can apply my skills and grow professionally. 
             My interests span across various fields, including machine learning and web development,
            where I find immense satisfaction in creating and optimizing applications. 
            I am proficient in multiple programming languages such as Python, Java, C, HTML, CSS, and JavaScript.
             Additionally, I have experience working with frameworks, libraries, and tools like React, GitHub, and Excel.
            </p>
                <img class = 'animate__animated animate__rubberBand' src={html} alt = 'html-logo' />
                <img class = 'animate__animated animate__rubberBand' src = {css} alt = 'css-logo' />
                <img class = 'animate__animated animate__rubberBand' src = {js} alt = 'js-logo' />
                <img class = 'animate__animated animate__rubberBand' src = {react} alt = 'react-logo' />
          
        </div>
          
    )
}

export default About
