import './Projects.scss';
import Animate from '../Animate/Animate';
import 'animate.css';
import { useState } from 'react';


const Projects = () => {

    const expArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']
    const scrollArray = ['S', 'c', 'r', 'o', 'l', 'l', ' ', 'D', 'o', 'w', 'n', '!']
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div className='experience-block'>
            <h1 className='experience-header'><Animate  strArray = {expArray} letterClass = {letterClass}index = {0} /></h1>
            <ul className='experience'>
                <li className='experience-one'>
                    <h2 className='experience-title'>Research Intern, UMass Lowell</h2>
                    <p className='experience-body'>Developed accurate lesion segmentation models by processing over 23,000+ endoscopy images and annotations from JSON files using image segmentation techniques.</p>
                    <p className='experience-body'>Organized and prepared large-scale datasets for training and validation, ensuring data integrity and consistency by splitting over 23,000 image/mask pairs and categorizing them into separate folders based on patient data.</p>
                </li>
                <div className='scroll'><Animate  strArray = {scrollArray} letterClass = {letterClass}index = {0} /></div>
                <li className='experience-two'>
                    <h2 className='experience-title'>Resident Assistant, UMass Amherst</h2>
                    <p className='experience-body'>Managed the residential experience for over 600 residents, implementing comprehensive programming and support initiatives that improved resident satisfaction by 20%.</p>
                    <p className='experience-body'>Facilitated over 30 discussions on academic success, mental health awareness, and leadership, enhancing community engagement and well-being.</p>
                </li>
                <li className='experience-three'>
                    <h2 className='experience-title'>Electronics Assembly Technician, Charm Sciences</h2>
                    <p className='experience-body'>Acquired experience in testing firmware in over 100 ROSA and Digital Dry Block Incubators, analyzing performance and ensuring reliability.</p>
                    <p className='experience-body'>Explored and understood the product life cycle, applying knowledge to improve product development processes</p>
                </li>
                <li className='experience-four'>
                    <h2 className='experience-title'>Crew Member, Chipotle Mexican Grill</h2>
                    <p className='experience-body'>Achieved a 98% customer satisfaction rate by providing attentive service and accurate orders.</p>
                    <p className='experience-body'>Collaborated with team members to improve inventory management, reducing food waste and maintaining freshness.</p>
                </li>
            </ul>
        
        </div>

    )


}

export default Projects