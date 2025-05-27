import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className = 'nav-bar'>
        <nav>
            <NavLink exact = 'true' activeclassname = "active" to = '/'>
                <FontAwesomeIcon icon = {faHome} color = 'white' />
            </NavLink>
            <NavLink exact = 'true' activeclassname = "active" className = "about-link" to = '/about'>
                <FontAwesomeIcon icon = {faUser} color = 'white' />
            </NavLink>
            <NavLink exact = 'true' activeclassname = 'active' className={'experience-link'} to = '/experience'>
                <FontAwesomeIcon icon = {faBriefcase} color = 'white'/>
            </NavLink>
            <NavLink exact = 'true' activeclassname = "active" className={"projects-link"} to = '/projects'>
                <FontAwesomeIcon icon = {faBrain} color = 'white' />
            </NavLink>
            <NavLink exact = 'true' activeclassname = "active" className={"contact-link"} to = '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color = 'white' />
            </NavLink>

            
        </nav>
        <ul>
            <li>
                <a target = "_blank" href = 'https://www.linkedin.com/in/dylanwang1'>
                    <FontAwesomeIcon icon = {faLinkedin} color = 'white' />
                </a>
            </li>
            <li>
                <a target = '_blank' href = 'https://github.com/dwang1257'>
                    <FontAwesomeIcon icon = {faGithub} color = "#FFFFFF" />
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar