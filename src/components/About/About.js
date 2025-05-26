import './About.scss';
import Animate from '../Animate/Animate';
import { useState } from 'react';
import 'animate.css';
import '../Layout/Layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faAws, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div className='container about-page'> 
            <div className='text-zone'>
                <h1 className='about-title'><Animate  strArray = {aboutArray} letterClass = {letterClass}index = {0} /></h1>
                <p className='about-content'>
                    I am an ambitious and driven software engineer interested in Finance, AI, and Cloud Computing. I care deeply about writing
                    software that is both efficient and meaningful, I want to write code that people actually use.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#9C9C6E' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#9C9C6E' />

                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color='#9C9C6E' />

                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color='#9C9C6E' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAws} color='#9C9C6E' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faHtml5} color='#9C9C6E' />
                    </div>
                </div>
            </div>
        </div>
          

    );
}

export default About
