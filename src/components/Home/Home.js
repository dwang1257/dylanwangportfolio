import { Link } from 'react-router-dom';
import { useState } from 'react';
import Animate from '../Animate/Animate';
import Logo from './Logo/logo';
import './Home.scss';
const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['H', 'i',]
    const nameArray = ['I', "'", 'm', ' ', 'D', 'y', 'l', 'a', 'n']
    const stuArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> <Animate letterClass = {letterClass} strArray = {hiArray} index = {0}/>
                <br /> 
                <Animate letterClass = {letterClass} strArray = {nameArray} index = {hiArray.length}/>
                <br />
                <Animate letterClass = {letterClass} strArray = {stuArray} index = {hiArray.length + nameArray.length}/>
                </h1>
                <h2>Computer Engineering @ University of Massachusetts Amherst </h2>
                <Link to = '/contact' className='flat-button'>Contact Me</Link>
            </div>
            <div class="loader"></div>
            <Logo />
        </div>
    )
}

export default Home